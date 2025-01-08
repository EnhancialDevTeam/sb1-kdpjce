import React, { useState } from 'react';
import { Mail, Phone, Clock, MessageSquare, Calendar, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'CX Services',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">Let's Connect</h1>
            <p className="text-xl text-gray-600">
              Schedule a consultation or reach out to discuss how we can help transform your customer experience
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-primary/5 p-8 rounded-2xl">
              <Mail className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Email Us</h3>
              <p className="text-gray-600">hello@enablerry.com</p>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl">
              <Phone className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl">
              <Clock className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
            </div>
          </div>

          {/* Consultation Booking Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-primary mb-8">Book a Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="CX Services">CX Services</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="Consulting Services">Consulting Services</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="input"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-secondary shadow-lg hover:shadow-xl"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-primary text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-secondary mt-1 mr-3" />
                    <p>Expert consultation tailored to your business needs</p>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-6 w-6 text-secondary mt-1 mr-3" />
                    <p>Flexible scheduling to accommodate your timezone</p>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 text-secondary mt-1 mr-3" />
                    <p>Virtual and in-person consultation options available</p>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-primary mb-6">FAQs</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      How long is a typical consultation?
                    </h4>
                    <p className="text-gray-600">
                      Initial consultations typically last 45-60 minutes, allowing us to understand your needs and discuss potential solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">
                      What should I prepare?
                    </h4>
                    <p className="text-gray-600">
                      Have an overview of your current challenges, goals, and any specific questions you'd like to discuss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}