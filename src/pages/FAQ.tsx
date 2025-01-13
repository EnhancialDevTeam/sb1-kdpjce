import React, { useState } from 'react';
import { Search, ChevronDown, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  description: string;
  faqs: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "General Questions",
    description: "Basic information about Enablerry UK and our services",
    faqs: [
      {
        question: "What is Enablerry UK?",
        answer: "Enablerry UK is a consulting firm specializing in customer experience strategies (CX), digital transformation solutions, and business process automation tailored to small and medium-sized enterprises (SMEs)."
      },
      {
        question: "How can Enablerry UK help my business?",
        answer: "We empower SMEs by aligning customer experience initiatives with business goals, leveraging technology for growth, and streamlining operations for efficiency."
      }
    ]
  },
  {
    title: "CX Strategy FAQs",
    description: "Understanding customer experience strategy",
    faqs: [
      {
        question: "What is a CX strategy?",
        answer: "A customer experience (CX) strategy is a comprehensive plan designed to enhance customer satisfaction and loyalty by improving every interaction a customer has with your business."
      },
      {
        question: "How do I know if my business needs a CX strategy?",
        answer: "If you face challenges like declining customer satisfaction, low retention rates, or inconsistent customer feedback, a CX strategy can help address these issues."
      }
    ]
  },
  {
    title: "Customer Insights FAQs",
    description: "Learn about customer insights and research",
    faqs: [
      {
        question: "What are customer insights?",
        answer: "Customer insights are data-driven understandings of customer behavior, preferences, and motivations, which are gathered through qualitative and quantitative research."
      },
      {
        question: "How can customer insights help my business?",
        answer: "By using tools like persona development and journey mapping, you can tailor your services to better meet customer needs and improve overall satisfaction."
      }
    ]
  },
  {
    title: "Digital Transformation FAQs",
    description: "Information about digital transformation services",
    faqs: [
      {
        question: "What is digital transformation?",
        answer: "Digital transformation involves integrating digital technology into all areas of your business to improve operations and deliver value to customers."
      },
      {
        question: "How do I start a digital transformation journey?",
        answer: "Start by assessing your current processes, identifying areas for improvement, and creating a roadmap for technology adoption. Our team can guide you through every step."
      }
    ]
  },
  {
    title: "Workflow Automation FAQs",
    description: "Details about process automation solutions",
    faqs: [
      {
        question: "What is workflow automation?",
        answer: "Workflow automation uses technology to streamline repetitive tasks, improve efficiency, and reduce operational costs."
      },
      {
        question: "What types of workflows can be automated?",
        answer: "Common examples include customer support ticketing, invoice processing, and lead management."
      }
    ]
  }
];

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  const toggleQuestion = (question: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(question)) {
      newExpanded.delete(question);
    } else {
      newExpanded.add(question);
    }
    setExpandedQuestions(newExpanded);
  };

  const filteredSections = faqSections.map(section => ({
    ...section,
    faqs: section.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.faqs.length > 0);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Find quick answers to your questions about our services, solutions, and how we help SMEs achieve their goals.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredSections.map((section) => (
              <div key={section.title} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full px-8 py-6 flex items-center justify-between bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="text-left">
                    <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-primary transition-transform ${
                      expandedSection === section.title ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSection === section.title && (
                  <div className="divide-y divide-gray-200">
                    {section.faqs.map((faq) => (
                      <div key={faq.question} className="px-8 py-6">
                        <button
                          onClick={() => toggleQuestion(faq.question)}
                          className="w-full flex items-start justify-between text-left"
                        >
                          <h3 className="text-lg font-medium text-primary pr-8">{faq.question}</h3>
                          <ChevronDown
                            className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                              expandedQuestions.has(faq.question) ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        {expandedQuestions.has(faq.question) && (
                          <p className="mt-4 text-gray-600">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need More Help Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 text-secondary mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-primary mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn btn-secondary"
            >
              Contact Us
              <MessageSquare className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
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