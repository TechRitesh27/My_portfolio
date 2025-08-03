import React, { useEffect, useRef, useCallback } from "react";
import Typed from "typed.js";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./HeroSection.css";

const HeroSection = () => {
  const typedRef = useRef(null);
  const elRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    typedRef.current = new Typed(elRef.current, {
      strings: ["Computer Engineer", "FullStack Developer", "Tech Enthusiast"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typedRef.current?.destroy();
  }, []);

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-container">
      {/* 💫 Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "#0a0a0a" },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            size: { value: 9 },
            move: { enable: true, speed: 0.4 },
            opacity: { value: 1 },
            shape: { type: "circle" },
          },
        }}
      />

      <div className="background-glow"></div>

      <div className="hero-left">
        <div className="hero-logo">
          <img src="/favicon.png" alt="Ritesh's Logo" />
        </div>
        <div className="hero-intro">
          <h5>Hello, I am</h5>
          <h1 className="gradient-text">Ritesh Ukade</h1>
          <h4>
            <span ref={elRef}></span>
          </h4>
          <p className="hero-desc">
            Passionate about building high-performance web apps using Spring
            Boot and React. Let’s innovate together.
          </p>
        </div>

        <div className="hero-buttons">
          <button onClick={() => handleScroll("projects")}>
            View Projects
          </button>
          <button onClick={() => handleScroll("experience")}>Experience</button>
          <a href="/resume.pdf" download className="resume-link">
            <button>Download Resume</button>
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/TechRitesh27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="GitHub profile" />
          </a>
          <a
            href="https://linkedin.com/in/ritesh-ukade-8212092aa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn profile" />
          </a>
          <a
            href="https://instagram.com/rit_ukade27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram profile" />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="photo-placeholder">
          <img src="/Ritesh_profile.png" alt="Ritesh's profile" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
