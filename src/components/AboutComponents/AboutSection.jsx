import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">Let's Build Your Digital Presence Together</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              At WebCultivate, we specialize in crafting powerful, user-friendly, and visually 
              stunning websites tailored to your unique business objectives. Whether you're a 
              startup or an established brand, we bring your digital vision to life through 
              modern design, robust development, and result-driven strategies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Our team combines creativity and technical expertise to deliver seamless experiences 
              that captivate your audience and drive results. Let's collaborate and turn your ideas 
              into a high-performing digital reality.
            </p>
            <Link to="/about" className="inline-block px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-400">
              Learn More About Us
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">
              <h3 className="text-4xl font-bold text-primary mb-2">5+</h3>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
