import React, { useState, useEffect } from 'react';
import * as typeformEmbed from '@typeform/embed';
import Fade from 'react-reveal/Fade';
import './css/contact.css';

const Contact = () => {
  const [formElement, setFormElement] = useState(null);

  useEffect(() => {
    if (formElement) {
      typeformEmbed.makeWidget(
        formElement,
        'https://eiringonzales1.typeform.com/to/Aw293z'
      );
    }
  }, [formElement]);

  return (
    <main className="wide-container">
      <section className="page-title">
        <h2>Contact</h2>
      </section>
      <section className="contact-page">
        <Fade>
          <section className="form">
            <div
              ref={(el) => setFormElement(el)}
              style={{ width: "100%", height: "600px" }}
            />
          </section>
        </Fade>

        <aside className="about">
          <div>
            <img
              src="https://theproactivedev.github.io/eiringonzales/assets/eiringonzales.jpg"
              alt="Eirin Gonzales"
            />
          </div>
          <div>
            <p>
              Hi! I'm <strong>Eirin Gonzales</strong>. I'm a Front End Engineer. I've been working remotely since 2018. I've worked with different teams from different countries.
            </p>
            <p>Drop me a message if you need a website for your business or if you're looking for a front end engineer to join your dev team.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Contact;