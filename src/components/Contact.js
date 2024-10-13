import React from "react";
import "./styles/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
