import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export function Logo({ className = 'h-16 w-auto', inverted = false }: LogoProps) {
  const GreenLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0.757811 0.757811" className={className}>
      <circle cx="0.378906" cy="0.378906" r="0.378906" fill="#164F2C"/>
      <path d="M0.264515 0.301763c0-0.0528705 0.0428592-0.0957337 0.0957297-0.0957337h0.184273c0 0.0528732-0.0428592 0.0957337-0.0957297 0.0957337h-0.184273z" fill="white"/>
      <path d="M0.264515 0.5433c0-0.0528705 0.0428592-0.095735 0.0957297-0.095735h0.184273c0 0.0528758-0.0428592 0.095735-0.0957297 0.095735h-0.184273z" fill="white"/>
      <path d="M0.215901 0.422529h-0.0832192c0-0.0528705 0.0428592-0.0957297 0.0957311-0.0957297h0.246684c0 0.0528705-0.0428592 0.0957297-0.0957284 0.0957297h-0.163467z" fill="#F59324"/>
    </svg>
  );

  const OrangeLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.77994 4.77994" className={className}>
      <circle cx="2.38997" cy="2.38997" r="2.38997" fill="#F59324"/>
      <path d="M1.66844 1.90338c0-0.333484 0.270337-0.603846 0.603821-0.603846h1.16231c0 0.3335-0.270337 0.603846-0.603821 0.603846h-1.16231z" fill="#164F2C"/>
      <path d="M1.66844 3.42689c0-0.333484 0.270337-0.603854 0.603821-0.603854h1.16231c0 0.333517-0.270337 0.603854-0.603821 0.603854h-1.16231z" fill="#164F2C"/>
      <path d="M1.36181 2.66513h-0.52491c0-0.333484 0.270337-0.603821 0.603829-0.603821h1.55597c0 0.333484-0.270337 0.603821-0.603812 0.603821h-1.03108z" fill="white"/>
    </svg>
  );

  return inverted ? <OrangeLogo /> : <GreenLogo />;
}