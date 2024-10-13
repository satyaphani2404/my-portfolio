import React from "react";
import "./styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>P Satya Phani</h1>
        <p>
          A dedicated professional in data science and software development with
          expertise in building data pipelines and machine learning models.
          Currently working as a System Engineer at Tata Consultancy Services,
          focusing on modernizing data extraction tasks and optimizing
          workflows. Passionate about turning complex problems into actionable
          insights, thriving on continuous learning and innovative solutions.
        </p>
        <a href="tel:+918106854418">
          <button>Hire Me</button>
        </a>
      </div>
      <img src={`${process.env.PUBLIC_URL}/mypic.jpeg`} alt="Your Profile" />
    </section>
  );
}

export default Hero;
