import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '499',
      period: 'per project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO',
        'Contact form',
        '1 month support',
        'Social media integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '999',
      period: 'per project',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Advanced responsive design',
        'Advanced SEO',
        'CMS integration',
        '3 months support',
        'Analytics setup',
        'Custom features',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per project',
      description: 'For large-scale projects',
      features: [
        'Unlimited pages',
        'Custom design & development',
        'Enterprise SEO',
        'Advanced CMS',
        '6 months support',
        'Dedicated project manager',
        'Priority support',
        'Custom integrations',
        'Training sessions'
      ],
      popular: false
    }
  ];

  return (
    <div className="pricing-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Pricing Plans</h1>
          <p>Choose the perfect plan for your business needs</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price !== 'Custom' ? (
                    <>
                      <span className="currency">$</span>
                      <span className="amount">{plan.price}</span>
                    </>
                  ) : (
                    <span className="amount">{plan.price}</span>
                  )}
                </div>
                <p className="period">{plan.period}</p>
                <p className="plan-description">{plan.description}</p>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our pricing and services</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you offer custom packages?</h3>
              <p>Yes! We can create custom packages tailored to your specific requirements. Contact us to discuss your needs.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and bank transfers. Payment terms can be discussed during consultation.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a setup fee?</h3>
              <p>No hidden fees! The price you see includes everything mentioned in the package features.</p>
            </div>
            <div className="faq-item">
              <h3>What happens after the support period?</h3>
              <p>You can purchase extended support or maintenance packages. We are always here to help you grow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
