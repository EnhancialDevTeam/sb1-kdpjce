import { WPPost, WPPage } from './types';

// WordPress API configuration
export const WP_CONFIG = {
  API_URL: 'https://enablerry.com/wp-json/wp/v2',
  SITE_URL: 'https://enablerry.com',
  ENDPOINTS: {
    PAGES: '/pages',
    POSTS: '/posts',
    MEDIA: '/media',
    MENU: '/menus/v1/menus',
  },
  POST_TYPES: {
    CASE_STUDIES: 'case-studies',
    SERVICES: 'services',
    RESOURCES: 'resources',
    FAQ: 'faq'
  }
} as const;

// Content type interfaces
export interface WPMenuItem {
  ID: number;
  title: string;
  url: string;
  children?: WPMenuItem[];
}

export interface WPService extends WPPost {
  acf: {
    service_icon: string;
    service_features: Array<{
      title: string;
      description: string;
    }>;
    service_benefits: string[];
    methodology_steps: Array<{
      title: string;
      description: string;
    }>;
  };
}

export interface WPCaseStudy extends WPPost {
  acf: {
    company_name: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
    testimonial: string;
    client_name: string;
    client_position: string;
  };
}

export interface WPResource extends WPPost {
  acf: {
    resource_type: 'template' | 'guide' | 'toolkit';
    download_url: string;
    resource_features: string[];
    file_format: string;
    file_size: string;
  };
}

export interface WPFAQ extends WPPost {
  acf: {
    category: string;
    question: string;
    answer: string;
  };
}