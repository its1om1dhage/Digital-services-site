import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work Process', path: '/work-process' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out backdrop-blur-xl border-b ${
      isScrolled 
        ? 'bg-white/90 shadow-lg border-gray-200 dark:bg-slate-900 dark:border-slate-700' 
        : 'bg-white/70 shadow-md border-gray-100 dark:bg-slate-900/80 dark:border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-0 text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            <span className="font-extrabold">Web</span>
            <span className="font-semibold">Cultivate</span>
          </Link>

          <div className={`md:flex items-center gap-9 ${isMobileMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-white dark:bg-slate-900 p-6 shadow-lg' : 'hidden'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === link.path ? 'text-primary after:w-full' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <button 
              className="group p-0 bg-transparent border-none cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <div className={`relative w-16 h-8 rounded-full transition-all duration-400 ease-in-out border-2 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-primary/15 to-secondary/15 border-primary/25 shadow-[inset_0_2px_8px_rgba(37,99,235,0.1),0_4px_15px_rgba(37,99,235,0.12)]'
                  : 'bg-gradient-to-br from-primary/15 to-secondary/15 border-primary/25 shadow-[inset_0_2px_8px_rgba(37,99,235,0.1),0_4px_15px_rgba(37,99,235,0.12)]'
              } group-hover:bg-gradient-to-br group-hover:from-primary/25 group-hover:to-primary-dark/25 group-hover:shadow-[inset_0_2px_8px_rgba(37,99,235,0.15),0_6px_20px_rgba(37,99,235,0.2)]`}>
                <div className={`absolute top-1/2 -translate-y-1/2 w-[26px] h-[26px] rounded-full flex items-center justify-center shadow-[0_3px_10px_rgba(37,99,235,0.3),0_1px_3px_rgba(0,0,0,0.1)] transition-all duration-[400ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                  isDarkMode 
                    ? 'left-[calc(100%-28px)] bg-gradient-to-br from-gray-600 to-gray-700 shadow-[0_3px_10px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.2)]'
                    : 'left-0.5 bg-gradient-to-br from-primary to-primary-dark'
                }`}>
                  {isDarkMode ? (
                    <i className="fas fa-moon text-[13px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] animate-moon-glow group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-300"></i>
                  ) : (
                    <i className="fas fa-sun text-[13px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] animate-sun-rotate group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-300"></i>
                  )}
                </div>
              </div>
            </button>

            <Link to="/contact" className="hidden md:inline-block px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-400 ease-in-out relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-500 hover:before:left-full">
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
