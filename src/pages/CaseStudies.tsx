import React from 'react';
import { ArrowRight, BarChart3, Users2, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    title: "45% Increase in Customer Satisfaction",
    company: "RetailTech Solutions",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    challenge: "Struggling with declining customer satisfaction and retention rates",
    solution: "Implemented comprehensive CX transformation strategy",
    results: ["45% increase in CSAT scores", "32% reduction in customer churn", "28% increase in repeat purchases"],
    tags: ["CX Strategy", "Digital Transformation"]
  },
  {
    id: 2,
    title: "60% Faster Response Time",
    company: "ServicePro Industries",
    industry: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    challenge: "Inefficient customer service processes leading to delayed responses",
    solution: "Deployed AI-powered automation and workflow optimization",
    results: ["60% reduction in response time", "40% increase in first-contact resolution", "25% reduction in operational costs"],
    tags: ["Process Automation", "AI Implementation"]
  },
  {
    id: 3,
    title: "Digital Transformation Success",
    company: "FinanceFlow Corp",
    industry: "Financial Services",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    challenge: "Legacy systems hindering growth and customer experience",
    solution: "End-to-end digital transformation with cloud migration",
    results: ["35% improvement in customer satisfaction", "50% faster service delivery", "42% increase in digital engagement"],
    tags: ["Digital Transformation", "Cloud Migration"]
  }
];

export function CaseStudies() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">Case Studies</h1>
            <p className="text-xl text-gray-600">
              Discover how we've helped businesses transform their customer experience and achieve remarkable results
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <article key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{study.company}</p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900">Challenge:</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Solution:</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Key Results:</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <ArrowRight className="h-4 w-4 text-secondary mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300">
              Measurable results that drive business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                stat: "150+",
                label: "Successful Projects"
              },
              {
                icon: Users2,
                stat: "92%",
                label: "Client Satisfaction"
              },
              {
                icon: LineChart,
                stat: "40%",
                label: "Average ROI Improvement"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <div className="text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to create your success story
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center btn btn-secondary"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}