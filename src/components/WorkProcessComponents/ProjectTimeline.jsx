import React from 'react';

const ProjectTimeline = () => {
  const timelines = [
    {
      projectType: 'Landing Page',
      duration: '1-2 Weeks',
      description: 'Perfect for showcasing a product, service, or event with a focused, single-page design.',
      features: ['Responsive design', 'SEO optimized', 'Fast loading', 'Contact form']
    },
    {
      projectType: 'Business Website',
      duration: '3-4 Weeks',
      description: 'Multi-page website with comprehensive information about your business and services.',
      features: ['5-10 pages', 'CMS integration', 'Blog section', 'Analytics setup']
    },
    {
      projectType: 'E-Commerce Platform',
      duration: '6-8 Weeks',
      description: 'Full-featured online store with payment gateway, inventory management, and user accounts.',
      features: ['Product catalog', 'Shopping cart', 'Payment integration', 'Admin dashboard']
    },
    {
      projectType: 'Custom Web Application',
      duration: '8-12 Weeks',
      description: 'Tailored web application with custom functionality built specifically for your needs.',
      features: ['Custom features', 'Database design', 'User authentication', 'API integration']
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Project Timelines
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Typical timeframes for different project types (timelines may vary based on complexity)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {timelines.map((timeline, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {timeline.projectType}
                </h3>
                <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-sm">
                  {timeline.duration}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {timeline.description}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Key Features:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {timeline.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary-dark/10 dark:from-primary/20 dark:to-primary-dark/20 border border-primary/20 rounded-2xl p-8 text-center">
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            Need a Custom Timeline?
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Every project is unique. Contact us to discuss your specific requirements and get an accurate timeline estimate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
