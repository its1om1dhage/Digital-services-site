import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: '👩‍💼',
      rating: 5,
      text: 'WebCultivate transformed our online presence completely. Their attention to detail and creative approach exceeded our expectations. Highly recommended!'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Ecommerce Plus',
      image: '👨‍💻',
      rating: 5,
      text: 'Working with WebCultivate was a game-changer for our business. They delivered a stunning website that increased our conversions by 150%.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCo',
      image: '👩‍💼',
      rating: 5,
      text: 'Professional, creative, and reliable. WebCultivate understood our brand vision and brought it to life perfectly. Their support is exceptional!'
    },
    {
      name: 'David Thompson',
      role: 'Owner, Local Bistro',
      image: '👨‍🍳',
      rating: 5,
      text: 'The team at WebCultivate made the entire process smooth and enjoyable. Our new website has helped us attract more customers than ever.'
    },
    {
      name: 'Lisa Martinez',
      role: 'Creative Director, Design Hub',
      image: '👩‍🎨',
      rating: 5,
      text: 'Incredible design skills and technical expertise! WebCultivate delivered exactly what we needed, on time and within budget.'
    },
    {
      name: 'James Wilson',
      role: 'Startup Founder, InnovateTech',
      image: '👨‍💼',
      rating: 5,
      text: 'From concept to launch, WebCultivate provided outstanding service. They are true professionals who care about their clients success.'
    }
  ];

  return (
    <div className="testimonials-page">
      <section className="page-header">
        <div className="container">
          <h1>Client Testimonials</h1>
          <p>What our satisfied clients have to say about working with us</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-image">{testimonial.image}</div>
                  <div className="client-info">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="quote-icon">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h2>100+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h2>50+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h2>5+</h2>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h2>98%</h2>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
