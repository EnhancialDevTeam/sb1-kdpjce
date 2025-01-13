import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Download, ArrowRight, Play, FileText, 
  BarChart3, Rocket, Bot, Target, Search
} from 'lucide-react';

const resourceCategories = [
  {
    icon: Target,
    title: "CX Strategies",
    description: "Latest trends, tips, and case studies on improving customer experiences",
    featured: "Top CX Trends for SMEs in 2024",
    tag: "cx-strategies"
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Strategies to integrate technology and transform your operations",
    featured: "How SMEs Can Leverage Digital Transformation to Grow",
    tag: "digital-transformation"
  },
  {
    icon: Bot,
    title: "Workflow Automation",
    description: "Practical advice on automating processes for efficiency and cost savings",
    featured: "5 Tools to Automate Workflow for SMEs",
    tag: "automation"
  },
  {
    icon: BarChart3,
    title: "SME Success Stories",
    description: "Inspiring real-world examples of business growth through our solutions",
    featured: "Customer Journey Mapping: A Retail Success Story",
    tag: "success-stories"
  }
];

const resources = [
  {
    type: "whitepaper",
    title: "The Ultimate Guide to CX for SMEs",
    description: "Comprehensive guide to implementing effective CX strategies in small and medium businesses",
    icon: FileText
  },
  {
    type: "template",
    title: "CX Strategy Template",
    description: "Ready-to-use template for mapping your customer experience strategy",
    icon: FileText
  },
  {
    type: "guide",
    title: "How to Build a Customer Journey Map",
    description: "Step-by-step guide to creating effective customer journey maps",
    icon: FileText
  }
];

export function InsightsHub() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">Insights Hub</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your one-stop destination for expert resources and actionable insights on customer experience, 
              digital transformation, and business process automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#blogs"
                className="btn btn-secondary"
              >
                Explore Blogs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="#resources"
                className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
              >
                Download Resources
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories Section */}
      <section id="blogs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Explore Our Blog Categories</h2>
            <div className="relative max-w-xl mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <category.icon className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="bg-primary/5 p-4 rounded-xl mb-6">
                  <h4 className="font-medium text-primary mb-2">Featured Post</h4>
                  <p className="text-gray-600">{category.featured}</p>
                </div>
                <Link
                  to={`/blog?category=${category.tag}`}
                  className="inline-flex items-center text-secondary hover:text-primary transition-colors"
                >
                  View Posts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Download Exclusive Resources</h2>
            <p className="text-xl text-gray-600">
              Access our collection of whitepapers, templates, and guides
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <resource.icon className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <button className="btn btn-secondary w-full">
                  Download
                  <Download className="ml-2 h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl overflow-hidden">
            <div className="p-12 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Watch Our Latest Webinar
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    "The Future of CX in 2025: Trends and Predictions"
                  </p>
                  <button className="btn bg-white text-primary hover:bg-secondary hover:text-white">
                    Watch Now
                    <Play className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
                    alt="Webinar Preview"
                    className="rounded-xl shadow-2xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-secondary mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to transform your business with the power of insights?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community of forward-thinking SMEs and access exclusive resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="btn btn-secondary"
            >
              Explore the Blog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="btn bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}