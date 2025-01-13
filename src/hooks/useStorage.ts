import { useState } from 'react';
import { storeContactFormData, storeNewsletterSubscription } from '../lib/storage';

export function useStorage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const submitContactForm = async (formData: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    service: string;
    date?: string;
    time?: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      await storeContactFormData(formData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Submission failed'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const subscribeToNewsletter = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      await storeNewsletterSubscription(email);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Subscription failed'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitContactForm,
    subscribeToNewsletter,
    loading,
    error
  };
}