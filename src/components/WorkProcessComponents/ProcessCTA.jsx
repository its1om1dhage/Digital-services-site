import React from 'react';

const ProcessCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-5 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 opacity-90">
          Let's follow our proven process to bring your vision to life
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 rounded-xl font-semibold bg-white text-primary shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default ProcessCTA;
