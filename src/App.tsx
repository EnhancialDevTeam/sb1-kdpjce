import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { CaseStudies } from './pages/CaseStudies';
import { CustomerInsights } from './pages/services/CustomerInsights';
import { ExperienceDesign } from './pages/services/ExperienceDesign';
import { CXMeasurement } from './pages/services/CXMeasurement';
import { StrategyAlignment } from './pages/services/StrategyAlignment';
import { CultureTransformation } from './pages/services/CultureTransformation';
import { ProcessOptimization } from './pages/services/ProcessOptimization';
import { RPAImplementation } from './pages/services/RPAImplementation';
import { CloudSolutions } from './pages/services/CloudSolutions';
import { CXStrategy } from './pages/services/CXStrategy';
import { DigitalStrategy } from './pages/services/DigitalStrategy';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/customer-insights" element={<CustomerInsights />} />
          <Route path="/services/experience-design" element={<ExperienceDesign />} />
          <Route path="/services/cx-measurement" element={<CXMeasurement />} />
          <Route path="/services/strategy-alignment" element={<StrategyAlignment />} />
          <Route path="/services/culture-transformation" element={<CultureTransformation />} />
          <Route path="/services/process-optimization" element={<ProcessOptimization />} />
          <Route path="/services/rpa-implementation" element={<RPAImplementation />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/cx-strategy" element={<CXStrategy />} />
          <Route path="/services/digital-strategy" element={<DigitalStrategy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}