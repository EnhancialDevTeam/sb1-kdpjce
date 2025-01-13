import { sanitizeInput } from './encryption';

const WP_API_URL = 'https://enablerry.com/wp-json/wp/v2';

export interface WPPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
  };
  date: string;
  modified: string;
}

export interface WPPage extends WPPost {
  template: string;
}

interface FetchOptions {
  endpoint: string;
  params?: Record<string, string>;
}

async function fetchFromWordPress<T>({ endpoint, params = {} }: FetchOptions): Promise<T> {
  const queryParams = new URLSearchParams({
    _embed: 'true',
    ...params
  });

  try {
    const response = await fetch(`${WP_API_URL}/${endpoint}?${queryParams}`);
    if (!response.ok) {
      throw new Error(`WordPress API Error: ${response.statusText}`);
    }
    const data = await response.json();
    return sanitizeContent(data);
  } catch (error) {
    console.error('WordPress fetch error:', error);
    throw error;
  }
}

function sanitizeContent<T>(content: T): T {
  if (Array.isArray(content)) {
    return content.map(item => sanitizeContent(item)) as T;
  }
  
  if (typeof content === 'object' && content !== null) {
    const sanitized: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(content)) {
      if (typeof value === 'string' && (key === 'rendered' || key === 'content' || key === 'excerpt')) {
        sanitized[key] = sanitizeInput(value);
      } else {
        sanitized[key] = sanitizeContent(value);
      }
    }
    return sanitized as T;
  }
  
  return content;
}

export async function getPages(params?: Record<string, string>): Promise<WPPage[]> {
  return fetchFromWordPress<WPPage[]>({
    endpoint: 'pages',
    params
  });
}

export async function getPage(slug: string): Promise<WPPage> {
  const pages = await fetchFromWordPress<WPPage[]>({
    endpoint: 'pages',
    params: { slug }
  });
  
  if (!pages.length) {
    throw new Error(`Page not found: ${slug}`);
  }
  
  return pages[0];
}

export async function getPosts(params?: Record<string, string>): Promise<WPPost[]> {
  return fetchFromWordPress<WPPost[]>({
    endpoint: 'posts',
    params
  });
}

export async function getPost(slug: string): Promise<WPPost> {
  const posts = await fetchFromWordPress<WPPost[]>({
    endpoint: 'posts',
    params: { slug }
  });
  
  if (!posts.length) {
    throw new Error(`Post not found: ${slug}`);
  }
  
  return posts[0];
}