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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Transform Your Business with Our Expert Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions tailored for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: 'CX Strategy Consulting',
                description: 'Develop comprehensive customer experience strategies that align with your business goals and enhance customer loyalty.'
              },
              {
                icon: Rocket,
                title: 'Digital Transformation Consulting',
                description: 'Embrace cutting-edge technologies to streamline operations and drive growth.'
              },
              {
                icon: Users2,
                title: 'Customer Insights & Research',
                description: 'Leverage data-driven insights to understand your customers better and make informed decisions.'
              },
              {
                icon: Zap,
                title: 'Business Automation Solutions',
                description: 'Automate processes to improve efficiency and reduce operational costs.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative z-10">
                  <service.icon className="h-12 w-12 text-secondary mb-6" />
                  <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Value-driven customer-centric services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Integrity',
                description: 'We build trust through transparency and honesty'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We drive growth with forward-thinking solutions'
              },
              {
                icon: Users,
                title: 'Customer-Centricity',
                description: 'Your customers are at the heart of everything we do'
              },
              {
                icon: Users2,
                title: 'Collaboration',
                description: 'We work closely with you to achieve your goals'
              },
              {
                icon: Rocket,
                title: 'Empowerment',
                description: 'We provide tools and strategies that enable success'
              },
              {
                icon: Leaf,
                title: 'Sustainability',
                description: 'We focus on long-term growth and value'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We are committed to delivering outstanding results'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative z-10">
                  <value.icon className="h-12 w-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-600">Stay Ahead with Our Expert Insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Top CX Strategy Examples for SMEs in 2024',
                description: 'Discover effective customer experience strategies driving growth.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Building a CX Strategy Framework: A Step-by-Step Guide',
                description: 'Learn how to create a robust CX framework tailored to your business.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
              },
              {
                title: 'Digital Transformation Trends for SMEs',
                description: 'Stay updated on the latest digital innovations shaping the SME sector.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
              }
            ].map((insight, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {insight.description}
                  </p>
                  <div className="flex items-center text-secondary group-hover:translate-x-2 transition-transform">
                    Read More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
            >
              Read More Insights
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of the components remain unchanged */}
    </>
  );
}