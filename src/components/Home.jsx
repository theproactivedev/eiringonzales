import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { assetUrl } from '../utils/assetUrl';
import './css/home.css';

const Home = () => {
  const handleContactClick = (event) => {
    const contactSection = document.getElementById('contact');

    if (!contactSection) {
      return;
    }

    event.preventDefault();

    const prefersReducedMotion = typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    contactSection.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
    });
  };

  return (
    <main>
      <section className="bgimage home">
        <section className="white-overlay">
          <section className="welcome-message group">
            <p className="subject">
              <span className="const">const</span> developer = <span className="developer-name">"Eirin Gonzales"</span>; <span className="blinking"> </span>
            </p>
            <p className="sub">&#47;&#47; full stack JavaScript developer, working remotely</p>
            <p className="sub">&#47;&#47; does her best to deliver real results on time</p>
            <p className="sub">&#47;&#47; collaborates well with other people</p>
            
            <a href="#contact" className="btn-outlined yes-btn" onClick={handleContactClick}>
              Let&apos;s chat
            </a>
          </section>
        </section>
      </section>
      <section className="introduction wide-container">
        <div className="skills-module">
          <div className="title">
            <h2>Looking for a <span className="text-pink">full stack JavaScript developer</span>?</h2>
            <p className="text-muted">Someone who turns UI designs into responsive, production-ready applications <span className="text-black">— front end, back end, and database</span> — without needing constant oversight.</p>
          </div>
          <div className="value-list">
            <div className="value-item"><span className="mk">01</span><h3>Ships production UI</h3><p>Reusable React components, clean styles, fast load times, accessible.</p></div>
            <div className="value-item"><span className="mk">02</span><h3>Comfortable end to end</h3><p>MERN and Next.js projects built solo — front end, APIs, database schema, and deployment included.</p></div>
            <div className="value-item"><span className="mk">03</span><h3>Works across time zones</h3><p>8 years on distributed teams — collaborates closely with team members, available especially when needed.</p></div>
            <div className="value-item"><span className="mk">04</span><h3>Learns what the project needs</h3><p>Actively deepening back end skills, and uses AI tools deliberately to move faster without cutting corners.</p></div>
          </div>
        </div>
      </section>

      <section className="aboutMe">
        <div>
          <p className="text-pink">Hi,</p>
          <p>
            <span className="bold">I&#39;m Eirin Gonzales.</span>
          </p>
          <p>
            I'm a full stack JavaScript developer with 8 years of remote experience, currently strongest on the front end and actively growing into full stack work. I write clean, maintainable code so the things I build run fast, scale, and stay easy for the next developer to pick up.
          </p>
          <p>
            Outside of the core stack, I'm comfortable researching, learning and deciding what a project needs. And I've used AI tools like Claude, Copilot, and ChatGPT and MCP servers as part of my workflow since 2024, to move faster without losing ownership of the code.
          </p>
        </div>
      </section>

      <section className="certificates wide-container">
        <div className="page-title">
          <Fade>
            <h3><i className="fa-solid fa-award"></i>&nbsp;Free Code Camp Certificates</h3>
          </Fade>
        </div>
        <div className="certificate">
          <div className="skills-module">
            <a
              href="https://www.freecodecamp.org/certification/theproactivedev/legacy-front-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={assetUrl('assets/portfolio/freecodecamp-certificate.png')}
                alt="Free Code Camp Front End Certificate"
              />
            </a>
          </div>
          <div className="skills-module">
            <a
              href="https://www.freecodecamp.org/certification/theproactivedev/legacy-back-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={assetUrl('assets/portfolio/back_end_dev.jpg')}
                alt="Free Code Camp Back End Certificate"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="work-field">
          <p>Take a closer look at my previous work experiences and professional background on LinkedIn.</p>
          <p>
            <a href="https://www.linkedin.com/in/eirin-gonzales-5951aa9b/details/experience/" className="clickHere btn-outlined" target="_blank" rel="noopener noreferrer">
              See my work history
            </a>
          </p>
        </div>
      </section>

      <section className="contact wide-container" id="contact">
        <div>
          <div className="page-title">
            <Fade>
              <h3><i className="fa-solid fa-hammer"></i>&nbsp;&nbsp;Let's build something worth shipping.</h3>
            </Fade>
          </div>
          <div>
            <p className="text-muted">Tell me about the project — I'll reply within a day or two.</p>
            <p>Email me at <a href="mailto:eiringonzales@gmail.com" className="text-pink">eiringonzales@gmail.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;