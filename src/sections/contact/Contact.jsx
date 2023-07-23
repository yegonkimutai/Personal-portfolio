import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { PiTelegramLogoLight } from 'react-icons/pi';
import { BsWhatsapp } from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ggkq5k', 'template_97zq07y', form.current, 'me8GcXWDvIzus9lE8');
    e.target.reset();
  };

  return (
    <section id="contact" className='cont-main'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className="cont-icon" />
            <h4>Email</h4>
            <a href="mailto:yegonkimutai.99@gmail.com" target="_blank" rel="noreferrer">Send a message ✍️</a>
          </article>
          <article className="contact-option">
            <PiTelegramLogoLight className="cont-icon" />
            <h4>Telegram</h4>
            <a href="https://api.telegram.com/send?phone+254798003353" target="_blank" rel="noreferrer">Send a message ✍️</a>
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
