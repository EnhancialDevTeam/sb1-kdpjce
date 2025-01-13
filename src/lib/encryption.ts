// Utility functions for data validation and sanitization

export function sanitizeInput(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim();
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone: string): boolean {
  return /^\+?[\d\s-()]{10,}$/.test(phone);
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}