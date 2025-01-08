import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
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

export interface ServicePage {
  title: string;
  slug: string;
  description: string;
  benefits: {
    title: string;
    description: string;
  }[];
  methodology: {
    title: string;
    description: string;
  }[];
  caseStudies: {
    title: string;
    company: string;
    description: string;
    results: string[];
    image: {
      url: string;
      title: string;
    };
  }[];
}

export interface CaseStudy {
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: {
    url: string;
    title: string;
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
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
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
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
}

export async function getServicePage(slug: string): Promise<ServicePage | null> {
  const response = await contentfulClient.getEntries({
    content_type: 'servicePage',
    'fields.slug': slug,
  });

  if (!response.items.length) {
    return null;
  }

  const item = response.items[0];
  return {
    title: item.fields.title,
    slug: item.fields.slug,
    description: item.fields.description,
    benefits: item.fields.benefits,
    methodology: item.fields.methodology,
    caseStudies: item.fields.caseStudies.map((study: any) => ({
      title: study.fields.title,
      company: study.fields.company,
      description: study.fields.description,
      results: study.fields.results,
      image: {
        url: study.fields.image.fields.file.url,
        title: study.fields.image.fields.title,
      },
    })),
  };
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'caseStudy',
  });

  return response.items.map((item: any) => ({
    title: item.fields.title,
    company: item.fields.company,
    industry: item.fields.industry,
    challenge: item.fields.challenge,
    solution: item.fields.solution,
    results: item.fields.results,
    image: {
      url: item.fields.image.fields.file.url,
      title: item.fields.image.fields.title,
    },
  }));
}