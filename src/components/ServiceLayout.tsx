import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Step {
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  company: string;
  description: string;
  results: string[];
  image: string;
}

interface ServiceLayoutProps {
  title: string;
  description: string;
  icon: React.ElementType;
  benefits: Benefit[];
  methodology: Step[];
  caseStudies: CaseStudy[];
}

export function ServiceLayout({
  title,
  description,
  icon: Icon,
  benefits,
  methodology,
  caseStudies
}: ServiceLayoutProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <Icon className="h-12 w-12 md:h-16 md:w-16 text-secondary mx-auto mb-6" />
            <h1 className="section-title mb-6">{title}</h1>
            <p className="section-description">{description}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="section-title">Key Benefits</h2>
            <p className="section-description">
              Discover how our {title.toLowerCase()} service can transform your business
            </p>
          </div>
          <div className="grid-cols-responsive">
            {benefits.map((benefit, index) => (
              <div key={index} className="card card-body">
                <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding bg-primary/5">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="section-title">Our Methodology</h2>
            <p className="section-description">
              A proven approach to deliver exceptional results
            </p>
          </div>
          <div className="space-y-6 md:space-y-8">
            {methodology.map((step, index) => (
              <div key={index} className="card card-body">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-description">
              Real results from real clients
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="aspect-image">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="image-hover"
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">{study.title}</h3>
                  <p className="text-secondary font-medium mb-4">{study.company}</p>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Let's discuss how our {title.toLowerCase()} service can help achieve your goals
          </p>
          <Link
            to="/contact"
            className="btn btn-secondary"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}