import React from 'react';
import { Cpu, LineChart, Zap } from 'lucide-react';
import { ServiceLayout } from '../../components/ServiceLayout';

export function ProcessOptimization() {
  return (
    <ServiceLayout
      title="Process Optimization"
      description="Streamline operations and enhance efficiency through intelligent process optimization"
      icon={Cpu}
      benefits={[
        {
          title: "Operational Efficiency",
          description: "Reduce costs and improve productivity through streamlined workflows"
        },
        {
          title: "Quality Enhancement",
          description: "Minimize errors and improve consistency in service delivery"
        },
        {
          title: "Scalable Growth",
          description: "Create scalable processes that support business expansion"
        }
      ]}
      methodology={[
        {
          title: "Process Assessment",
          description: "Analyze current workflows and identify optimization opportunities"
        },
        {
          title: "Solution Design",
          description: "Develop optimized process flows and automation strategies"
        },
        {
          title: "Implementation",
          description: "Deploy new processes with minimal disruption to operations"
        },
        {
          title: "Continuous Improvement",
          description: "Monitor and refine processes for ongoing optimization"
        }
      ]}
      caseStudies={[
        {
          title: "Manufacturing Excellence",
          company: "IndustrialTech",
          description: "Transformed manufacturing processes through intelligent optimization",
          results: [
            "45% reduction in production time",
            "38% decrease in operational costs",
            "52% improvement in quality metrics"
          ],
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Service Operations Revolution",
          company: "ServicePro",
          description: "Optimized service delivery processes for enhanced customer experience",
          results: [
            "60% faster service delivery",
            "42% increase in customer satisfaction",
            "35% reduction in service costs"
          ],
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
        }
      ]}
    />
  );
}