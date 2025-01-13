import React from 'react';
import { LineChart, Users2, Target, ArrowRight, CheckCircle2, BarChart3, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CustomerInsights() {
  const features = [
    {
      icon: Users2,
      title: "Customer Segmentation & Persona Development",
      description: "Create detailed customer profiles to tailor your strategies effectively and understand different customer segments"
    },
    {
      icon: Target,
      title: "Journey Mapping & Touchpoint Analysis",
      description: "Visualize and optimize every interaction point in your customer's journey to identify improvement opportunities"
    },
    {
      icon: MessageSquare,
      title: "Voice of Customer (VoC) Programs",
      description: "Implement systematic feedback collection and analysis to drive strategic decisions based on customer input"
    },
    {
      icon: BarChart3,
      title: "Behavioral & Sentiment Analysis",
      description: "Gain deep insights into customer motivations and emotions through advanced analytics and research methods"
    }
  ];

  const benefits = [
    "Data-driven decision making",
    "Enhanced customer understanding",
    "Improved product development",
    "Targeted marketing strategies",
    "Reduced customer churn",
    "Higher customer satisfaction"
  ];

  const methodologySteps = [
    {
      number: "01",
      title: "Research Design",
      description: "Define objectives and create comprehensive research plan"
    },
    {
      number: "02",
      title: "Data Collection",
      description: "Gather insights through multiple channels and methodologies"
    },
    {
      number: "03",
      title: "Analysis & Synthesis",
      description: "Transform raw data into actionable insights"
    },
    {
      number: "04",
      title: "Implementation Support",
      description: "Guide the implementation of insights-driven improvements"
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
                Unlock the Power of Data-Driven Insights
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Understanding your customers is the key to delivering exceptional experiences. Our Customer Insights & Research Management services provide you with the tools and methodologies to gain deep insights into customer behaviors and preferences.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
              >
                Explore Our Insights Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                alt="Customer Insights Research"
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
              Transform your business decisions with data-driven insights
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
              A systematic approach to gathering and analyzing customer insights
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
            Ready to Understand Your Customers Better?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to unlock valuable insights that drive growth and success
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-primary bg-white hover:bg-secondary hover:text-white rounded-full transition-colors"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}