export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  BLOG: '/blog',
  CONTACT: '/contact',
  CASE_STUDIES: '/case-studies',
  BLOG_POST: (id: string) => `/blog/${id}`,
  SERVICE: (path: string) => `/services/${path}`
} as const;