// src/pages/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <form className="contact-form">
        <label>
          Name
          <input type="text" placeholder="Your Name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Your Email" />
        </label>
        <label>
          Message
          <textarea placeholder="Your Message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;