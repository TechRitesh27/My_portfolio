import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: '/icons/html.png' },
  { name: 'CSS3', icon: '/icons/css.png' },
  { name: 'JavaScript', icon: '/icons/javascript.png' },
  { name: 'React', icon: '/icons/react.png' },
  { name: 'Bootstrap', icon: '/icons/bootstrap.jfif' },
  { name: 'Git', icon: '/icons/git.png' },
  { name: 'Java', icon: '/icons/java.png' },
  { name: 'Spring & Spring Boot', icon: '/icons/spring.png' },
  { name: 'Github', icon: '/icons/github.png' },
  { name: 'Postman API Testing', icon: '/icons/postman.png' },
  { name: 'MySQL', icon: '/icons/mysql.png' },
  { name: 'Team Management', icon: '/icons/teamCollaboration.jfif' },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h1>SKILLS</h1>
        <h2>Tools & Technologies I’m Using</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
