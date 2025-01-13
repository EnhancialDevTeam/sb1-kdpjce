import React from 'react';
import { Link } from 'react-router-dom';
import { validateInternalPath, validateExternalLink } from '../../utils/validation';
import { ExternalLink } from './ExternalLink';

interface SafeLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SafeLink({ to, children, className = '', onClick }: SafeLinkProps) {
  // Handle internal paths
  if (to.startsWith('/')) {
    if (!validateInternalPath(to)) {
      console.error(`Invalid internal path: ${to}`);
      return <span className="text-red-500">Invalid link</span>;
    }
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Handle external URLs
  return (
    <ExternalLink href={to} className={className} onClick={onClick}>
      {children}
    </ExternalLink>
  );
}