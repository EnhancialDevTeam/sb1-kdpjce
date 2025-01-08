import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://enablerry.com/wp-content/uploads/2024/09/enablerry_logo_full_colour.png"
              alt="Enablerry Logo"
              className={`${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'} w-auto transition-all duration-300`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-3 py-2 text-primary hover:text-secondary transition-colors text-sm lg:text-base"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://growthedgehub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary ml-2"
            >
              GrowthEdge
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-4 py-2 text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://growthedgehub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GrowthEdge
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}