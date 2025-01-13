import { createClient } from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  console.warn('Contentful credentials are missing. Please check your environment variables.');
}

export const contentfulClient = createClient({
  space: spaceId || 'preview',
  accessToken: accessToken || 'preview',
  // Use preview mode when credentials are missing
  host: (!spaceId || !accessToken) ? 'preview.contentful.com' : undefined
});

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: {
    url: string;
    title: string;
  };
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  tags: string[];
  publishDate: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!spaceId || !accessToken) {
    return [];
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishDate',
    });

    return response.items.map((item: any) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      featuredImage: {
        url: item.fields.featuredImage.fields.file.url,
        title: item.fields.featuredImage.fields.title,
      },
      author: {
        name: item.fields.author.fields.name,
        avatar: item.fields.author.fields.avatar.fields.file.url,
        bio: item.fields.author.fields.bio,
      },
      category: item.fields.category,
      tags: item.fields.tags,
      publishDate: item.fields.publishDate,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!spaceId || !accessToken) {
    return null;
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
    });

    if (!response.items.length) {
      return null;
    }

    const item = response.items[0];
    return {
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      featuredImage: {
        url: item.fields.featuredImage.fields.file.url,
        title: item.fields.featuredImage.fields.title,
      },
      author: {
        name: item.fields.author.fields.name,
        avatar: item.fields.author.fields.avatar.fields.file.url,
        bio: item.fields.author.fields.bio,
      },
      category: item.fields.category,
      tags: item.fields.tags,
      publishDate: item.fields.publishDate,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}