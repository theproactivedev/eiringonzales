import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { assetUrl } from '../utils/assetUrl';
import './css/home.css';

const Home = () => {
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
            <Link to="/contact" className="btn-outlined yes-btn">
              Let&apos;s chat
            </Link>
          </section>
        </section>
      </section>
      <section className="introduction wide-container">
        <div className="skills-module">
          <div className="title">
            <h2>Looking for a <span className="text-pink">full stack JavaScript developer</span>?</h2>
            <p>Someone who turns UI designs into responsive, production-ready applications — front end, back end, and database — without needing constant oversight.</p>
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
          <p>Hi,</p>
          <p>
            <span className="bold">I&#39;m Eirin Gonzales.</span>
          </p>
          <p>
            I'm a <strong>Full Stack JavaScript Developer</strong>. I use React, Redux, Redux Saga and React Router. I also use CSS frameworks such as Bootstrap, Material UI and Chakra UI.
          </p>
          <p>
            I do my best to writing clean, maintainable code so your website runs fast and scales effortlessly. I also prioritize readability, ensuring future developers can easily jump in and add new features.
          </p>
          <p>
            On top of these web technologies, I'm prepared to research, learn new things
            and plan solutions that best fit your needs.
          </p>
        </div>
      </section>

      <section className="certificates wide-container">
        <Fade direction="up">
          <div className="page-title">
            <Fade direction="up">
              <h3><i className="fa-solid fa-award"></i>&nbsp;Free Code Camp Certificates</h3>
            </Fade>
          </div>
        </Fade>
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
          <p>See my previous work experiences</p>
          <p>
            <a href="https://www.linkedin.com/in/eirin-gonzales-5951aa9b/details/experience/" className="clickHere btn-outlined" target="_blank" rel="noopener noreferrer">
              Click here
            </a>
          </p>
        </div>
      </section>

      <section className="contact wide-container">
        <div>
          <Fade direction="up">
            <div className="page-title">
              <Fade direction="up">
                <h3><i className="fa-solid fa-hammer"></i>&nbsp;&nbsp;Let's build something worth shipping.</h3>
              </Fade>
            </div>
          </Fade> 
          <div className="contact-button">
            <Link
              role="button"
              title="Contact Eirin Gonzales"
              to="/contact"
              className="btn-outlined"
            >
              Contact me here
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;