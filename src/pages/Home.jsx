import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Website Designing',
      description: 'Design stunning, responsive, and user-friendly websites tailored to your brand.',
    },
    {
      icon: '💻',
      title: 'Website Development',
      description: 'We build fast, secure, and scalable websites using modern web technologies.',
    },
    {
      icon: '✨',
      title: 'Graphic Designing',
      description: "Creative designs that visually communicate your brand's story and identity.",
    },
  ];

  const workProcess = [
    { step: '01', title: 'Get Ideas', description: 'Godard pabst prism fam cliche.' },
    { step: '02', title: 'Sketch Up', description: 'Godard pabst prism fam cliche.' },
    { step: '03', title: 'Discuss', description: 'Godard pabst prism fam cliche.' },
    { step: '04', title: 'Revise', description: 'Godard pabst prism fam cliche.' },
    { step: '05', title: 'Approve', description: 'Godard pabst prism fam cliche.' },
    { step: '06', title: 'Launch', description: 'Godard pabst prism fam cliche.' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Modern Web Solutions for <span className="gradient-text">Growing Brands</span>
              </h1>
              <p className="hero-description">
                WebCultivate is your go-to freelancing partner for web design, development, and branding. 
                Start exploring our services today and build your digital future.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/work-process" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-illustration">
                <div className="floating-card card-1">🚀</div>
                <div className="floating-card card-2">💡</div>
                <div className="floating-card card-3">⚡</div>
                <div className="hero-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive digital solutions tailored to your business needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Let's Build Your Digital Presence Together</h2>
              <p>
                At WebCultivate, we specialize in crafting powerful, user-friendly, and visually 
                stunning websites tailored to your unique business objectives. Whether you're a 
                startup or an established brand, we bring your digital vision to life through 
                modern design, robust development, and result-driven strategies.
              </p>
              <p>
                Our team combines creativity and technical expertise to deliver seamless experiences 
                that captivate your audience and drive results. Let's collaborate and turn your ideas 
                into a high-performing digital reality.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <div className="about-illustration">
                <div className="stat-card">
                  <h3>100+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-card">
                  <h3>50+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat-card">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="section growth-section">
        <div className="container">
          <div className="growth-content">
            <div className="growth-image">
              <div className="growth-illustration">📈</div>
            </div>
            <div className="growth-text">
              <h2>We Can Help You Grow Your Business Online</h2>
              <p>
                From custom website development to impactful digital marketing strategies, 
                WebCultivate is your trusted partner in building a strong online presence. 
                We understand your business goals and craft tailored solutions to reach more 
                customers, improve engagement, and boost conversions.
              </p>
              <p>
                Let us handle the tech, design, and strategy — so you can focus on scaling 
                your business with confidence.
              </p>
              <div className="growth-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Custom Development</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Digital Marketing</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>Result-Driven Strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Preview */}
      <section className="section work-process-preview">
        <div className="container">
          <div className="section-title">
            <h2>Work Process</h2>
            <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex.</p>
          </div>
          <div className="process-grid">
            {workProcess.map((process, index) => (
              <div key={index} className="process-card">
                <div className="process-number">{process.step}</div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/work-process" className="btn btn-outline">
              View Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's create something amazing together</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
