import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './css/header.css';

const Header = () => {
  const location = useLocation();
  const [menuClassName, setMenuClassName] = useState("navigation closed");
  const isHome = location.pathname === "/eiringonzales" || location.pathname === "/eiringonzales/";

  const headerContent = (
    <section className="container">
      <section className="header">
        <div>
          <h1>
            <Link to="/eiringonzales">Eirin Gonzales</Link>
          </h1>
          <span
            className="menu"
            onClick={() => {
              setMenuClassName("navigation open");
            }}
          >
            Menu <i className="fa fa-bars"></i>
          </span>
        </div>

        <nav className={menuClassName}>
          <span
            className="closeMenu"
            onClick={() => {
              setMenuClassName("navigation closed");
            }}
          >
            <p>&times;</p>
          </span>
          <ul role="navigation">
            <li
              onClick={() => {
                setMenuClassName("navigation closed");
              }}
            >
              <Link to="/eiringonzales" className="relative">
                Services
              </Link>
            </li>
            <li>
              <a href="https://theproactivedev.github.io/eiringonzales/assets/eiringonzales_resume.pdf">
                Resume
              </a>
            </li>
            <li
              onClick={() => {
                setMenuClassName("navigation closed");
              }}
            >
              <a href="https://www.linkedin.com/in/eirin-gonzales-5951aa9b/details/experience/" target="_blank" rel="noopener noreferrer" className="relative">
                Experiences
              </a>
            </li>
            <li>
              <a
                href="https://theproactivedeveloper.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li
              onClick={() => {
                setMenuClassName("navigation closed");
              }}
            >
              <Link to="/eiringonzales/contact" className="relative">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {isHome && (
          <section className="welcome-message group">
            <p className="subject">
              <span className="const">const</span> developer = <span className="developer-name">"Eirin Gonzales"</span>; <span className="blinking"> </span>
            </p>
            <p className="sub">&#47;&#47; front end engineer, working remotely</p>
            <p className="sub">&#47;&#47; does her best to deliver real results on time</p>
            <p className="sub">&#47;&#47; collaborates well with other people</p>
            <Link to="/eiringonzales/contact" className="btn-outlined yes-btn">
              Let&apos;s chat
            </Link>
          </section>
        )}
      </section>
    </section>
  );

  return (
    <header>
      {isHome &&
        <section className="bgimage home">
          <section className="white-overlay">
            {headerContent}
          </section>
        </section>
      }
      {!isHome &&
        <>{headerContent}</>
      }
    </header>
  );
}

export default Header;
