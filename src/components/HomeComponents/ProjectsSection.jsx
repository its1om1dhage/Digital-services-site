import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const handleToggleProjects = () => {
    if (showAll) {
      // If collapsing (View Less), scroll to section top
      setShowAll(false);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      // If expanding (View More), just show more projects
      setShowAll(true);
    }
  };

  const projects = [
    {
      title: 'CodeEfficience',
      category: 'Web Application',
      description: 'A comprehensive learning platform for students to browse, purchase, and access programming courses with secure payment integration and progress tracking.',
      image: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      featured: true
    },
    {
      title: 'Hotel Booking Platform',
      category: 'Web Application',
      description: 'Full-featured hotel reservation system with real-time availability, secure booking, payment processing, and customer reviews.',
      image: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      tags: ['Next.js', 'Express', 'PostgreSQL', 'Redis'],
      link: '#',
      featured: true
    },
    {
      title: 'AI Chat Assistant',
      category: 'LLM Project',
      description: 'Advanced AI-powered chatbot using large language models for natural conversations, context awareness, and intelligent responses.',
      image: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      tags: ['Python', 'OpenAI', 'LangChain', 'FastAPI'],
      link: '#',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'Modern e-commerce solution with seamless checkout, inventory management, and real-time analytics.',
      image: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      featured: false
    },
    {
      title: 'Corporate Website',
      category: 'Business',
      description: 'Professional corporate website with CMS integration, blog, and multilingual support.',
      image: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      tags: ['Next.js', 'Tailwind', 'Strapi'],
      link: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      category: 'Personal',
      description: 'Creative portfolio showcasing work with smooth animations and interactive elements.',
      image: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      tags: ['Vue.js', 'GSAP', 'Three.js'],
      link: '#',
      featured: false
    },
    {
      title: 'Healthcare Dashboard',
      category: 'Web Application',
      description: 'Comprehensive healthcare management dashboard with patient records and appointment scheduling.',
      image: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      tags: ['React', 'Chart.js', 'Firebase'],
      link: '#',
      featured: false
    },
    {
      title: 'Social Media Platform',
      category: 'Web Application',
      description: 'Feature-rich social networking platform with real-time messaging and content sharing.',
      image: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      tags: ['MERN Stack', 'Socket.io', 'Redis'],
      link: '#',
      featured: false
    }
  ];

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivered to clients across various industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary dark:text-primary-light p-8 group-hover:scale-105 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-primary dark:text-primary-light">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary dark:text-primary-light font-semibold hover:gap-3 transition-all duration-300"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleToggleProjects}
            className="inline-block px-8 py-3.5 rounded-xl font-semibold text-primary dark:text-primary-light bg-white dark:bg-slate-900 border-2 border-primary dark:border-primary-light shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-400 mr-4"
          >
            {showAll ? (
              <>
                View Less
                <svg className="w-5 h-5 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                View More Projects
                <svg className="w-5 h-5 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-400"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
