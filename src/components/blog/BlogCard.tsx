import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { SafeLink } from '../common/SafeLink';
import { formatDate } from '../../utils/date';

interface BlogCardProps {
  id: number | string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export function BlogCard({
  id,
  title,
  excerpt,
  image,
  category,
  author,
  date,
  readTime
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
      <SafeLink to={`/blog/${id}`} className="block">
        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {readTime}
            </div>
          </div>
          <h2 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">{author[0]}</span>
              </div>
              <div className="text-sm">
                <p className="font-medium text-primary">{author}</p>
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(date)}
                </div>
              </div>
            </div>
            <span className="text-secondary group-hover:translate-x-2 transition-transform">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </SafeLink>
    </article>
  );
}