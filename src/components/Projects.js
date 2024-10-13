import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "POC for Mainframe Modernization",
      description:
        "Developed a POC using React (frontend) and Python (backend) to modernize data extraction tasks from mainframes.",
      image: `${process.env.PUBLIC_URL}/mainframe.jpg`,
    },
    {
      title: "Tumor Detection (Deep Learning)",
      description: "Classified types of tumors using the CRNN model.",
      image: `${process.env.PUBLIC_URL}/brain.jpg`,
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

  // State to track the current card being displayed
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    // Set interval to automatically rotate the cards every 3 seconds
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [projects.length]);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        <ProjectCard
          key={projects[currentProjectIndex].title}
          project={projects[currentProjectIndex]}
        />
      </div>
    </section>
  );
}

export default Projects;
