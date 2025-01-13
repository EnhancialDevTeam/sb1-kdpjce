import React from 'react';
import { validateExternalLink } from '../../utils/validation';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ExternalLink({ href, children, className = '', onClick }: ExternalLinkProps) {
  // Validate the URL before rendering
  if (!validateExternalLink(href)) {
    console.error(`Invalid external link: ${href}`);
    return <span className="text-red-500">Invalid link</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => {
        // Log external link clicks
        console.log(`External link clicked: ${href}`);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}