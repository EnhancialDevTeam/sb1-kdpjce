import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  category: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data: posts, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:authors(id, name, avatar, bio),
      tags:post_tags(tag:tags(name))
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  return posts.map(post => ({
    ...post,
    tags: post.tags.map(t => t.tag.name)
  })) as BlogPost[];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const { data: post, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:authors(id, name, avatar, bio),
      tags:post_tags(tag:tags(name))
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return {
    ...post,
    tags: post.tags.map(t => t.tag.name)
  } as BlogPost;
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('posts')
    .insert([{
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featured_image: post.featured_image,
      category: post.category,
      published_at: post.published_at,
      author_id: post.author.id,
      status: 'draft'
    }])
    .select()
    .single();

  if (error) {
    throw error;
  }

  // Add tags
  if (post.tags.length > 0) {
    // First ensure all tags exist
    const { data: existingTags } = await supabase
      .from('tags')
      .select('id, name')
      .in('name', post.tags);

    const existingTagNames = new Set(existingTags?.map(t => t.name) || []);
    const newTags = post.tags.filter(tag => !existingTagNames.has(tag));

    // Create new tags
    if (newTags.length > 0) {
      await supabase
        .from('tags')
        .insert(newTags.map(name => ({ name })));
    }

    // Get all tag IDs
    const { data: tagIds } = await supabase
      .from('tags')
      .select('id')
      .in('name', post.tags);

    if (tagIds) {
      // Create post_tags relationships
      await supabase
        .from('post_tags')
        .insert(tagIds.map(tag => ({
          post_id: data.id,
          tag_id: tag.id
        })));
    }
  }

  return data;
}

export async function updateBlogPost(
  id: string, 
  updates: Partial<Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>>
) {
  const { data, error } = await supabase
    .from('posts')
    .update({
      title: updates.title,
      slug: updates.slug,
      excerpt: updates.excerpt,
      content: updates.content,
      featured_image: updates.featured_image,
      category: updates.category,
      published_at: updates.published_at,
      author_id: updates.author?.id
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  // Update tags if provided
  if (updates.tags) {
    // First remove all existing tags
    await supabase
      .from('post_tags')
      .delete()
      .eq('post_id', id);

    // Then add new tags
    // Ensure all tags exist
    const { data: existingTags } = await supabase
      .from('tags')
      .select('id, name')
      .in('name', updates.tags);

    const existingTagNames = new Set(existingTags?.map(t => t.name) || []);
    const newTags = updates.tags.filter(tag => !existingTagNames.has(tag));

    // Create new tags
    if (newTags.length > 0) {
      await supabase
        .from('tags')
        .insert(newTags.map(name => ({ name })));
    }

    // Get all tag IDs
    const { data: tagIds } = await supabase
      .from('tags')
      .select('id')
      .in('name', updates.tags);

    if (tagIds) {
      // Create post_tags relationships
      await supabase
        .from('post_tags')
        .insert(tagIds.map(tag => ({
          post_id: id,
          tag_id: tag.id
        })));
    }
  }

  return data;
}