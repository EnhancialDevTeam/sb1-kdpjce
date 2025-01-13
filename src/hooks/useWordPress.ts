import { useState, useEffect } from 'react';
import { WPPost, WPPage, getPosts, getPages, getPost, getPage } from '../lib/wordpress';

interface UseWordPressOptions {
  type: 'post' | 'page';
  slug?: string;
  params?: Record<string, string>;
}

export function useWordPress<T extends WPPost | WPPage>({ 
  type, 
  slug,
  params 
}: UseWordPressOptions) {
  const [data, setData] = useState<T | T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (slug) {
          result = await (type === 'post' ? getPost(slug) : getPage(slug));
        } else {
          result = await (type === 'post' ? getPosts(params) : getPages(params));
        }
        setData(result as T | T[]);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch WordPress content'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, slug, JSON.stringify(params)]);

  return { data, loading, error };
}