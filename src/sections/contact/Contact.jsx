import './contact.css';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';

import { BsWhatsapp } from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nltl7gm', 'template_fsxpxkv', form.current, 'DMbJd6q03iyKE3cE7')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="cont-main">
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className="cont-icon" />
            <h4>Email</h4>
            <a href="mailto:yegonkimutai.99@gmail.com" target="_blank" rel="noreferrer">Send a message ✍️</a>
          </article>
          <article className="contact-option">
            <AiOutlineLinkedin className="cont-icon" />
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/brian-yegon-kim05/" target="_blank" rel="noreferrer">Send a message ✍️</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="cont-icon" />
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone+254798003353" target="_blank" rel="noreferrer">Send a message ✍️</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="name" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" rows="10" />
          <button type="submit" className="btn primary">Send Message 📫 </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
