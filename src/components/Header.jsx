import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assetUrl } from '../utils/assetUrl';
import './css/header.css';

const Header = () => {
  const [menuClassName, setMenuClassName] = useState("navigation closed");

  return (
    <header>
      <section className="container">
      <section className="header">
        <div>
          <h1>
            <Link to="/">Eirin Gonzales</Link>
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
              <Link to="/" className="relative">
                Services
              </Link>
            </li>
            <li>
              <a href={assetUrl('assets/eiringonzales_resume.pdf')}>
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
              <Link to="/contact" className="relative">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </section>
    </header>
  );
}

export default Header;
