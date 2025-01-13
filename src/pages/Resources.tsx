import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, Download, ArrowRight, BookOpen, Target, 
  Rocket, Bot, Users2, CheckCircle2, HelpCircle 
} from 'lucide-react';
import { Newsletter } from '../components/common/Newsletter';

interface Resource {
  id: string;
  title: string;
  description: string;
  includes: string[];
  downloadUrl: string;
  icon: React.ElementType;
  category: string;
}

const resources: Resource[] = [
  {
    id: 'cx-strategy-template',
    title: 'CX Strategy Template',
    description: 'A comprehensive template to help SMEs develop a customer-centric CX strategy.',
    includes: [
      'Vision statement framework',
      'CX goals template',
      'Stakeholder alignment matrix',
      'Customer journey mapping toolkit'
    ],
    downloadUrl: '#',
    icon: Target,
    category: 'CX Strategy'
  },
  {
    id: 'digital-transformation-guide',
    title: 'Digital Transformation Guide',
    description: 'A step-by-step guide to adopting digital technologies and aligning them with business objectives.',
    includes: [
      'Digital roadmap templates',
      'Risk assessment tools',
      'Success metrics framework',
      'Technology stack evaluation guide'
    ],
    downloadUrl: '#',
    icon: Rocket,
    category: 'Digital Transformation'
  },
  {
    id: 'workflow-automation-toolkit',
    title: 'Workflow Automation Toolkit',
    description: 'A collection of checklists and best practices for automating repetitive processes in SMEs.',
    includes: [
      'Workflow identification matrix',
      'ROI calculator spreadsheet',
      'Automation tool comparison guide',
      'Implementation checklist'
    ],
    downloadUrl: '#',
    icon: Bot,
    category: 'Process Automation'
  },
  {
    id: 'customer-insights-resources',
    title: 'Customer Insights Resources',
    description: 'Resources to help businesses understand and analyze customer behavior effectively.',
    includes: [
      'Persona development templates',
      'VoC survey templates',
      'Sentiment analysis guide',
      'Customer feedback analysis tools'
    ],
    downloadUrl: '#',
    icon: Users2,
    category: 'Customer Insights'
  }
];

export function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [downloadStarted, setDownloadStarted] = useState<string | null>(null);

  const categories = Array.from(new Set(resources.map(r => r.category)));

  const filteredResources = selectedCategory
    ? resources.filter(r => r.category === selectedCategory)
    : resources;

  const handleDownload = (resourceId: string) => {
    setDownloadStarted(resourceId);
    // Simulate download delay
    setTimeout(() => setDownloadStarted(null), 2000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Free Resources for SMEs
            </h1>
            <p className="text-xl text-gray-600">
              Access our curated collection of templates, guides, and toolkits designed to enhance your customer experience and accelerate digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                !selectedCategory
                  ? 'bg-primary text-white'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              All Resources
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <resource.icon className="h-12 w-12 text-secondary mb-6" />
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {resource.title}
                </h2>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                
                <div className="mb-8">
                  <h3 className="font-semibold text-primary mb-4">Includes:</h3>
                  <ul className="space-y-2">
                    {resource.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleDownload(resource.id)}
                  disabled={downloadStarted === resource.id}
                  className="w-full btn btn-secondary"
                >
                  {downloadStarted === resource.id ? (
                    'Downloading...'
                  ) : (
                    <>
                      Download Now
                      <Download className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              How to Use These Resources
            </h2>
            <p className="text-xl text-gray-600">
              Get the most value from our curated resources with these simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Download,
                title: "Download the Tools",
                description: "Select and download the resources that fit your needs"
              },
              {
                icon: FileText,
                title: "Customize for Your Business",
                description: "Adapt templates and guides to your specific goals"
              },
              {
                icon: Target,
                title: "Implement and Measure",
                description: "Put strategies into action and track your success"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <step.icon className="h-12 w-12 text-secondary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <HelpCircle className="h-16 w-16 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                question: "Are these resources really free?",
                answer: "Yes, all resources are completely free to download and use for your business."
              },
              {
                question: "Can I customize these templates?",
                answer: "Absolutely! Our templates are designed to be customized to fit your specific business needs."
              },
              {
                question: "How often are new resources added?",
                answer: "We regularly update our resource library with new templates, guides, and tools."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-primary/5 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-primary/5">
        <Newsletter />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need More Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is here to help you implement these resources effectively
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-secondary hover:text-white"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="btn bg-secondary text-white hover:bg-secondary/90"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}