import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';

// This would typically come from an API or CMS
const blogPosts = {
  1: {
    title: "The Future of CX: Trends to Watch in 2024",
    content: `
      <p class="mb-6">The customer experience landscape is rapidly evolving, driven by technological advancements and changing consumer expectations. As we move through 2024, several key trends are shaping the future of CX.</p>

      <h2 class="text-2xl font-bold text-[#164F2C] mb-4">1. AI-Driven Personalization</h2>
      <p class="mb-6">Artificial Intelligence is revolutionizing how businesses understand and respond to customer needs. Machine learning algorithms are becoming increasingly sophisticated at predicting customer preferences and behaviors, enabling hyper-personalized experiences at scale.</p>

      <h2 class="text-2xl font-bold text-[#164F2C] mb-4">2. Immersive Technologies</h2>
      <p class="mb-6">Virtual and Augmented Reality are creating new possibilities for customer engagement. From virtual product try-ons to immersive brand experiences, these technologies are bridging the gap between digital and physical interactions.</p>

      <h2 class="text-2xl font-bold text-[#164F2C] mb-4">3. Voice-First Experiences</h2>
      <p class="mb-6">The rise of voice assistants and smart speakers is driving the need for voice-optimized customer experiences. Businesses are investing in voice interfaces to provide more natural and convenient ways for customers to interact with their brands.</p>
    `,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200",
    category: "Industry Insights",
    author: "Sarah Chen",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    tags: ["CX Trends", "AI", "Technology", "Innovation"]
  },
  // Add more blog posts as needed
};

export function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[Number(id)];

  if (!post) {
    return (
      <div className="pt-32 text-center">
        <p className="text-xl text-gray-600">Post not found</p>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <a
              href="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </a>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">{post.author[0]}</span>
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 mr-2" />
                {post.category}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-8">
          {/* Social Share Sidebar */}
          <div className="hidden md:block">
            <div className="sticky top-32 space-y-4">
              <button className="p-3 rounded-full bg-[#164F2C]/10 text-[#164F2C] hover:bg-[#164F2C] hover:text-white transition-colors">
                <ThumbsUp className="h-5 w-5" />
              </button>
              <button className="p-3 rounded-full bg-[#164F2C]/10 text-[#164F2C] hover:bg-[#164F2C] hover:text-white transition-colors">
                <Bookmark className="h-5 w-5" />
              </button>
              <button className="p-3 rounded-full bg-[#164F2C]/10 text-[#164F2C] hover:bg-[#164F2C] hover:text-white transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <article className="flex-1">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-[#164F2C] prose-a:text-[#F59324] hover:prose-a:text-[#164F2C]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-[#164F2C]/10 text-[#164F2C] text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-[#164F2C]/5 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full bg-[#164F2C]/10 flex items-center justify-center">
                  <span className="text-[#164F2C] text-2xl font-bold">{post.author[0]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#164F2C]">{post.author}</h3>
                  <p className="text-gray-600">CX Innovation Expert</p>
                </div>
              </div>
              <p className="text-gray-600">
                A thought leader in customer experience and digital transformation with over 15 years of expertise in helping businesses innovate and grow.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-[#164F2C]/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#164F2C] mb-6">Enjoyed this article?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for more insights on CX and digital transformation
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
      </section>
    </div>
  );
}