import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faGitAlt,
  faJava,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faUsers, faCogs } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Bootstrap', icon: faBootstrap },
  { name: 'Git', icon: faGitAlt },
  { name: 'Java', icon: faJava },
  { name: 'Spring & Spring Boot', icon: faCogs }, // fallback
  { name: 'Github', icon: faGithub },
  { name: 'Postman API Testing', icon: faCogs }, // fallback
  { name: 'MySQL', icon: faDatabase },
  { name: 'Team Management', icon: faUsers },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h1>SKILLS</h1>
        <h2>Tools & Technologies I'm Using</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <FontAwesomeIcon
              icon={skill.icon}
              size="3x"
              className="skill-icon"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
