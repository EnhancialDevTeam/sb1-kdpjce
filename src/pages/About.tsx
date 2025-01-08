import React from 'react';
import { Users, Target, Award, ArrowRight, Building2, Globe2, Rocket, Heart, Shield, Zap, PlayCircle } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[#164F2C]/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-[#164F2C] mb-6">
                Transforming Customer Experience Through Innovation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                At Enablerry, we&apos;re passionate about helping SMEs revolutionize their customer experience through strategic innovation and digital excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#team"
                  className="inline-flex items-center px-6 py-3 text-white bg-[#F59324] hover:bg-[#e08420] rounded-full transition-colors"
                >
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#F59324]/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80&w=800"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#164F2C] mb-8">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Founded in 2020, Enablerry emerged from a vision to democratize world-class customer experience capabilities for small and medium-sized enterprises.
                </p>
                <p className="mb-6">
                  What started as a boutique consulting firm has grown into a full-service CX transformation partner, helping hundreds of businesses across the globe reimagine their customer journey.
                </p>
                <p>
                  Today, we continue to innovate and push boundaries, combining deep industry expertise with cutting-edge technology to deliver exceptional results for our clients.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Video Message Section */}
              <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden bg-[#164F2C]/10">
                <div className="flex items-center justify-center">
                  <div className="text-center p-8">
                    <PlayCircle className="h-20 w-20 text-[#F59324] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-[#164F2C] mb-2">A Message from Our CEO</h3>
                    <p className="text-gray-600">Click to watch Sarah Chen share our vision for the future of CX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-[#164F2C]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#164F2C] mb-6">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">
              Experts dedicated to transforming customer experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
                expertise: "Digital Strategy, CX Innovation"
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
                expertise: "Digital Transformation, AI"
              },
              {
                name: "Emma Thompson",
                role: "Head of Consulting",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
                expertise: "CX Strategy, Change Management"
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
                  <h3 className="text-xl font-semibold text-[#164F2C]">{member.name}</h3>
                  <p className="text-[#F59324] mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#164F2C] mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Customer First",
                description: "We prioritize our clients success and satisfaction in everything we do"
              },
              {
                icon: Building2,
                title: "Innovation",
                description: "We constantly push boundaries to deliver cutting-edge solutions"
              },
              {
                icon: Globe2,
                title: "Excellence",
                description: "We maintain the highest standards in our work and relationships"
              },
              {
                icon: Heart,
                title: "Empathy",
                description: "We understand and share the feelings of our clients and their customers"
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "We operate with transparency and honesty in all our dealings"
              },
              {
                icon: Zap,
                title: "Agility",
                description: "We adapt quickly to change and embrace new opportunities"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="relative group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#164F2C] rounded-2xl transform origin-bottom scale-y-0 transition-transform group-hover:scale-y-100" />
                <div className="relative z-10">
                  <value.icon className="h-12 w-12 text-[#F59324] mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-semibold text-[#164F2C] mb-4 group-hover:text-white transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Showcase Section */}
      <section className="py-24 bg-[#164F2C]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#164F2C] mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600">
              Industry-recognized excellence and powerful partnerships
            </p>
          </div>
          
          {/* Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              "ISO 9001:2015",
              "CMMI Level 5",
              "ISO 27001",
              "CX Certification"
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <Award className="h-12 w-12 text-[#F59324] mx-auto mb-4" />
                <p className="font-semibold text-[#164F2C]">{cert}</p>
              </div>
            ))}
          </div>

          {/* Team Capabilities */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-[#164F2C] mb-8">Team Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Customer Journey Mapping",
                "Digital Experience Design",
                "CX Strategy Development",
                "Voice of Customer Programs",
                "Service Blueprint Design",
                "CX Metrics & Analytics",
                "Digital Transformation",
                "Change Management",
                "Process Optimization"
              ].map((capability, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-[#F59324]" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#164F2C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="h-16 w-16 text-[#F59324] mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s work together to create exceptional customer experiences that drive growth and success.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-[#164F2C] bg-white hover:bg-[#F59324] hover:text-white rounded-full transition-colors shadow-lg"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}