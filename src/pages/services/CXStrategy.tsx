import React from 'react';
import { Target, Users2, LineChart } from 'lucide-react';
import { ServiceLayout } from '../../components/ServiceLayout';

export function CXStrategy() {
  return (
    <ServiceLayout
      title="CX Strategy"
      description="Develop comprehensive customer experience strategies that drive growth and loyalty"
      icon={Target}
      benefits={[
        {
          title: "Competitive Advantage",
          description: "Create unique experiences that differentiate your brand"
        },
        {
          title: "Customer Loyalty",
          description: "Build strong relationships that drive repeat business"
        },
        {
          title: "Revenue Growth",
          description: "Increase customer lifetime value through improved experiences"
        }
      ]}
      methodology={[
        {
          title: "Current State Analysis",
          description: "Assess existing customer experience and identify gaps"
        },
        {
          title: "Strategy Development",
          description: "Create comprehensive CX roadmap aligned with business goals"
        },
        {
          title: "Implementation Planning",
          description: "Define detailed action plans and success metrics"
        },
        {
          title: "Execution Support",
          description: "Guide implementation and measure outcomes"
        }
      ]}
      caseStudies={[
        {
          title: "Retail CX Transformation",
          company: "FashionFirst",
          description: "Developed and implemented comprehensive CX strategy",
          results: [
            "55% increase in customer satisfaction",
            "40% improvement in customer retention",
            "35% growth in revenue per customer"
          ],
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Banking Experience Innovation",
          company: "FinanceHub",
          description: "Transformed banking experience through strategic CX initiatives",
          results: [
            "48% increase in mobile banking adoption",
            "42% improvement in NPS scores",
            "30% reduction in customer complaints"
          ],
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
        }
      ]}
    />
  );
}