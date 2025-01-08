import React from 'react';
import { Bot, Zap, Cpu } from 'lucide-react';
import { ServiceLayout } from '../../components/ServiceLayout';

export function RPAImplementation() {
  return (
    <ServiceLayout
      title="RPA Implementation"
      description="Transform your operations with intelligent automation and robotic process automation"
      icon={Bot}
      benefits={[
        {
          title: "Enhanced Productivity",
          description: "Automate repetitive tasks to free up human resources for strategic work"
        },
        {
          title: "Error Reduction",
          description: "Minimize human errors through consistent automated processes"
        },
        {
          title: "Cost Efficiency",
          description: "Reduce operational costs while improving service quality"
        }
      ]}
      methodology={[
        {
          title: "Automation Assessment",
          description: "Identify processes suitable for automation and estimate ROI"
        },
        {
          title: "Solution Architecture",
          description: "Design scalable automation solutions aligned with business needs"
        },
        {
          title: "Bot Development",
          description: "Create and test automated workflows using leading RPA platforms"
        },
        {
          title: "Deployment & Support",
          description: "Implement automation solutions with ongoing monitoring and optimization"
        }
      ]}
      caseStudies={[
        {
          title: "Financial Services Automation",
          company: "BankTech Solutions",
          description: "Implemented RPA for core banking processes",
          results: [
            "75% reduction in processing time",
            "99.9% accuracy in transactions",
            "45% cost savings in operations"
          ],
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Healthcare Claims Processing",
          company: "MedClaim Pro",
          description: "Automated claims processing workflow",
          results: [
            "85% faster claims processing",
            "62% reduction in manual effort",
            "48% improvement in accuracy"
          ],
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
        }
      ]}
    />
  );
}