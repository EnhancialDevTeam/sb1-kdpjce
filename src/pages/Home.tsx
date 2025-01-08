import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, Users2, Target, Lightbulb, ArrowUpRight, CheckCircle2, 
  Calendar, ArrowRight, Zap, Shield, Rocket, Heart, Users, 
  LightbulbIcon, Leaf, Award, BookOpen 
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { CountdownTimer } from '../components/CountdownTimer';

export function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-right"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'CX Services',
                description: 'Data-driven strategies to enhance customer satisfaction and loyalty.',
              },
              {
                icon: Users2,
                title: 'Digital Transformation Services',
                description: 'Modern solutions that revolutionize your customer interactions.',
              },
              {
                icon: Lightbulb,
                title: 'Consulting Services',
                description: 'Future-proof your business with cutting-edge CX innovations.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-primary rounded-2xl transform origin-bottom scale-y-0 transition-transform group-hover:scale-y-100"></div>
                <div className="relative">
                  <service.icon className="h-12 w-12 text-secondary mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              Partner with experts dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Proven Expertise",
                description: "Over 15 years of experience in transforming businesses through CX innovation."
              },
              {
                icon: Target,
                title: "Tailored Solutions",
                description: "Customized strategies that align with your specific business goals and challenges."
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Committed team of experts providing ongoing guidance and support."
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

      {/* Latest Insights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-600">
              Stay Ahead with Our Expert Insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Top CX Strategy Examples for SMEs in 2024",
                description: "Discover effective customer experience strategies driving growth.",
                icon: Target
              },
              {
                title: "Building a CX Strategy Framework: A Step-by-Step Guide",
                description: "Learn how to create a robust CX framework tailored to your business.",
                icon: Lightbulb
              },
              {
                title: "Digital Transformation Trends for SMEs",
                description: "Stay updated on the latest digital innovations shaping the SME sector.",
                icon: Zap
              }
            ].map((insight, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <insight.icon className="h-12 w-12 text-secondary mb-6" />
                <h3 className="text-xl font-semibold text-primary mb-4">{insight.title}</h3>
                <p className="text-gray-600 mb-6">{insight.description}</p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-secondary hover:text-primary transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
            >
              View All Insights
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920"
            alt="Business team collaboration"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="h-16 w-16 text-secondary mx-auto mb-8 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Let's work together to create exceptional experiences that drive growth and success.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-primary bg-white hover:bg-secondary hover:text-white rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-4 text-white border-2 border-white hover:bg-white/10 rounded-full transition-all"
            >
              View Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}