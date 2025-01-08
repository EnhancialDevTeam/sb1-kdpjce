import React from 'react';
import { Cloud, Shield, Zap } from 'lucide-react';
import { ServiceLayout } from '../../components/ServiceLayout';

export function CloudSolutions() {
  return (
    <ServiceLayout
      title="Cloud Solutions"
      description="Transform your business with scalable, secure, and efficient cloud infrastructure"
      icon={Cloud}
      benefits={[
        {
          title: "Scalable Infrastructure",
          description: "Easily scale resources up or down based on business needs"
        },
        {
          title: "Cost Optimization",
          description: "Reduce infrastructure costs with pay-as-you-go pricing models"
        },
        {
          title: "Enhanced Security",
          description: "Implement enterprise-grade security measures and compliance"
        }
      ]}
      methodology={[
        {
          title: "Cloud Assessment",
          description: "Evaluate current infrastructure and define cloud migration strategy"
        },
        {
          title: "Architecture Design",
          description: "Design scalable and secure cloud architecture"
        },
        {
          title: "Migration Planning",
          description: "Develop detailed migration roadmap and risk mitigation strategies"
        },
        {
          title: "Implementation & Support",
          description: "Execute migration and provide ongoing optimization support"
        }
      ]}
      caseStudies={[
        {
          title: "E-commerce Cloud Migration",
          company: "ShopTech Global",
          description: "Migrated legacy e-commerce platform to cloud infrastructure",
          results: [
            "65% reduction in infrastructure costs",
            "99.99% uptime achievement",
            "40% faster deployment cycles"
          ],
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Healthcare Cloud Transformation",
          company: "MedTech Solutions",
          description: "Implemented secure cloud infrastructure for healthcare provider",
          results: [
            "70% improvement in data accessibility",
            "50% reduction in IT maintenance costs",
            "100% HIPAA compliance achievement"
          ],
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
        }
      ]}
    />
  );
}