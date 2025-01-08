import React from 'react';
import { LineChart, Users, BarChart3 } from 'lucide-react';
import { ServiceLayout } from '../../components/ServiceLayout';

export function CustomerInsights() {
  return (
    <ServiceLayout
      title="Customer Insights & Research"
      description="Unlock deep understanding of your customers through comprehensive research and analysis"
      icon={LineChart}
      benefits={[
        {
          title: "Data-Driven Decision Making",
          description: "Make informed decisions based on real customer data and behavioral insights"
        },
        {
          title: "Customer Journey Mapping",
          description: "Visualize and optimize every touchpoint in your customer's journey"
        },
        {
          title: "Voice of Customer Programs",
          description: "Establish systematic feedback collection and analysis processes"
        }
      ]}
      methodology={[
        {
          title: "Discovery & Planning",
          description: "Define research objectives and develop comprehensive research plan"
        },
        {
          title: "Data Collection",
          description: "Gather insights through surveys, interviews, and behavioral analytics"
        },
        {
          title: "Analysis & Synthesis",
          description: "Transform raw data into actionable insights and recommendations"
        },
        {
          title: "Implementation Support",
          description: "Guide the implementation of insights-driven improvements"
        }
      ]}
      caseStudies={[
        {
          title: "Retail Giant Transformation",
          company: "GlobalMart",
          description: "Implemented comprehensive VoC program leading to significant improvements in customer satisfaction",
          results: [
            "42% increase in customer satisfaction",
            "28% reduction in customer complaints",
            "35% improvement in first-contact resolution"
          ],
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "E-commerce Innovation",
          company: "TechStore",
          description: "Revolutionized online shopping experience through deep customer insights",
          results: [
            "53% increase in conversion rate",
            "45% improvement in customer engagement",
            "31% reduction in cart abandonment"
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        }
      ]}
    />
  );
}