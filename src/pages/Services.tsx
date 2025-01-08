import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Users2, Lightbulb, ArrowRight, LineChart, Target, Cpu, Cloud, Bot } from 'lucide-react';

export function Services() {
  const services = {
    cx: [
      {
        icon: LineChart,
        title: 'Customer Insights & Research',
        description: 'Gain deep insights into customer needs through research methods. We help businesses uncover actionable insights to improve satisfaction and loyalty.',
        path: '/services/customer-insights'
      },
      {
        icon: Target,
        title: 'Experience Design',
        description: 'Design and optimize customer experiences across touchpoints through service design, UX design, and innovation workshops.',
        path: '/services/experience-design'
      },
      {
        icon: BarChart3,
        title: 'CX Measurement & Analytics',
        description: 'Implement frameworks and tools to measure CX performance effectively, focusing on metrics that drive improvement.',
        path: '/services/cx-measurement'
      },
      {
        icon: Users2,
        title: 'Strategy Alignment',
        description: 'Align CX strategy with business goals and ensure consistent execution through effective governance structures.',
        path: '/services/strategy-alignment'
      },
      {
        icon: Lightbulb,
        title: 'Culture Transformation',
        description: 'Foster a customer-centric culture by embedding a customer-first mindset across all levels of your organization.',
        path: '/services/culture-transformation'
      }
    ],
    digital: [
      {
        icon: Cpu,
        title: 'Process Optimization',
        description: 'Improve operational efficiency by automating repetitive tasks and processes. We identify automation opportunities and recommend the right tools.',
        path: '/services/process-optimization'
      },
      {
        icon: Bot,
        title: 'RPA Implementation',
        description: 'Streamline workflows through robotic process automation, improving efficiency without significant investment in infrastructure.',
        path: '/services/rpa-implementation'
      },
      {
        icon: Cloud,
        title: 'Cloud Solutions',
        description: 'Deploy scalable cloud infrastructure that offers flexibility for your business, from SaaS to comprehensive IaaS platforms.',
        path: '/services/cloud-solutions'
      }
    ],
    consulting: [
      {
        icon: Target,
        title: 'CX Strategy',
        description: 'Develop comprehensive CX strategies aligned with business goals. We assess capabilities, define vision, and create detailed improvement roadmaps.',
        path: '/services/cx-strategy'
      },
      {
        icon: LineChart,
        title: 'Digital Strategy',
        description: 'Create transformation strategies that align with business objectives and market evolution, including capability assessment and roadmap development.',
        path: '/services/digital-strategy'
      }
    ]
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to transform your customer experience and drive digital innovation
            </p>
          </div>
        </div>
      </section>

      {/* CX Services Section */}
      <section id="cx" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <BarChart3 className="h-16 w-16 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary mb-6">CX Services</h2>
            <p className="text-xl text-gray-600">
              Elevate your customer experience to new heights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.cx.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group relative bg-white h-full p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <service.icon className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation Services Section */}
      <section id="digital" className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Users2 className="h-16 w-16 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary mb-6">Digital Transformation Services</h2>
            <p className="text-xl text-gray-600">
              Modernize your business for the digital age
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.digital.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group relative bg-white h-full p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <service.icon className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section id="consulting" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Lightbulb className="h-16 w-16 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary mb-6">Consulting Services</h2>
            <p className="text-xl text-gray-600">
              Expert guidance to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.consulting.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group relative bg-white h-full p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <service.icon className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to create exceptional experiences that drive growth and success.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center btn btn-secondary"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}