
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import ComparisonSection from '../components/ComparisonSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // GSAP ScrollTrigger animations could be added here
    console.log('SOKO Landing Page loaded successfully');

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <ContentSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
