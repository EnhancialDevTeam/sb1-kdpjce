import React from 'react';
import { Globe, Smartphone, Zap } from 'lucide-react';
import { ServiceLayout } from '../../components/ServiceLayout';

export function DigitalStrategy() {
  return (
    <ServiceLayout
      title="Digital Strategy"
      description="Create comprehensive digital transformation strategies that drive innovation and growth"
      icon={Globe}
      benefits={[
        {
          title: "Digital Innovation",
          description: "Stay ahead of market trends with innovative digital solutions"
        },
        {
          title: "Operational Excellence",
          description: "Improve efficiency through digital process optimization"
        },
        {
          title: "Market Leadership",
          description: "Establish digital competitive advantages in your industry"
        }
      ]}
      methodology={[
        {
          title: "Digital Assessment",
          description: "Evaluate current digital maturity and opportunities"
        },
        {
          title: "Strategy Formation",
          description: "Develop comprehensive digital transformation roadmap"
        },
        {
          title: "Technology Selection",
          description: "Identify and evaluate appropriate digital solutions"
        },
        {
          title: "Implementation Support",
          description: "Guide digital transformation execution and adoption"
        }
      ]}
      caseStudies={[
        {
          title: "Manufacturing Digital Revolution",
          company: "IndustrialTech",
          description: "Led complete digital transformation of manufacturing operations",
          results: [
            "60% improvement in operational efficiency",
            "45% reduction in maintenance costs",
            "35% increase in production output"
          ],
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Retail Digital Innovation",
          company: "ShopSmart",
          description: "Implemented omnichannel digital strategy",
          results: [
            "70% increase in online sales",
            "50% improvement in customer engagement",
            "40% reduction in customer acquisition costs"
          ],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        }
      ]}
    />
  );
}