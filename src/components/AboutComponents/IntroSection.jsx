import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex items-center justify-center">
            <svg className="w-64 h-64 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Let's Build Your Digital Presence Together
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              At WebCultivate, we specialize in crafting powerful, user-friendly, and visually 
              stunning websites tailored to your unique business objectives. Whether you're a 
              startup or an established brand, we bring your digital vision to life through 
              modern design, robust development, and result-driven strategies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our team combines creativity and technical expertise to deliver seamless experiences 
              that captivate your audience and drive results. Let's collaborate and turn your ideas 
              into a high-performing digital reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
