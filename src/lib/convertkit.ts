import { validateEmail } from './encryption';

const CONVERTKIT_API_SECRET = 'hLpi2I4ma8TNv_LwBZS38R40_3_cbeLI24DvTOYNW7Q';
const CONVERTKIT_FORM_ID = 'b5d3646f90';
const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3';

interface SubscribeResponse {
  subscription: {
    id: number;
    state: string;
    created_at: string;
    subscriber: {
      id: number;
    };
  };
}

export async function subscribeToNewsletter(email: string): Promise<void> {
  if (!validateEmail(email)) {
    throw new Error('Invalid email address');
  }

  try {
    // Use the correct endpoint for form subscriptions
    const response = await fetch(
      `${CONVERTKIT_API_URL}/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: CONVERTKIT_API_SECRET, // Changed from api_secret to api_key
          email: email,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('ConvertKit API error:', error);
      throw new Error(error.message || 'Failed to subscribe');
    }

    const data: SubscribeResponse = await response.json();
    
    if (!data.subscription || !data.subscription.subscriber) {
      throw new Error('Subscription failed');
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw error;
  }
}