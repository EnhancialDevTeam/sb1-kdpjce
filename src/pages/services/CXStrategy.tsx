import React from 'react';
import { Target, Users2, LineChart, ArrowRight, CheckCircle2, BarChart3, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CXStrategy() {
  const features = [
    {
      icon: BarChart3,
      title: "CX Capabilities Assessment",
      description: "Identify and evaluate your current customer experience capabilities to uncover growth opportunities"
    },
    {
      icon: Target,
      title: "Strategic Vision Development",
      description: "Define a clear vision for your CX journey, ensuring alignment with your business goals"
    },
    {
      icon: LineChart,
      title: "Custom Roadmap for CX Improvement",
      description: "Implement a tailored strategy to enhance customer satisfaction and drive business success"
    },
    {
      icon: Users2,
      title: "Leadership and Stakeholder Alignment",
      description: "Engage key stakeholders to secure buy-in and streamline the implementation process"
    }
  ];

  const benefits = [
    "Increased customer satisfaction and loyalty",
    "Higher customer lifetime value",
    "Improved operational efficiency",
    "Enhanced competitive advantage",
    "Better resource allocation",
    "Measurable ROI on CX initiatives"
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We begin by understanding your business goals and evaluating your current CX capabilities"
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Create a comprehensive CX strategy aligned with your business objectives"
    },
    {
      number: "03",
      title: "Implementation Planning",
      description: "Develop detailed action plans and define success metrics"
    },
    {
      number: "04",
      title: "Execution Support",
      description: "Guide implementation and measure outcomes to ensure success"
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
                Transform Customer Experiences to Drive Loyalty and Growth
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                At Enablerry UK, our CX Strategy Consulting services are designed to align your customer experience initiatives with your business objectives. We provide actionable roadmaps that help SMEs unlock growth through customer-centric approaches.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="CX Strategy Consulting"
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
              Transform your business with our comprehensive CX strategy consulting
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

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to transforming your customer experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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
                {index < processSteps.length - 1 && (
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
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to create exceptional experiences that drive growth and success
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-primary bg-white hover:bg-secondary hover:text-white rounded-full transition-colors"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}