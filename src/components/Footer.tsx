import React from 'react';
import { SafeLink } from './common/SafeLink';
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
                <SafeLink to="/services/customer-insights" className="text-gray-300 hover:text-white">
                  Customer Insights
                </SafeLink>
              </li>
              <li>
                <SafeLink to="/services/cx-strategy" className="text-gray-300 hover:text-white">
                  CX Strategy
                </SafeLink>
              </li>
              <li>
                <SafeLink to="/services/digital-strategy" className="text-gray-300 hover:text-white">
                  Digital Strategy
                </SafeLink>
              </li>
              <li>
                <SafeLink to="/services/process-optimization" className="text-gray-300 hover:text-white">
                  Process Optimization
                </SafeLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <SafeLink to="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </SafeLink>
              </li>
              <li>
                <SafeLink to="/case-studies" className="text-gray-300 hover:text-white">
                  Case Studies
                </SafeLink>
              </li>
              <li>
                <SafeLink to="/resources" className="text-gray-300 hover:text-white">
                  Resources
                </SafeLink>
              </li>
              <li>
                <SafeLink to="/insights" className="text-gray-300 hover:text-white">
                  Insights Hub
                </SafeLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">hello@enablerry.com</li>
              <li className="text-gray-300">+1 (555) 123-4567</li>
              <li>
                <SafeLink to="https://growthedgehub.com" className="text-gray-300 hover:text-white">
                  GrowthEdge Hub
                </SafeLink>
              </li>
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