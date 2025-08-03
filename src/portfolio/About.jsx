import React from 'react';
import './About.css';

const serviceData = [
  { title: 'DESIGN', description: 'I can design the site based on your needs and suggestions.' },
  { title: 'DEVELOPMENT', description: 'I can develop the site using modern technologies and frameworks.' },
  { title: 'MAINTENANCE', description: 'I can maintain the site and ensure it runs smoothly.' },
];

function About() {
  return (
    <div className="about" id='about'>
      <h1 className="section-title">ABOUT ME</h1>

      <div className="about-content">
        <p>
          Hello! I'm Ritesh Ukade, a passionate and driven Computer Engineering student with a deep interest in software development and real-world problem solving...
        </p>
        <p>
          I thrive in collaborative environments and have a knack for understanding user needs, which helps me create intuitive and efficient software solutions...
        </p>
        <p>
          I’ve actively contributed to technical events, team projects, and internships that have sharpened my skills in backend development, UI/UX, and project planning...
        </p>
      </div>

      <div className="services-container">
        {serviceData.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
