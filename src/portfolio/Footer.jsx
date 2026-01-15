import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Ritesh's Portfolio</h3>
        <p>• Crafted with React & Spring Boot</p>
        <p>• Designed for Excellence</p>
        <p>• Beleving in Faith</p>
        <p>• Passion for Technology</p>
        <p>• Committed to Learning</p>
        <p>• Driven by Innovation</p>

        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://github.com/TechRitesh27" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ritesh-ukade-8212092aa/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> 
          </a>
          <a href="mailto:riteshukade27@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="footer-logo">
        <img src="/favicon.png" alt="Ritesh's Logo" className="footer-logo" />
        {/* <h2>Ritesh Ukade</h2> */}
        </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ritesh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
