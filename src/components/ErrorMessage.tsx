import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage({ message = 'An error occurred. Please try again later.' }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] text-center p-4">
      <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
      <p className="text-gray-600">{message}</p>
    </div>
  );
}