import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Logo inverted className="h-24 w-auto" />
            <p className="text-gray-300">
              Transforming businesses through customer-centric innovation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#cx" className="text-gray-300 hover:text-white">
                  CX Services
                </Link>
              </li>
              <li>
                <Link to="/services#digital" className="text-gray-300 hover:text-white">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-gray-300 hover:text-white">
                  Consulting Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">hello@enablerry.com</li>
              <li className="text-gray-300">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-light text-center text-gray-300">
          © {new Date().getFullYear()} Enablerry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}