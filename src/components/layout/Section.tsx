import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'primary' | 'secondary' | 'gray';
}

export function Section({
  children,
  className = '',
  containerClassName = '',
  background = 'white'
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    gray: 'bg-primary/5'
  };

  return (
    <section className={`py-24 ${bgClasses[background]} ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}