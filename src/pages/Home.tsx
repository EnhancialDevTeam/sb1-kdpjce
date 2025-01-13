import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Rocket, Users2, Zap, Shield, Heart, Users, 
  LightbulbIcon, Leaf, Award, ArrowRight
} from 'lucide-react';
import { Hero } from '../components/Hero';

export function Home() {
  const services = [
    {
      icon: Target,
      title: 'CX Strategy Consulting',
      description: 'Develop comprehensive customer experience strategies that align with your business goals and enhance customer loyalty.',
      path: '/services/cx-strategy',
      ariaLabel: 'Learn more about CX Strategy Consulting services'
    },
    {
      icon: Users2,
      title: 'Customer Insights & Research',
      description: 'Leverage data-driven insights to understand your customers better and make informed decisions.',
      path: '/services/customer-insights',
      ariaLabel: 'Learn more about Customer Insights & Research services'
    },
    {
      icon: Rocket,
      title: 'Digital Transformation Strategy',
      description: 'Embrace cutting-edge technologies to streamline operations and drive growth.',
      path: '/services/digital-strategy',
      ariaLabel: 'Learn more about Digital Transformation Strategy services'
    },
    {
      icon: Zap,
      title: 'Business Process Automation',
      description: 'Automate processes to improve efficiency and reduce operational costs.',
      path: '/services/process-optimization',
      ariaLabel: 'Learn more about Business Process Automation services'
    }
  ];

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-right"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Transform Your Business with Our Expert Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={service.ariaLabel}
              >
                <div className="relative z-10">
                  <service.icon className="h-12 w-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center text-secondary group-hover:translate-x-2 transition-transform">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of the components remain unchanged */}
    </>
  );
}