import { supabase } from './supabase';
import { sanitizeInput, validateEmail, validatePhone } from './encryption';
import type { Database } from './database.types';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service: string;
  date?: string;
  time?: string;
}

interface StorageError extends Error {
  code?: string;
  details?: string;
}

export async function storeContactFormData(data: ContactFormData) {
  try {
    // Input validation
    if (!data.name || !data.email || !data.message || !data.service) {
      throw new Error('Required fields missing');
    }
    if (!validateEmail(data.email)) {
      throw new Error('Invalid email format');
    }
    if (data.phone && !validatePhone(data.phone)) {
      throw new Error('Invalid phone format');
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: data.phone ? sanitizeInput(data.phone) : null,
      company: data.company ? sanitizeInput(data.company) : null,
      message: sanitizeInput(data.message),
      service: sanitizeInput(data.service),
      date: data.date || null,
      time: data.time || null,
      created_at: new Date().toISOString(),
      status: 'pending'
    };

    // Store in Supabase with RLS
    const { error } = await supabase
      .from('contact_submissions')
      .insert([sanitizedData]);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    const err = error as StorageError;
    console.error('Error storing contact form data:', err);
    
    // Log storage failure
    await supabase
      .from('storage_logs')
      .insert([{
        operation: 'contact_form_submission',
        status: 'error',
        error_message: err.message,
        error_code: err.code,
        error_details: err.details
      }]);

    throw new Error('Failed to store contact form data');
  }
}

export async function storeNewsletterSubscription(email: string) {
  try {
    // Input validation
    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    const sanitizedEmail = sanitizeInput(email);

    // Check for existing subscription without using single()
    const { data: existingSubscriptions, error: checkError } = await supabase
      .from('newsletter_subscriptions')
      .select('email')
      .eq('email', sanitizedEmail)
      .limit(1);

    if (checkError) throw checkError;

    // If subscription exists
    if (existingSubscriptions && existingSubscriptions.length > 0) {
      throw new Error('Email already subscribed');
    }

    // Store subscription
    const { error: insertError } = await supabase
      .from('newsletter_subscriptions')
      .insert([{
        email: sanitizedEmail,
        subscribed_at: new Date().toISOString(),
        status: 'active'
      }]);

    if (insertError) throw insertError;

    return { success: true };
  } catch (error) {
    const err = error as StorageError;
    console.error('Error storing newsletter subscription:', err);
    
    // Don't throw for already subscribed emails
    if (err.message === 'Email already subscribed') {
      return { success: true };
    }
    
    throw err;
  }
}