import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="absolute -top-1/2 -right-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 leading-tight tracking-tight">
              Modern Web Solutions for <span className="relative inline-block bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-primary after:to-primary-dark after:rounded after:opacity-30">Growing Brands</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-9 leading-relaxed max-w-[90%]">
              WebCultivate is your go-to freelancing partner for web design, development, and branding. 
              Start exploring our services today and build your digital future.
            </p>
            <div className="flex gap-5 flex-wrap">
              <Link to="/contact" className="inline-block px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-400 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-500 hover:before:left-full">
                Get Started
              </Link>
              <Link to="/work-process" className="inline-block px-8 py-3.5 rounded-xl font-semibold text-primary dark:text-primary-light bg-transparent border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-lg hover:shadow-primary/35">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="absolute w-[90px] h-[90px] bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-xl border border-gray-200 dark:border-slate-700 animate-float top-[20%] left-[10%]">
              <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="absolute w-[90px] h-[90px] bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-xl border border-gray-200 dark:border-slate-700 animate-float-delay-1 top-[60%] right-[10%]">
              <svg className="w-12 h-12 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="absolute w-[90px] h-[90px] bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-xl border border-gray-200 dark:border-slate-700 animate-float-delay-2 bottom-[20%] left-[20%]">
              <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="relative w-[350px] h-[350px] bg-gradient-to-br from-primary to-primary-dark rounded-full opacity-10">
              <div className="absolute -inset-5 bg-gradient-to-br from-primary-dark to-primary rounded-full opacity-50 animate-rotate"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
