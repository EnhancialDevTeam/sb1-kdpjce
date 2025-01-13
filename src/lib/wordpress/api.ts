import { WP_CONFIG } from './config';
import type { WPPost, WPPage, WPService, WPCaseStudy, WPResource, WPFAQ } from './types';
import { sanitizeContent } from '../encryption';

async function fetchFromWordPress<T>({ 
  endpoint, 
  params = {} 
}: { 
  endpoint: string; 
  params?: Record<string, string>;
}): Promise<T> {
  const queryParams = new URLSearchParams({
    _embed: 'true',
    ...params
  });

  try {
    const response = await fetch(
      `${WP_CONFIG.API_URL}${endpoint}?${queryParams}`,
      {
        headers: {
          'Accept': 'application/json',
        }
      }
    );

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

// Generic content fetchers
export async function getPages(params?: Record<string, string>): Promise<WPPage[]> {
  return fetchFromWordPress<WPPage[]>({
    endpoint: WP_CONFIG.ENDPOINTS.PAGES,
    params
  });
}

export async function getPage(slug: string): Promise<WPPage> {
  const pages = await fetchFromWordPress<WPPage[]>({
    endpoint: WP_CONFIG.ENDPOINTS.PAGES,
    params: { slug }
  });
  
  if (!pages.length) {
    throw new Error(`Page not found: ${slug}`);
  }
  
  return pages[0];
}

// Custom post type fetchers
export async function getServices(params?: Record<string, string>): Promise<WPService[]> {
  return fetchFromWordPress<WPService[]>({
    endpoint: `/${WP_CONFIG.POST_TYPES.SERVICES}`,
    params
  });
}

export async function getService(slug: string): Promise<WPService> {
  const services = await fetchFromWordPress<WPService[]>({
    endpoint: `/${WP_CONFIG.POST_TYPES.SERVICES}`,
    params: { slug }
  });
  
  if (!services.length) {
    throw new Error(`Service not found: ${slug}`);
  }
  
  return services[0];
}

export async function getCaseStudies(params?: Record<string, string>): Promise<WPCaseStudy[]> {
  return fetchFromWordPress<WPCaseStudy[]>({
    endpoint: `/${WP_CONFIG.POST_TYPES.CASE_STUDIES}`,
    params
  });
}

export async function getResources(params?: Record<string, string>): Promise<WPResource[]> {
  return fetchFromWordPress<WPResource[]>({
    endpoint: `/${WP_CONFIG.POST_TYPES.RESOURCES}`,
    params
  });
}

export async function getFAQs(params?: Record<string, string>): Promise<WPFAQ[]> {
  return fetchFromWordPress<WPFAQ[]>({
    endpoint: `/${WP_CONFIG.POST_TYPES.FAQ}`,
    params
  });
}