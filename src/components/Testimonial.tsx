import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Enablerry transformed our customer experience and boosted satisfaction by 45%",
    author: "Sarah Chen",
    role: "CEO, RetailTech",
  },
  {
    quote: "Our digital transformation journey with Enablerry exceeded all expectations",
    author: "Michael Rodriguez",
    role: "COO, ServicePro",
  },
  {
    quote: "The ROI on our CX strategy implementation was remarkable",
    author: "Emma Thompson",
    role: "Director, InnovateCo",
  },
];

export function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="relative h-32">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute w-full transform transition-all duration-500 ease-in-out ${
              index === current
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xl text-gray-800 italic mb-4">{testimonial.quote}</p>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-[#164F2C]/10 flex items-center justify-center">
                <span className="text-[#164F2C] font-bold">{testimonial.author[0]}</span>
              </div>
              <div>
                <div className="font-semibold text-[#164F2C]">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === current ? 'bg-[#F59324]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}