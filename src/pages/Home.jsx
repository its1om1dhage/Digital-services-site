import React from 'react';
import {
  HeroSection,
  ServicesSection,
  AboutSection,
  GrowthSection,
  WorkProcessPreview,
  CTASection
} from '../components/HomeComponents';

const Home = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GrowthSection />
      <WorkProcessPreview />
      <CTASection />
    </div>
  );
};

export default Home;

