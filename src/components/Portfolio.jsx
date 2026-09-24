import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { assetUrl } from '../utils/assetUrl';
import './css/portfolio.css';

const backend_proj = [
  {
    image: "assets/portfolio/votingapp.png",
    source: "http://eg-fcc-votingapp.herokuapp.com/",
    title: "Voting App"
  },
  {
    image: "assets/portfolio/restoapp.png",
    source: "https://eg-fcc-resto.herokuapp.com/",
    title: "Resto Coordination App"
  },
  // {
  //   image: "assets/portfolio/fccstocks.png",
  //   source: "https://fcc-stocks.herokuapp.com/",
  //   title: "Watch Stocks"
  // },
  {
    image: "assets/portfolio/sharebook.png",
    source: "https://eg-fcc-shareabook.herokuapp.com/",
    title: "Share Books"
  },
  {
    image: "assets/portfolio/pinterestclone.png",
    source: "https://eg-fcc-pinterest.herokuapp.com/",
    title: "Pinterest Clone"
  }
];

const frontend_proj = [
  // {
  // 	image: "assets/portfolio/tribute.png",
  // 	source: "https://codepen.io/theproactivedev/full/gmvQWb/",
  // 	title: "Tribute Page"
  // },
  {
    image: "assets/portfolio/portfolio.png",
    source: "https://codepen.io/theproactivedev/full/rydKzO/",
    title: "Website Built Using Bootstrap"
  },
  {
    image: "assets/portfolio/quote.png",
    source: "https://codepen.io/theproactivedev/full/xqmWXe/",
    title: "Random Quote Machine"
  },
  // {
  // 	image: "assets/portfolio/weather.png",
  // 	source: "https://codepen.io/theproactivedev/full/GWLjpp/",
  // 	title: "Show the Local Weather"
  // },
  // {
  //   image: "assets/portfolio/wikipedia.png",
  //   source: "https://codepen.io/theproactivedev/full/ZKEMOz/",
  //   title: "Wikipedia Viewer"
  // },
  {
    image: "assets/portfolio/twitch.png",
    source: "https://codepen.io/theproactivedev/full/LyGVyW/",
    title: "Using Twitch.tv JSON API"
  },
  {
    image: "assets/portfolio/calculator.png",
    source: "https://codepen.io/theproactivedev/full/oWZmjE/",
    title: "JavaScript Calculator"
  },
  {
    image: "assets/portfolio/pomodoro.png",
    source: "https://codepen.io/theproactivedev/full/Pmjrqv/",
    title: "Customizable Pomodoro Timer"
  },
  {
    image: "assets/portfolio/tictactoe.png",
    source: "https://codepen.io/theproactivedev/full/rmGmwX/",
    title: "Tic Tac Toe Game"
  },
  {
    image: "assets/portfolio/simon.png",
    source: "https://codepen.io/theproactivedev/full/KmZwdV/",
    title: "Simon Game"
  }
];

const Portfolio = () => {
  const [isHidden, setMlabWarningHidden] = useState(false)
  const backendProjects = backend_proj.map((proj, index) => {
    const imgSrc = assetUrl(proj.image);
    return (
      <li className="skills-module" key={`back-skills-module-${index}`}>
        <div className="project-piece">
          <img src={imgSrc} alt="" />
          <div className="overlay">
            <a
              className="project-title"
              href={proj.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{proj.title}</p>
            </a>
            <button className="close-overlay hidden">
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </li>
    );
  })

  const frontEndProjects = frontend_proj.map((proj, index) => {
    const imgSrc = assetUrl(proj.image);
    return (
      <li className="skills-module" key={`front-skills-module-${index}`}>
        <div className="project-piece">
          <img src={imgSrc} alt="" />
          <div className="overlay">
            <a className="project-title" href={proj.source} target="_blank" rel="noopener noreferrer"><p>{proj.title}</p></a>
            <button className="close-overlay hidden"><i className="fa fa-times" aria-hidden="true"></i></button>
          </div>
        </div>
      </li>
    );
  })

  return(
    <main>
      <section className="portfolio wide-container">
        <section className="page-title">
          <h2>Portfolio</h2>
        </section>

        <section className={`alert-msg ${!isHidden ? '_show_' : '_hidden_'}`}>
          <p>These web applications' database are powered by mLab. And since mLab is now part of MongoDB, Inc., these projects might not work anymore. And I'm still in the process of migrating these projects to MongoDB Atlas.</p>
          <span onClick={() => setMlabWarningHidden(true)}>&times;</span>
        </section>

        <section className="dev-projects">
          <div>
            <div className="page-title">
              <Fade>
                <h3>Legacy Back End Projects</h3>
              </Fade>
            </div>
            <ul className="projects group">{backendProjects}</ul>
          </div>
          <div>
            <div className="page-title">
              <Fade>
                <h3>Legacy Front End Projects</h3>
              </Fade>
            </div>
            <ul className="projects group">{frontEndProjects}</ul>

          </div>
        </section>
      </section>

      <section className="contact wide-container">
        <div>
          <p>Do you want a <strong>Full Stack JavaScript Developer</strong> who's willing to learn new things and solve problems?</p>
          <p>Do you want someone in your team who will help <strong>build the next big product of your growing business</strong>?</p>
          <p>Let's talk!</p>
          <Link role="button" title="Contact Eirin Gonzales" to="/contact" className="btn-outlined">Contact me here</Link>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;