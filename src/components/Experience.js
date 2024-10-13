import React from "react";
import "./styles/Experience.css";

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <ul>
        <li>
          <h3>Tata Consultancy Services (TCS) – Hyderabad</h3>
          <h4>System Engineer (Present)</h4>
          <p>
            Developed a Proof of Concept (POC) using React (frontend) and Python
            (backend) for modernizing mainframe data extraction tasks. Presented
            the POC to clients and received approval for full tool development.
          </p>
          <p>
            Worked on building a data flow pipeline for structuring and loading
            mainframe flat file data into SQL on GCP. Implemented Python scripts
            for data cleaning and automating regular tasks using RPA tools and
            mainframe technologies.
          </p>
        </li>
        <li>
          <h4>Assistant Systems Engineer</h4>
          <p>
            Led database connections and handled technical issues, primarily
            working as an Oracle developer.
          </p>
        </li>
        <li>
          <h4>Assistant Systems Engineer Trainee</h4>
          <p>
            Joined as a trainee and gained experience working with Oracle
            databases and handling tasks in a fast-paced environment.
          </p>
        </li>
        <li>
          <h3>Datoxno – Hyderabad</h3>
          <h4>Associate Data Scientist (Intern)</h4>
          <p>
            Conducted R&D to create datasets and developed visualizations for
            business insights. Identified key performance indicators (KPIs) and
            correlations to build machine learning models.
          </p>
          <p>
            Worked on projects such as:
            <ul>
              <li>
                “Aqua-bot” to manage feeding systems and AI-bots for
                aquaculture.
              </li>
              <li>
                “Predict The Temperature Control in Industrial Autoclave” for
                predicting autoclave shutdown temperatures.
              </li>
            </ul>
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Experience;
