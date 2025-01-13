import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { CaseStudies } from './pages/CaseStudies';
import { CustomerInsights } from './pages/services/CustomerInsights';
import { CXStrategy } from './pages/services/CXStrategy';
import { DigitalStrategy } from './pages/services/DigitalStrategy';
import { ProcessOptimization } from './pages/services/ProcessOptimization';
import { InsightsHub } from './pages/InsightsHub';
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPost';
import { FAQ } from './pages/FAQ';
import { Resources } from './pages/Resources';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Breadcrumb />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/customer-insights" element={<CustomerInsights />} />
          <Route path="/services/cx-strategy" element={<CXStrategy />} />
          <Route path="/services/digital-strategy" element={<DigitalStrategy />} />
          <Route path="/services/process-optimization" element={<ProcessOptimization />} />
          <Route path="/insights" element={<InsightsHub />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}