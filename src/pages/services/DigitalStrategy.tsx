import React from 'react';
import { Rocket, Target, Cloud, ArrowRight, CheckCircle2, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DigitalStrategy() {
  const features = [
    {
      icon: Target,
      title: "Digital Strategy Roadmap Development",
      description: "Create a comprehensive transformation strategy aligned with your business objectives and market evolution"
    },
    {
      icon: Cloud,
      title: "Technology Ecosystem Mapping",
      description: "Evaluate and optimize your technology stack to support future growth and innovation"
    },
    {
      icon: Zap,
      title: "Leadership & Stakeholder Alignment",
      description: "Ensure organization-wide commitment and understanding of digital initiatives"
    },
    {
      icon: Cpu,
      title: "Risk & Opportunity Assessment",
      description: "Identify and mitigate risks while capitalizing on digital opportunities"
    }
  ];

  const benefits = [
    "Enhanced operational efficiency",
    "Improved customer experience",
    "Increased market competitiveness",
    "Better data-driven decision making",
    "Reduced operational costs",
    "Future-proof business model"
  ];

  const methodologySteps = [
    {
      number: "01",
      title: "Digital Assessment",
      description: "Evaluate current digital maturity and identify transformation opportunities"
    },
    {
      number: "02",
      title: "Strategy Formation",
      description: "Develop comprehensive digital transformation roadmap"
    },
    {
      number: "03",
      title: "Implementation Planning",
      description: "Create detailed action plans and success metrics"
    },
    {
      number: "04",
      title: "Execution Support",
      description: "Guide transformation execution and ensure adoption"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Revolutionize Your Business with Digital Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The digital age offers immense opportunities for SMEs. Our Digital Transformation Strategy Consulting services guide you through the complexities of adopting and implementing digital solutions that align with your business goals.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
              >
                Start Your Digital Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Digital Transformation Strategy"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <feature.icon className="h-12 w-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business with our digital transformation expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md"
              >
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our Methodology
            </h2>
            <p className="text-xl text-gray-600">
              A proven approach to digital transformation success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-lg group hover:shadow-xl transition-all"
              >
                <div className="text-4xl font-bold text-secondary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < methodologySteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-secondary h-8 w-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to create a digital strategy that drives growth and innovation
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-primary bg-white hover:bg-secondary hover:text-white rounded-full transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}