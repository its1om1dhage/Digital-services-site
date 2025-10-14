import React from 'react';
import './WorkProcess.css';

const WorkProcess = () => {
  const processes = [
    {
      step: '01',
      title: 'Get Ideas',
      description: 'Godard pabst prism fam cliche.',
      details: 'We begin by understanding your vision, goals, and requirements through detailed consultations.',
      icon: '💡'
    },
    {
      step: '02',
      title: 'Sketch Up',
      description: 'Godard pabst prism fam cliche.',
      details: 'Our designers create initial wireframes and mockups to visualize your project.',
      icon: '✏️'
    },
    {
      step: '03',
      title: 'Discuss',
      description: 'Godard pabst prism fam cliche.',
      details: 'We present the concepts and gather your feedback to refine the direction.',
      icon: '💬'
    },
    {
      step: '04',
      title: 'Revise',
      description: 'Godard pabst prism fam cliche.',
      details: 'Based on your input, we make necessary revisions to perfect the design.',
      icon: '🔄'
    },
    {
      step: '05',
      title: 'Approve',
      description: 'Godard pabst prism fam cliche.',
      details: 'Once you are satisfied, we get your approval to move forward with development.',
      icon: '✅'
    },
    {
      step: '06',
      title: 'Launch',
      description: 'Godard pabst prism fam cliche.',
      details: 'We deploy your website and ensure everything runs smoothly for a successful launch.',
      icon: '🚀'
    }
  ];

  return (
    <div className="work-process-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Work Process</h1>
          <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="process-timeline">
            {processes.map((process, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-icon">
                  <span className="icon-emoji">{process.icon}</span>
                  <span className="step-number">{process.step}</span>
                </div>
                <div className="timeline-content">
                  <h3>{process.title}</h3>
                  <p className="timeline-description">{process.description}</p>
                  <p className="timeline-details">{process.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's follow our proven process to bring your vision to life</p>
            <a href="/contact" className="btn btn-primary">Get Started Today</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkProcess;
