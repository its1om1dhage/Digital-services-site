import React from 'react';
import './Team.css';

const Team = () => {
  const team = [
    {
      name: 'John Anderson',
      role: 'Founder & CEO',
      image: '👨‍💼',
      bio: 'Visionary leader with 10+ years in web development and digital strategy.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Sarah Williams',
      role: 'Lead Designer',
      image: '👩‍🎨',
      bio: 'Creative designer specializing in modern, user-centric design experiences.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Michael Brown',
      role: 'Senior Developer',
      image: '👨‍💻',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Emily Davis',
      role: 'UX/UI Designer',
      image: '👩‍💼',
      bio: 'Passionate about creating intuitive and beautiful user interfaces.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'David Martinez',
      role: 'Marketing Strategist',
      image: '👨‍💼',
      bio: 'Digital marketing expert driving growth through data-driven strategies.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    },
    {
      name: 'Jessica Taylor',
      role: 'Project Manager',
      image: '👩‍💼',
      bio: 'Ensuring seamless project delivery and exceptional client satisfaction.',
      social: { linkedin: '#', twitter: '#', email: '#' }
    }
  ];

  return (
    <div className="team-page">
      <section className="page-header">
        <div className="container">
          <h1>Meet Our Team</h1>
          <p>The talented people behind WebCultivate</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-intro">
            <h2>A Team of Passionate Professionals</h2>
            <p>
              Our diverse team brings together expertise in design, development, marketing, and 
              strategy to deliver exceptional digital solutions. We are united by our passion for 
              innovation and commitment to client success.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <div className="member-avatar">{member.image}</div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                  <div className="social-links">
                    <a href={member.social.linkedin} aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={member.social.twitter} aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={member.social.email} aria-label="Email">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section join-team">
        <div className="container">
          <div className="join-content">
            <h2>Join Our Growing Team</h2>
            <p>
              We are always looking for talented individuals to join our team. If you are 
              passionate about web development and design, we would love to hear from you!
            </p>
            <a href="/contact" className="btn btn-primary">View Open Positions</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
