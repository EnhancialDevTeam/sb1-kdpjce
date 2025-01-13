import React, { useState } from 'react';
import { useNewsletter } from '../../hooks/useNewsletter';
import { validateEmail } from '../../utils/validation';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const { subscribe, loading, error } = useNewsletter();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      return;
    }

    try {
      await subscribe(email);
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">Stay Updated</h2>
      <p className="text-xl text-gray-600 mb-8">
        Subscribe to our newsletter for the latest insights on CX and digital transformation
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors whitespace-nowrap disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-4 text-green-600">Thank you for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600">
          {error?.message || 'Please check your email and try again.'}
        </p>
      )}
    </div>
  );
}