import React from 'react';
import { 
  Users, Target, Award, ArrowRight, Building2, Globe2, Rocket, Heart, 
  Shield, Zap, LightbulbIcon, Leaf, BookOpen, Calendar, ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Who We Are</h1>
              <p className="text-xl text-gray-600 mb-8">
                At Enablerry UK, we specialize in helping small and medium-sized enterprises (SMEs) thrive in today's fast-changing business environment. Our expertise lies in crafting customer experience (CX) strategies, delivering actionable insights, and enabling digital transformation to unlock sustainable growth.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
              >
                Learn More About Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary/5 p-8 rounded-2xl">
              <Target className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where SMEs excel by placing their customers at the center of their growth strategy and leveraging technology to drive innovation and efficiency.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl">
              <Rocket className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to empower SMEs with tools, strategies, and guidance that enable them to transform their operations, delight their customers, and achieve measurable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">
              At the heart of Enablerry UK are our values, which define how we work and deliver excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Integrity",
                description: "Building trust through transparency and honesty"
              },
              {
                icon: LightbulbIcon,
                title: "Innovation",
                description: "Pioneering forward-thinking solutions to complex challenges"
              },
              {
                icon: Users,
                title: "Customer-Centricity",
                description: "Tailored approaches that put your customers first"
              },
              {
                icon: Building2,
                title: "Collaboration",
                description: "Working as an extension of your team to achieve shared goals"
              },
              {
                icon: Rocket,
                title: "Empowerment",
                description: "Equipping you with tools and insights to make informed decisions"
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Focusing on long-term growth for enduring success"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Delivering impactful results every time"
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
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From our humble beginnings to becoming a trusted partner for SMEs across the UK, Enablerry UK has continually evolved to meet the changing needs of our clients.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            <div className="relative z-10 flex items-center justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="h-8 w-8 text-secondary" />
                  <span className="text-xl font-semibold text-primary">2025</span>
                </div>
                <p className="text-gray-600">
                  Founded with a mission to revolutionize SME operations through technology-driven CX excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Our team is made up of seasoned professionals who bring expertise in CX strategy, digital transformation, and business process optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Ubong Nkanta",
                role: "Co-Founder & CEO",
                expertise: "Visionary leader with 15+ years in customer experience innovation",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Kenny Olutola",
                role: "Co-founder & CIO",
                expertise: "Specialist in digital tools and process automation",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
              }
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-secondary mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Enablerry UK?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Success",
                description: "Delivering measurable results for SMEs across industries"
              },
              {
                icon: Target,
                title: "Customized Solutions",
                description: "Scalable, customizable solutions tailored to your business needs"
              },
              {
                icon: Heart,
                title: "Customer-Centric",
                description: "A commitment to your success through our customer-centric consulting approach"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-primary/5 p-8 rounded-2xl">
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
            Ready to transform your business with customer experience and digital innovation?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-primary bg-white hover:bg-secondary hover:text-white rounded-full transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 text-white bg-secondary hover:bg-secondary/90 rounded-full transition-colors"
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