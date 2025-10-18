import React from 'react';

const ProcessTimeline = () => {
  const processes = [
    {
      step: '01',
      title: 'Get Ideas',
      description: 'Understanding your vision and goals through comprehensive discovery sessions.',
      details: 'We begin by understanding your vision, goals, and requirements through detailed consultations.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'Sketch Up',
      description: 'Creating initial designs and wireframes to visualize the concept.',
      details: 'Our designers create initial wireframes and mockups to visualize your project.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'Discuss',
      description: 'Collaborating with stakeholders to refine requirements and approach.',
      details: 'We present the concepts and gather your feedback to refine the direction.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'Revise',
      description: 'Iterating based on feedback to perfect every detail.',
      details: 'Based on your input, we make necessary revisions to perfect the design.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      step: '05',
      title: 'Approve',
      description: 'Final review and sign-off before moving to production.',
      details: 'Once you are satisfied, we get your approval to move forward with development.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      step: '06',
      title: 'Launch',
      description: 'Deploying your solution and ensuring a smooth go-live.',
      details: 'We deploy your website and ensure everything runs smoothly for a successful launch.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-5">
        <div className="space-y-8">
          {processes.map((process, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Step Number - Large and Prominent */}
              <div className="flex-shrink-0 w-20 text-center">
                <div className="text-6xl font-extrabold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent">
                  {process.step}
                </div>
              </div>
              
              {/* Icon Box */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary dark:text-primary-light">
                  {process.icon}
                </div>
              </div>
              
              {/* Content Card */}
              <div className="flex-1 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-500 mb-3 text-sm italic">
                  {process.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {process.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
