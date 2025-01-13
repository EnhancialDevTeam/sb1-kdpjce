export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone: string): boolean {
  return /^\+?[\d\s-()]{10,}$/.test(phone);
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function validateInternalPath(path: string): boolean {
  // Allow hash fragments in internal paths
  const basePathPattern = /^\/[a-zA-Z0-9-/]*$/;
  const [basePath, hash] = path.split('#');
  
  // If there's no hash, just validate the base path
  if (!hash) {
    return basePathPattern.test(path);
  }
  
  // If there is a hash, validate both parts
  return basePathPattern.test(basePath) && /^[a-zA-Z0-9-]+$/.test(hash);
}

export function validateExternalLink(url: string): boolean {
  // Whitelist of allowed external domains
  const allowedDomains = [
    'enablerry.com',
    'growthedgehub.com',
    'feedbackworx.com',
    'images.unsplash.com'
  ];

  try {
    const urlObj = new URL(url);
    return allowedDomains.some(domain => urlObj.hostname.endsWith(domain));
  } catch {
    return false;
  }
}