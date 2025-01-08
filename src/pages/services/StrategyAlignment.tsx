import React from 'react';
import { Target, Users2, BarChart3 } from 'lucide-react';
import { ServiceLayout } from '../../components/ServiceLayout';

export function StrategyAlignment() {
  return (
    <ServiceLayout
      title="Strategy Alignment"
      description="Align your CX initiatives with business goals to drive sustainable growth and competitive advantage"
      icon={Target}
      benefits={[
        {
          title: "Strategic Focus",
          description: "Ensure all CX initiatives directly support your business objectives and growth targets"
        },
        {
          title: "Resource Optimization",
          description: "Maximize ROI by prioritizing initiatives that deliver the highest business impact"
        },
        {
          title: "Organizational Clarity",
          description: "Create clear direction and purpose across all levels of the organization"
        }
      ]}
      methodology={[
        {
          title: "Current State Assessment",
          description: "Evaluate existing strategies, capabilities, and alignment gaps"
        },
        {
          title: "Strategy Development",
          description: "Create comprehensive CX strategy aligned with business objectives"
        },
        {
          title: "Implementation Planning",
          description: "Develop detailed roadmap and governance framework"
        },
        {
          title: "Performance Monitoring",
          description: "Establish metrics and feedback loops to track strategic alignment"
        }
      ]}
      caseStudies={[
        {
          title: "Global Insurance Transformation",
          company: "SecureLife Insurance",
          description: "Aligned CX strategy with business goals leading to significant growth",
          results: [
            "48% increase in customer lifetime value",
            "35% improvement in cross-selling success",
            "42% higher employee engagement"
          ],
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Telecom Strategy Revolution",
          company: "ConnectTech",
          description: "Transformed customer experience strategy to drive market leadership",
          results: [
            "52% increase in market share",
            "45% improvement in NPS",
            "38% reduction in customer acquisition cost"
          ],
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
        }
      ]}
    />
  );
}