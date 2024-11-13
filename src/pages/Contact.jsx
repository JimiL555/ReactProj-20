// src/pages/Contact.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and form submission logic
    if (!form.name || !form.email || !form.message) {
      toast.error('All fields are required!');
      return;
    }
    toast.success('Message sent!');
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange}></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;