import React from 'react';
import { BarChart3, LineChart, PieChart } from 'lucide-react';
import { ServiceLayout } from '../../components/ServiceLayout';

export function CXMeasurement() {
  return (
    <ServiceLayout
      title="CX Measurement & Analytics"
      description="Transform customer data into actionable insights with advanced analytics and measurement frameworks"
      icon={BarChart3}
      benefits={[
        {
          title: "Data-Driven Decisions",
          description: "Make informed decisions based on comprehensive customer metrics and analytics"
        },
        {
          title: "ROI Visibility",
          description: "Clearly demonstrate the business impact of CX initiatives through measurable metrics"
        },
        {
          title: "Proactive Improvements",
          description: "Identify and address experience gaps before they impact customer satisfaction"
        }
      ]}
      methodology={[
        {
          title: "Metrics Framework Design",
          description: "Develop comprehensive measurement framework aligned with business objectives"
        },
        {
          title: "Data Integration",
          description: "Connect and consolidate data sources for holistic customer view"
        },
        {
          title: "Analytics Implementation",
          description: "Deploy advanced analytics tools and dashboards for real-time insights"
        },
        {
          title: "Continuous Optimization",
          description: "Regular analysis and refinement of metrics to ensure continued relevance"
        }
      ]}
      caseStudies={[
        {
          title: "Healthcare Analytics Revolution",
          company: "MedCare Plus",
          description: "Implemented comprehensive CX measurement framework for healthcare network",
          results: [
            "52% improvement in patient satisfaction",
            "38% reduction in wait times",
            "45% increase in referral rates"
          ],
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Retail Analytics Transformation",
          company: "ShopSmart",
          description: "Developed real-time customer analytics platform for retail chain",
          results: [
            "43% increase in customer retention",
            "35% improvement in promotion effectiveness",
            "28% reduction in customer churn"
          ],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        }
      ]}
    />
  );
}