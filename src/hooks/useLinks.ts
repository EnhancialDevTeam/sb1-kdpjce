import { useState, useEffect } from 'react';
import { validateUrl, validateInternalPath, validateExternalLink } from '../utils/validation';

interface LinkValidationResult {
  url: string;
  isValid: boolean;
  error?: string;
}

export function useLinks() {
  const [validationResults, setValidationResults] = useState<Map<string, LinkValidationResult>>(new Map());
  const [loading, setLoading] = useState(false);

  const validateLink = async (url: string): Promise<LinkValidationResult> => {
    // For internal paths
    if (url.startsWith('/')) {
      return {
        url,
        isValid: validateInternalPath(url)
      };
    }

    // For external URLs
    if (!validateUrl(url)) {
      return {
        url,
        isValid: false,
        error: 'Invalid URL format'
      };
    }

    if (!validateExternalLink(url)) {
      return {
        url,
        isValid: false,
        error: 'Domain not in whitelist'
      };
    }

    try {
      const response = await fetch(url, {
        method: 'HEAD',
        mode: 'no-cors'
      });
      return {
        url,
        isValid: true
      };
    } catch (error) {
      return {
        url,
        isValid: false,
        error: 'Failed to reach URL'
      };
    }
  };

  const validateLinks = async (urls: string[]) => {
    setLoading(true);
    try {
      const results = await Promise.all(
        urls.map(async url => {
          const result = await validateLink(url);
          return [url, result] as [string, LinkValidationResult];
        })
      );
      setValidationResults(new Map(results));
    } finally {
      setLoading(false);
    }
  };

  return {
    validateLinks,
    validationResults,
    loading
  };
}