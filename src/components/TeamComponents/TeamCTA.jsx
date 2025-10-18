import React from 'react';

const TeamCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-5 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Join Our Growing Team</h2>
        <p className="text-xl mb-8 opacity-90">
          We are always looking for talented individuals to join our team. If you are 
          passionate about web development and design, we would love to hear from you!
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 rounded-xl font-semibold bg-white text-primary shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          View Open Positions
        </a>
      </div>
    </section>
  );
};

export default TeamCTA;
