import React from 'react';
import { Bot, Zap, Cpu, ArrowRight, CheckCircle2, LineChart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProcessOptimization() {
  const features = [
    {
      icon: Target,
      title: "Workflow Automation Identification",
      description: "Identify and prioritize processes that can be automated for maximum efficiency gains and ROI"
    },
    {
      icon: Cpu,
      title: "Process Efficiency Enhancement",
      description: "Streamline operations through intelligent automation and workflow optimization"
    },
    {
      icon: LineChart,
      title: "Cost Reduction Analysis",
      description: "Calculate and track ROI while implementing cost-effective automation solutions"
    },
    {
      icon: Zap,
      title: "Implementation & Integration",
      description: "Seamlessly integrate automation solutions with your existing systems and workflows"
    }
  ];

  const benefits = [
    "Reduced operational costs",
    "Minimized manual errors",
    "Increased productivity",
    "Improved process consistency",
    "Enhanced scalability",
    "Better resource allocation"
  ];

  const methodologySteps = [
    {
      number: "01",
      title: "Process Assessment",
      description: "Analyze current workflows and identify automation opportunities"
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Create tailored automation solutions for your specific needs"
    },
    {
      number: "03",
      title: "Implementation",
      description: "Deploy automation solutions with minimal disruption"
    },
    {
      number: "04",
      title: "Optimization",
      description: "Monitor and refine automated processes for maximum efficiency"
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
                Streamline Operations for Maximum Efficiency
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Automation is no longer a luxury—it's a necessity for SMEs looking to remain competitive. Our Business Process Automation services enable you to enhance operational efficiency by automating repetitive tasks and optimizing workflows.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
              >
                Discover Automation Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="Business Process Automation"
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
              Transform your operations with intelligent automation
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
              A systematic approach to implementing automation solutions
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
            Ready to Automate Your Business Processes?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to streamline your operations and boost efficiency
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