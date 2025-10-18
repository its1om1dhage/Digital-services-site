import React from 'react';
import { PageHeader } from '../components/shared';
import { ProcessTimeline, ProcessCTA } from '../components/WorkProcessComponents';

const WorkProcess = () => {
  return (
    <div className="pt-20">
      <PageHeader
        title="Our Work Process"
        subtitle="A streamlined approach to deliver exceptional digital solutions from concept to launch."
      />
      <ProcessTimeline />
      <ProcessCTA />
    </div>
  );
};

export default WorkProcess;
