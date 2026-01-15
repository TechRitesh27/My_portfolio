import React, { useState } from "react";
import "./Experience.css";

const allProjects = [
  {
    title: "Java Fullstack Intern",
    type: "coded",
    company: "Logipool Infotech Pvt. Ltd., Pune",
    description: "Developed a full-stack application using Java, Spring Boot, and React.",
  },
  {
    title: "Java Developer Intern",
    type: "coded",
    company: "MotionCut Pvt. Ltd.",
    description: "Worked on small projects using Java.",
  },
  {
    title: "Android Developer Intern",
    type: "coded",
    company: "Lending Buddha Pvt. Ltd.",
    description: "Developed an EMI Calculator Android application.",
  },
  {
    title: "Vice President in ASCII Association",
    type: "other",
    description: "Gained leadership, team management, and event organization skills during my tenure as Vice President in ASCII Association.",
  },
];

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.type === activeFilter);

  return (
    <section className="experience-section" id="experience">
      <h1>EXPERIENCE</h1>

      <div className="filter-buttons">
        {["all", "coded", "other"].map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="experience-grid">
        {filteredProjects.map((project, index) => (
          <div className="experience-card" key={index}>
            <h2>{project.title}</h2>
            {project.company && <h6>{project.company}</h6>}
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <p className="experience-footer">And many more to come!</p>
    </section>
  );
};

export default Experience;
