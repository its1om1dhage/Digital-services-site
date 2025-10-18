import React from 'react';
import { PageHeader } from '../components/shared';
import { AboutSection, MissionVisionValues, WhyChooseUs } from '../components/AboutComponents';

const About = () => {
  return (
    <div className="pt-20">
      <PageHeader
        title="About WebCultivate"
        subtitle="Your Trusted Partner in Digital Transformation"
      />
      <AboutSection />
      <MissionVisionValues />
      <WhyChooseUs />
    </div>
  );
};

export default About;

