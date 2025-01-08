import { useState, useEffect } from 'react';
import { contentfulClient } from '../lib/contentful';

export function useContentful<T>(
  contentType: string,
  query: Record<string, any> = {}
): { data: T | null; loading: boolean; error: Error | null } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: contentType,
          ...query,
        });
        setData(response.items[0]?.fields as T);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contentType, JSON.stringify(query)]);

  return { data, loading, error };
}