import { useState } from 'react';
import { sanitizeFormData } from '../utils/security';
import { validateEmail, validatePhone } from '../utils/validation';

interface ValidationRules {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  minLength?: number;
  maxLength?: number;
}

interface FormErrors {
  [key: string]: string;
}

export function useSecureForm<T extends Record<string, unknown>>(
  initialData: T,
  validationRules: Record<keyof T, ValidationRules>
) {
  const [formData, setFormData] = useState<T>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    for (const field in validationRules) {
      const rules = validationRules[field];
      const value = formData[field];

      if (rules.required && (!value || (typeof value === 'string' && !value.trim()))) {
        newErrors[field] = 'This field is required';
        isValid = false;
      }

      if (rules.email && typeof value === 'string' && !validateEmail(value)) {
        newErrors[field] = 'Invalid email address';
        isValid = false;
      }

      if (rules.phone && typeof value === 'string' && !validatePhone(value)) {
        newErrors[field] = 'Invalid phone number';
        isValid = false;
      }

      if (rules.minLength && typeof value === 'string' && value.length < rules.minLength) {
        newErrors[field] = `Must be at least ${rules.minLength} characters`;
        isValid = false;
      }

      if (rules.maxLength && typeof value === 'string' && value.length > rules.maxLength) {
        newErrors[field] = `Must be no more than ${rules.maxLength} characters`;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (
    onSubmit: (data: T) => Promise<void>
  ) => {
    if (validate()) {
      const sanitizedData = sanitizeFormData(formData);
      await onSubmit(sanitizedData);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    validate
  };
}