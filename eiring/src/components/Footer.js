import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';

const Footer = () => {
  return (
    <footer className="wide-container">
      <div className="row">
        <div>
          <h4>Menu</h4>
          <p><a href="https://theproactivedev.github.io/eiringonzales/assets/eiringonzales_resume.pdf" target="_blank" rel="noopener noreferrer">See my Resume</a></p>
          {/* <p><Link to="/eiringonzales/portfolio">Look at my Portfolio</Link></p> */}
          <p><Link to="/eiringonzales/contact">Contact me here</Link></p>
          <p><a href="https://ph.linkedin.com/in/eirin-gonzales-5951aa9b" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn</a></p>
        </div>
        <div>
          <h4>Tech Tools Used Here</h4>
          <p>Front End: HTML, CSS, React</p>
          <p>Assets: Google Fonts, Unsplash.com, Font Awesome Icons, Typeform</p>
          <p>Hosting: GitHub Pages</p>
        </div>
        <div>
          <h4>Developer</h4>
          <p>Eirin Gonzales</p>
          <p>Check out <a href="https://www.freecodecamp.org/">Free Code Camp</a> if you want to start learning about web development.</p>
        </div>
      </div>
      <div className="footer-copy">&copy; {new Date().getFullYear()} Eirin Gonzales</div>
    </footer>
  );
}

export default Footer;