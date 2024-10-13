import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "POC for Mainframe Modernization",
      description:
        "Developed a POC using React (frontend) and Python (backend) to modernize data extraction tasks from mainframes.",
      image: `${process.env.PUBLIC_URL}/mainframe.jpg`, // Replace with actual image path
      // Replace with the actual project link
    },
    {
      title: "Tumor Detection (Deep Learning)",
      description: "Classified types of tumors using the CRNN model.",
      image: `${process.env.PUBLIC_URL}/brain.jpg`, // Replace with actual image path
    },
    {
      title: "Aqua-bot (Data Science)",
      description:
        "Managed feeding systems for aquaculture using an AI-bot to guide farmers.",
      image: `${process.env.PUBLIC_URL}/bot.jpg`,
    },
    {
      title: "Temperature Control in Industrial Autoclave (Data Science)",
      description:
        "Developed a model to predict temperature using sensor data to automate the shutdown of an autoclave.",
      image: `${process.env.PUBLIC_URL}/temp.jpg`,
    },
    {
      title: "Estimation of Dialysis (Machine Learning)",
      description:
        "Classified patients for dialysis initiation using machine learning techniques.",
      image: "path/to/your/dialysis-estimation-image.jpg",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
