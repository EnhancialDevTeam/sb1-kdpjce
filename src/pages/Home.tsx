import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Rocket, Users2, Zap, Shield, Heart, Users, 
  LightbulbIcon, Leaf, Award, ArrowRight, BarChart3,
  CheckCircle2, Globe2, MessageSquare
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { Newsletter } from '../components/common/Newsletter';

export function Home() {
  const services = [
    {
      icon: Target,
      title: 'CX Strategy Consulting',
      description: 'Develop comprehensive customer experience strategies that align with your business goals and enhance customer loyalty.',
      path: '/services/cx-strategy',
      ariaLabel: 'Learn more about CX Strategy Consulting services'
    },
    {
      icon: Users2,
      title: 'Customer Insights & Research',
      description: 'Leverage data-driven insights to understand your customers better and make informed decisions.',
      path: '/services/customer-insights',
      ariaLabel: 'Learn more about Customer Insights & Research services'
    },
    {
      icon: Rocket,
      title: 'Digital Transformation Strategy',
      description: 'Embrace cutting-edge technologies to streamline operations and drive growth.',
      path: '/services/digital-strategy',
      ariaLabel: 'Learn more about Digital Transformation Strategy services'
    },
    {
      icon: Zap,
      title: 'Business Process Automation',
      description: 'Automate processes to improve efficiency and reduce operational costs.',
      path: '/services/process-optimization',
      ariaLabel: 'Learn more about Business Process Automation services'
    }
  ];

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-right"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Transform Your Business with Our Expert Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={service.ariaLabel}
              >
                <div className="relative z-10">
                  <service.icon className="h-12 w-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center text-secondary group-hover:translate-x-2 transition-transform">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Enablerry UK?</h2>
            <p className="text-xl text-gray-600">
              Partner with us to transform your business through customer-centric innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Proven Expertise",
                description: "Years of experience helping SMEs achieve their business goals through strategic CX initiatives"
              },
              {
                icon: Heart,
                title: "Customer-Centric Approach",
                description: "We put your customers at the heart of every strategy and solution we develop"
              },
              {
                icon: LightbulbIcon,
                title: "Innovative Solutions",
                description: "Cutting-edge strategies and tools tailored to your specific business needs"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <feature.icon className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Delivering Real Results</h2>
            <p className="text-xl text-gray-600">
              Our proven track record of success speaks for itself
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                stat: "95%",
                label: "Customer Satisfaction"
              },
              {
                icon: BarChart3,
                stat: "40%",
                label: "Average ROI Increase"
              },
              {
                icon: Globe2,
                stat: "150+",
                label: "Projects Completed"
              },
              {
                icon: Award,
                stat: "92%",
                label: "Client Retention"
              }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <item.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to transforming your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "Understanding your business goals and challenges"
              },
              {
                number: "02",
                title: "Strategy",
                description: "Developing tailored solutions for your needs"
              },
              {
                number: "03",
                title: "Implementation",
                description: "Executing the plan with precision"
              },
              {
                number: "04",
                title: "Optimization",
                description: "Continuous improvement and refinement"
              }
            ].map((step, index) => (
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
                {index < 3 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-secondary h-8 w-8" />
                )}
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to create exceptional customer experiences that drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-secondary hover:text-white"
            >
              Book a Free Consultation
              <MessageSquare className="ml-2 h-5 w-5" />
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
    </>
  );
}