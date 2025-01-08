import React, { useState } from 'react';
import { Search, Calendar, ArrowRight, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Future of CX: Trends to Watch in 2024",
    excerpt: "Discover the key customer experience trends that will shape business success in 2024 and beyond.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600",
    category: "Industry Insights",
    author: "Sarah Chen",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    tags: ["CX Trends", "AI", "Technology"]
  },
  {
    id: 2,
    title: "Digital Transformation Success Stories",
    excerpt: "Learn from real-world examples of successful digital transformation initiatives in SMEs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    category: "Case Studies",
    author: "Michael Rodriguez",
    date: "Jan 12, 2024",
    readTime: "8 min read",
    tags: ["Digital Transformation", "Success Stories"]
  },
  {
    id: 3,
    title: "Building a Customer-Centric Culture",
    excerpt: "A comprehensive guide to fostering a customer-first mindset across your organization.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    category: "Leadership",
    author: "Emma Thompson",
    date: "Jan 10, 2024",
    readTime: "6 min read",
    tags: ["Culture", "Leadership", "CX"]
  }
];

const categories = [
  "All",
  "Industry Insights",
  "Case Studies",
  "Leadership",
  "Technology",
  "Strategy"
];

export function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[#164F2C]/5 -skew-y-6 transform origin-top-left"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-[#164F2C] mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600">
              Insights and perspectives on CX, digital transformation, and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#164F2C] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#164F2C] text-white'
                        : 'bg-[#164F2C]/10 text-[#164F2C] hover:bg-[#164F2C]/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#164F2C]/10 text-[#164F2C] rounded-full text-sm">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold text-[#164F2C] mb-3 group-hover:text-[#F59324] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-[#164F2C]/10 flex items-center justify-center">
                          <span className="text-[#164F2C] font-bold">{post.author[0]}</span>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium text-[#164F2C]">{post.author}</p>
                          <div className="flex items-center text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </div>
                        </div>
                      </div>
                      <span className="text-[#F59324] hover:text-[#164F2C] transition-colors">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-24 bg-[#164F2C]/5 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#164F2C] mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for the latest insights on CX and digital transformation
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#164F2C] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-4 text-white bg-[#F59324] hover:bg-[#e08420] rounded-full transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}