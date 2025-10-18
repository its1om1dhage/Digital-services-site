import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark py-20 text-white text-center">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl opacity-90">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
