import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-slate-900 dark:to-slate-800 text-white pt-20 mt-24 relative border-t border-gray-700 dark:border-slate-700">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-5 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              <span className="font-extrabold">Web</span>
              <span className="font-semibold">Cultivate</span>
            </h3>
            <p className="text-gray-300 dark:text-slate-400 mb-5 leading-relaxed">
              Modern web solutions for growing brands. We specialize in crafting powerful, 
              user-friendly websites tailored to your business objectives.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-xl bg-white/10 dark:bg-white/5 flex items-center justify-center transition-all duration-400 ease-in-out backdrop-blur-md border border-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/35 hover:border-transparent">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-11 h-11 rounded-xl bg-white/10 dark:bg-white/5 flex items-center justify-center transition-all duration-400 ease-in-out backdrop-blur-md border border-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/35 hover:border-transparent">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-xl bg-white/10 dark:bg-white/5 flex items-center justify-center transition-all duration-400 ease-in-out backdrop-blur-md border border-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/35 hover:border-transparent">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-xl bg-white/10 dark:bg-white/5 flex items-center justify-center transition-all duration-400 ease-in-out backdrop-blur-md border border-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/35 hover:border-transparent">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-semibold text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">About</Link></li>
              <li><Link to="/work-process" className="text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Work Process</Link></li>
              <li><Link to="/pricing" className="text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-semibold text-lg">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#services" className="text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Website Designing</a></li>
              <li><a href="#services" className="text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Website Development</a></li>
              <li><a href="#services" className="text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Graphic Designing</a></li>
              <li><Link to="/contact" className="text-gray-300 dark:text-slate-400 transition-all duration-300 hover:text-primary hover:pl-1.5">Get Started</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-semibold text-lg">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-primary mt-1"></i>
                <span className="text-gray-300 dark:text-slate-400">info@webcultivate.com</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-primary mt-1"></i>
                <span className="text-gray-300 dark:text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                <span className="text-gray-300 dark:text-slate-400">123 Web Street, Digital City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-gray-700 dark:border-slate-700">
          <p className="text-gray-400 dark:text-slate-500">&copy; {currentYear} WebCultivate. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-400 dark:text-slate-500 hover:text-primary transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#terms" className="text-gray-400 dark:text-slate-500 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
