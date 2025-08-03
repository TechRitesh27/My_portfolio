import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_imlaj7h",       // 🔁 replace with your EmailJS service ID
        "template_ya9dg87",      // 🔁 replace with your EmailJS template ID
        form.current,
        "5quR9IjicvCojFotD"   // 🔁 replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send the message, please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="section-title">CONTACT</h2>
      <form className="form-card" ref={form} onSubmit={sendEmail}>
        <input name="name" type="text" placeholder="Enter your name*" required />
        <input name="email" type="email" placeholder="Enter your email*" required />
        <input name="phone" type="tel" placeholder="Phone number" />
        <textarea name="message" rows="5" placeholder="Your message*" required></textarea>
        <div className="form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
