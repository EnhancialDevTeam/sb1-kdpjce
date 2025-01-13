import { useState } from 'react';
import { sendEmail } from '../lib/email';

export function useEmail() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const send = async (params: {
    to_email?: string;
    to_name?: string;
    from_name?: string;
    message?: string;
    subject?: string;
    reply_to?: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      await sendEmail(params);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to send email'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    send,
    loading,
    error
  };
}