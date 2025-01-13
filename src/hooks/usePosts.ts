import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';

type Post = Database['public']['Tables']['posts']['Row'];

export function usePosts(options?: {
  category?: string;
  status?: 'published' | 'draft' | 'archived';
  limit?: number;
}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let query = supabase
          .from('posts')
          .select(`
            *,
            author:authors(id, name, avatar, bio),
            tags:post_tags(tag:tags(id, name))
          `);

        if (options?.category) {
          query = query.eq('category', options.category);
        }

        if (options?.status) {
          query = query.eq('status', options.status);
        }

        if (options?.limit) {
          query = query.limit(options.limit);
        }

        const { data, error } = await query.order('published_at', { ascending: false });

        if (error) throw error;
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch posts'));
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [options?.category, options?.status, options?.limit]);

  return { posts, loading, error };
}