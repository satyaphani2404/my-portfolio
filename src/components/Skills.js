import React from "react";
import "./styles/Skills.css";

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-category">
        <h3>Programming Languages:</h3>
        <ul>
          <li>Python</li>
          <li>DotNet</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Data Analysis:</h3>
        <ul>
          <li>MS Excel</li>
          <li>Time Series Analysis</li>
          <li>Data Cleaning</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Machine Learning:</h3>
        <ul>
          <li>Deep Learning</li>
          <li>Machine Learning Model Creation</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Data Visualization:</h3>
        <ul>
          <li>Power BI</li>
          <li>R&D for Data Visualization</li>
          <li>Key Performance Indicator Identification</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Database Management:</h3>
        <ul>
          <li>Oracle SQL Developer</li>
          <li>Snowflake</li>
          <li>MySQL</li>
          <li>SQL on GCP</li>
        </ul>
      </div>

      {/* <div className="skills-category">
        <h3>Automation:</h3>
        <ul>
          <li>RPA (Robotic Process Automation) for Mainframe Tasks</li>
        </ul>
      </div> */}

      {/* <div className="skills-category">
        <h3>Frontend Development:</h3>
        <ul>
          <li>React (POC development)</li>
        </ul>
      </div> */}
      <div className="skills-category">
        <h3>Cloud Platforms:</h3>
        <ul>
          <li>Google Cloud Platform (GCP)</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Tools:</h3>
        <ul>
          <li>Jupyter Notebook</li>
          <li>GitHub</li>
          <li>Power BI</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
