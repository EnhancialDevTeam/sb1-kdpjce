import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Testimonial } from './Testimonial';

export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#164F2C]/5 -skew-y-6 transform origin-top-left"></div>
      
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black">
              Empowering SMEs with
              <span className="block mt-2 text-[#164F2C]">CX Strategies</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-xl">
              At Enablerry UK, we empower small and medium-sized enterprises (SMEs) to excel in today's competitive landscape. Through our innovative CX strategies and tailored digital transformation solutions, we help your business unlock new levels of customer satisfaction and operational efficiency.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://feedbackworx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-[#F59324] hover:bg-[#e08420] rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Access Your CX Maturity
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-[#164F2C] bg-white border-2 border-[#164F2C] hover:bg-[#164F2C] hover:text-white rounded-full transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#164F2C]/10 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
              <Testimonial />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-[#164F2C]" />
        </div>
      </div>
    </header>
  );
}