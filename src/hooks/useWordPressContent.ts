import { useState, useEffect } from 'react';
import * as WordPressAPI from '../lib/wordpress/api';
import type { WPPost, WPPage, WPService, WPCaseStudy, WPResource, WPFAQ } from '../lib/wordpress/types';

type ContentType = 'page' | 'service' | 'case-study' | 'resource' | 'faq';

interface UseWordPressContentOptions {
  type: ContentType;
  slug?: string;
  params?: Record<string, string>;
}

export function useWordPressContent<T extends WPPost | WPPage | WPService | WPCaseStudy | WPResource | WPFAQ>({ 
  type, 
  slug,
  params 
}: UseWordPressContentOptions) {
  const [data, setData] = useState<T | T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        switch (type) {
          case 'page':
            result = slug 
              ? await WordPressAPI.getPage(slug)
              : await WordPressAPI.getPages(params);
            break;
          case 'service':
            result = slug
              ? await WordPressAPI.getService(slug)
              : await WordPressAPI.getServices(params);
            break;
          case 'case-study':
            result = await WordPressAPI.getCaseStudies(params);
            break;
          case 'resource':
            result = await WordPressAPI.getResources(params);
            break;
          case 'faq':
            result = await WordPressAPI.getFAQs(params);
            break;
          default:
            throw new Error(`Unsupported content type: ${type}`);
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