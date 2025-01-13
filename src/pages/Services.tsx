import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, Users2, Lightbulb, ArrowRight, LineChart, Target, 
  Cpu, Cloud, Bot, Rocket, ChevronRight, Zap, Heart, Award 
} from 'lucide-react';

export function Services() {
  const services = [
    {
      category: "CX Strategy Consulting",
      description: "Transform Customer Experiences to Drive Loyalty and Growth",
      icon: Target,
      features: [
        "Develop actionable customer experience roadmaps aligned with your business goals",
        "Conduct CX capabilities assessments to identify areas of improvement",
        "Align stakeholders through leadership workshops"
      ],
      benefit: "Improve customer satisfaction, boost loyalty, and drive revenue through a tailored approach to CX",
      path: "/services/cx-strategy"
    },
    {
      category: "Customer Insights & Research Management",
      description: "Unlock the Power of Data-Driven Decision Making",
      icon: LineChart,
      features: [
        "Persona development and customer journey mapping",
        "Voice of the Customer (VoC) programs to gather actionable insights",
        "Behavioral and sentiment analysis for deeper customer understanding"
      ],
      benefit: "Make informed decisions with insights that reflect your customers' needs and behaviors",
      path: "/services/customer-insights"
    },
    {
      category: "Digital Transformation Strategy",
      description: "Revolutionize Your Business with Cutting-Edge Digital Solutions",
      icon: Rocket,
      features: [
        "Create comprehensive digital transformation roadmaps",
        "Map your technology ecosystem to align with future business needs",
        "Enable seamless transitions with risk and opportunity assessments"
      ],
      benefit: "Stay competitive by leveraging technology to optimize operations and enhance customer engagement",
      path: "/services/digital-strategy"
    },
    {
      category: "Business Process Automation",
      description: "Streamline Operations for Maximum Efficiency",
      icon: Bot,
      features: [
        "Automate repetitive tasks to reduce manual errors and costs",
        "Optimize workflows for enhanced process efficiency",
        "Calculate ROI to demonstrate the tangible value of automation"
      ],
      benefit: "Simplify workflows, improve efficiency, and free up resources for strategic tasks",
      path: "/services/process-optimization"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Empowering SMEs with Expert Consulting Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At Enablerry UK, we provide specialized services tailored to meet the unique needs of small and medium-sized enterprises. From customer experience (CX) strategy consulting to digital transformation and workflow automation, our solutions are designed to drive growth and operational efficiency.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <service.icon className="h-12 w-12 text-secondary mb-6" />
                <h2 className="text-2xl font-bold text-primary mb-2">
                  {service.category}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-secondary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/5 p-4 rounded-xl mb-6">
                  <h3 className="font-semibold text-primary mb-2">Why Choose This Service?</h3>
                  <p className="text-gray-600">{service.benefit}</p>
                </div>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-secondary hover:text-primary transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Work With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Customized Solutions",
                description: "Tailored for SMEs across industries"
              },
              {
                icon: Award,
                title: "Proven Success",
                description: "Driving customer satisfaction and operational efficiency"
              },
              {
                icon: Heart,
                title: "Expert Team",
                description: "Experienced professionals committed to delivering results"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <feature.icon className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to unlock your business's potential?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 text-primary bg-white hover:bg-secondary hover:text-white rounded-full transition-colors"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}