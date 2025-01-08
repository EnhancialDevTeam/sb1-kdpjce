import React from 'react';
import { Users2, Heart, Target } from 'lucide-react';
import { ServiceLayout } from '../../components/ServiceLayout';

export function CultureTransformation() {
  return (
    <ServiceLayout
      title="Culture Transformation"
      description="Build a customer-centric organization that delivers exceptional experiences at every touchpoint"
      icon={Users2}
      benefits={[
        {
          title: "Enhanced Employee Engagement",
          description: "Create a motivated workforce aligned with customer-centric values"
        },
        {
          title: "Improved Customer Experience",
          description: "Deliver consistent, high-quality experiences through cultural alignment"
        },
        {
          title: "Sustainable Growth",
          description: "Build lasting competitive advantage through cultural differentiation"
        }
      ]}
      methodology={[
        {
          title: "Cultural Assessment",
          description: "Evaluate current culture and identify transformation opportunities"
        },
        {
          title: "Vision Development",
          description: "Create compelling customer-centric vision and values"
        },
        {
          title: "Change Implementation",
          description: "Execute comprehensive culture change program"
        },
        {
          title: "Sustainability Planning",
          description: "Establish mechanisms to sustain cultural transformation"
        }
      ]}
      caseStudies={[
        {
          title: "Retail Culture Revolution",
          company: "FashionFirst",
          description: "Transformed organizational culture to deliver exceptional customer experiences",
          results: [
            "55% improvement in employee satisfaction",
            "48% increase in customer loyalty",
            "42% reduction in employee turnover"
          ],
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Healthcare Culture Innovation",
          company: "CarePlus Medical",
          description: "Built patient-centric culture across healthcare network",
          results: [
            "62% increase in patient satisfaction",
            "45% improvement in staff engagement",
            "38% better clinical outcomes"
          ],
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
        }
      ]}
    />
  );
}