import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './css/home.css';

const Home = () => {
  return (
    <main>
      <section className="introduction wide-container">
        <div className="skills-module">
          <h2>Looking for a Front End Engineer?</h2>
          <p>Do you need a website but don't have the time to build it yourself?</p>
          <p>Are you looking for someone you can confidently delegate the work to while you focus on growing your business and handling higher-priority tasks?</p>
          <p>Or perhaps you&apos;re searching for a <strong>Front End Engineer</strong> who can transform UI designs into responsive, user-friendly web applications using reusable components and clean, high-quality code—delivering a seamless experience across all devices.</p>
          <p>You need someone who communicates effectively, collaborates closely with you and your team, and can adapt to a wide range of development tasks.</p>
          <p>
            If that sounds like what you're looking for, <strong>you&#39;re in the right place!</strong>
          </p>
        </div>
      </section>

      <section className="aboutMe">
        <div>
          <p>Hi,</p>
          <p>
            <span className="bold">I&#39;m Eirin Gonzales.</span>
          </p>
          <p>
            I'm a <strong>Front End Engineer</strong>. I use React, Redux, Redux Saga and React Router. I also use CSS frameworks such as Bootstrap, Material UI and Chakra UI.
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
        <Fade top>
          <div className="page-title">
            <Fade top>
              <h3><i class="fa-solid fa-award"></i>&nbsp;Free Code Camp Certificates</h3>
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
                src="https://theproactivedev.github.io/eiringonzales/assets/portfolio/freecodecamp-certificate.png"
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
                src="https://theproactivedev.github.io/eiringonzales/assets/portfolio/back_end_dev.jpg"
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
          <Fade top>
            <div className="page-title">
              <Fade top>
                <h3><i class="fa-solid fa-hammer"></i>&nbsp;&nbsp;Let's build something worth shipping.</h3>
              </Fade>
            </div>
          </Fade> 
          <div className="contact-button">
            <Link
              role="button"
              title="Contact Eirin Gonzales"
              to="/eiringonzales/contact"
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