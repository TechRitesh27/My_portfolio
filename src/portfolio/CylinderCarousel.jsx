import React from "react";
import "./CylinderCarousel.css";

const projects = [
  { title: "Billing Software", desc: "The project is developed during the internship at Technogrowth to enhance my skills in full stack web development", view:"https://www.linkedin.com/posts/ritesh-ukade-8212092aa_java-springboot-reactjs-activity-7356950825958600704-Pmma?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEps-VkBvYlcsAfpQTuo1bvv-Fefquopv4g" },
  { title: "ASCII Student Community Platform", desc: "A role-based ASCII Association platform with authentication, profile actions, and centralized record management using React, Spring Boot, MySQL, and API testing with Postman", view:"https://asciicomp.vercel.app/" },
  { title: "Integrated Hotel Automation System", desc: "A Client based project developed using Spring Boot , React and MySQL for increasing the efficiency of hotels and reducing the cost ", view:"https://tinyurl.com/5y2t6xza" },
  { title: "Portfolio Site", desc: "The site is used to showcase the projects and development with skills" },
  { title: "EMI Calculator using AI", desc: "The basic EMI calculator developed for internship and exploring the andriod developemnt using Java", view:"https://www.linkedin.com/posts/ritesh-ukade-8212092aa_androiddevelopment-java-myfirstapp-activity-7262099675351003136-5j_t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEps-VkBvYlcsAfpQTuo1bvv-Fefquopv4g" },
];

const CylinderCarousel = () => {
  const angle = 360 / projects.length;

  return (
    <div className="carousel-section" id="projects">
      <h1 className="carousel-title">PROJECTS</h1>
      <div className="cylinder-container">
        <div className="cylinder">
          {projects.map((project, i) => {
            const rotate = `rotateY(${i * angle}deg) translateZ(300px)`;
            return (
              <div key={i} className="card" style={{ transform: rotate }}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                {project.view && (
                  <a  href={project.view} target="_blank" rel="noopener noreferrer" className="view-link">
                    View Project
                    </a> 
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CylinderCarousel;
