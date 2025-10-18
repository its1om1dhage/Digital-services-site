import React from 'react';

const TeamGrid = () => {
  const team = [
    {
      name: 'Tejas',
      role: 'Founder & CEO',
      image: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      bio: 'Visionary leader with 10+ years in web development and digital strategy.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Vaidahi',
      role: 'Lead Designer',
      image: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      bio: 'Creative designer specializing in modern, user-centric design experiences.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Om Dhage',
      role: 'Senior Developer',
      image: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Vaishnavi',
      role: 'UX/UI Designer',
      image: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      bio: 'Passionate about creating intuitive and beautiful user interfaces.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    }
  ];

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-gray-400 dark:text-gray-500">
                <div className="w-32 h-32">
                  {member.image}
                </div>
              </div>
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  <a
                    href={member.social.linkedin}
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href={member.social.twitter}
                    aria-label="Twitter"
                    className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                  <a
                    href={member.social.email}
                    aria-label="Email"
                    className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
