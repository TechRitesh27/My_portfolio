import React from "react";
import "./CylinderCarousel.css";

const projects = [
  { title: "Billing Software", desc: "Java + Spring Boot + Electron", view:"https://www.linkedin.com/posts/ritesh-ukade-8212092aa_java-springboot-reactjs-activity-7356950825958600704-Pmma?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEps-VkBvYlcsAfpQTuo1bvv-Fefquopv4g" },
  { title: "Hotel Automation", desc: "Final Year Project. This project is under construction... \nIt will updated soon here" },
  { title: "ASCII Website", desc: "ReactJS + Bootstrap", view:"https://www.linkedin.com/posts/ritesh-ukade-8212092aa_eventmanagement-digitalexperience-userengagement-activity-7341075617766903808-eN9z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEps-VkBvYlcsAfpQTuo1bvv-Fefquopv4g" },
  { title: "Portfolio Site", desc: "ReactJS" },
  { title: "EMI Calculator using AI", desc: "AI + Android Studio + Java", view:"https://www.linkedin.com/posts/ritesh-ukade-8212092aa_androiddevelopment-java-myfirstapp-activity-7262099675351003136-5j_t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEps-VkBvYlcsAfpQTuo1bvv-Fefquopv4g" },
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
