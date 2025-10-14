import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About WebCultivate</h1>
          <p>Your Trusted Partner in Digital Transformation</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-detailed">
            <div className="about-image-section">
              <div className="about-main-image">
                <div className="image-placeholder">🌐</div>
              </div>
            </div>
            <div className="about-text-section">
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
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="mission-vision">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses of all sizes with cutting-edge digital solutions that 
                drive growth, enhance user experience, and build lasting online success.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To become the leading digital partner for brands worldwide, known for innovation, 
                quality, and transformative web solutions.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Quality, creativity, integrity, and client satisfaction are at the heart of 
                everything we do at WebCultivate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-choose">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose WebCultivate?</h2>
            <p>What sets us apart from the rest</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-number">01</span>
              <h3>Expert Team</h3>
              <p>Skilled professionals with years of experience in web development and design.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-number">02</span>
              <h3>Modern Technology</h3>
              <p>We use the latest frameworks and tools to build future-proof solutions.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-number">03</span>
              <h3>Client-Focused</h3>
              <p>Your success is our priority. We listen, understand, and deliver.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-number">04</span>
              <h3>On-Time Delivery</h3>
              <p>We respect deadlines and ensure timely project completion.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-number">05</span>
              <h3>Affordable Pricing</h3>
              <p>Quality services at competitive rates that fit your budget.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-number">06</span>
              <h3>24/7 Support</h3>
              <p>We're here to help you anytime you need us.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
