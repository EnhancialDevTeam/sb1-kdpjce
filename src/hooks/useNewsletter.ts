import { useState } from 'react';
import { subscribeToNewsletter } from '../lib/convertkit';

export function useNewsletter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const subscribe = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      await subscribeToNewsletter(email);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Subscription failed'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    subscribe,
    loading,
    error
  };
}