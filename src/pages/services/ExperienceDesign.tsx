import React from 'react';
import { Target, Users, Palette } from 'lucide-react';
import { ServiceLayout } from '../../components/ServiceLayout';

export function ExperienceDesign() {
  return (
    <ServiceLayout
      title="Experience Design"
      description="Create seamless, engaging customer experiences that drive loyalty and business growth"
      icon={Target}
      benefits={[
        {
          title: "Enhanced Customer Satisfaction",
          description: "Design intuitive experiences that exceed customer expectations and boost satisfaction scores"
        },
        {
          title: "Increased Conversion Rates",
          description: "Optimize touchpoints to reduce friction and improve conversion across all channels"
        },
        {
          title: "Brand Differentiation",
          description: "Create unique, memorable experiences that set your brand apart from competitors"
        }
      ]}
      methodology={[
        {
          title: "Research & Discovery",
          description: "Understand user needs, behaviors, and pain points through comprehensive research"
        },
        {
          title: "Experience Mapping",
          description: "Create detailed journey maps and service blueprints to identify opportunities"
        },
        {
          title: "Design & Prototyping",
          description: "Develop innovative solutions and test them through rapid prototyping"
        },
        {
          title: "Implementation & Optimization",
          description: "Launch refined experiences and continuously optimize based on feedback"
        }
      ]}
      caseStudies={[
        {
          title: "Digital Banking Transformation",
          company: "FinanceFirst Bank",
          description: "Redesigned digital banking experience leading to significant improvements in customer engagement",
          results: [
            "65% increase in mobile app usage",
            "48% improvement in task completion rates",
            "40% reduction in support tickets"
          ],
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Retail Experience Innovation",
          company: "StyleHub",
          description: "Created omnichannel shopping experience connecting physical and digital touchpoints",
          results: [
            "58% increase in customer engagement",
            "45% higher cross-channel conversion rate",
            "32% improvement in customer satisfaction"
          ],
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
        }
      ]}
    />
  );
}