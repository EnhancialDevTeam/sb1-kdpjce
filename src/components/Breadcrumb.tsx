import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

// Map of path segments to more readable labels
const pathLabels: Record<string, string> = {
  'services': 'Services',
  'about': 'About Us',
  'blog': 'Blog',
  'contact': 'Contact',
  'case-studies': 'Case Studies',
  'customer-insights': 'Customer Insights',
  'cx-strategy': 'CX Strategy',
  'digital-strategy': 'Digital Strategy',
  'process-optimization': 'Process Optimization'
};

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  return paths.map((path, index) => {
    const url = `/${paths.slice(0, index + 1).join('/')}`;
    const label = pathLabels[path] || path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return { label, path: url };
  });
}

export function Breadcrumb() {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);

  // Early return with null for home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav 
      aria-label="breadcrumb" 
      className="bg-white border-b border-gray-100 shadow-sm"
      style={{ marginTop: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center py-4 text-sm">
          <li>
            <Link
              to="/"
              className="inline-flex items-center p-2 text-gray-500 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center min-w-0">
              <ChevronRight 
                className="h-4 w-4 mx-2 text-gray-400 flex-shrink-0" 
                aria-hidden="true"
              />
              {index === breadcrumbs.length - 1 ? (
                <span 
                  className="p-2 text-primary font-medium truncate" 
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="p-2 text-gray-500 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md truncate"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}