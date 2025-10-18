import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Website Designing',
      description: 'Design stunning, responsive, and user-friendly websites tailored to your brand.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Website Development',
      description: 'We build fast, secure, and scalable websites using modern web technologies.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Graphic Designing',
      description: "Creative designs that visually communicate your brand's story and identity.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900" id="services">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Comprehensive digital solutions tailored to your business needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {services.map((service, index) => (
            <div key={index} className="relative bg-white dark:bg-slate-800 p-11 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 transition-all duration-400 hover:shadow-xl hover:-translate-y-2 text-center overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-primary before:to-secondary before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-400">
              <div className="text-primary dark:text-primary-light mb-5 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
