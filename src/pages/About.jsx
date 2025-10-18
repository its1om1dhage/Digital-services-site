import React from 'react';
import { PageHeader } from '../components/shared';
import { IntroSection, MissionVisionValues, WhyChooseUs } from '../components/AboutComponents';

const About = () => {
  return (
    <div className="pt-20">
      <PageHeader
        title="About WebCultivate"
        subtitle="Your Trusted Partner in Digital Transformation"
      />
      <IntroSection />
      <MissionVisionValues />
      <WhyChooseUs />
    </div>
  );
};

export default About;

