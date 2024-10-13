import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/Projects.css";

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
    image: `${process.env.PUBLIC_URL}/dialysis.jpg`,
  },
];

function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Handle swipe or click to the left or right
  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "right") {
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-carousel">
        {/* Left Button for Desktop Users */}
        <button
          className="nav-button left"
          onClick={() => handleSwipe("right")}
        >
          ◀
        </button>

        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={currentProjectIndex}
            className="project-card"
            initial={{ opacity: 0, x: 300 }} // Start off-screen
            animate={{ opacity: 1, x: 0 }} // Animate in from the right
            exit={{ opacity: 0, x: -300 }} // Exit to the left
            drag="x" // Enable drag/swipe
            dragConstraints={{ left: 0, right: 0 }} // Disable dragging outside bounds
            dragElastic={0.2} // Adds resistance to dragging
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x * velocity.x;

              if (swipe < -1000) {
                handleSwipe("left");
              } else if (swipe > 1000) {
                handleSwipe("right");
              }
            }}
          >
            <img src={projects[currentProjectIndex].image} alt="project" />
            <h3>{projects[currentProjectIndex].title}</h3>
            <p>{projects[currentProjectIndex].description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Right Button for Desktop Users */}
        <button
          className="nav-button right"
          onClick={() => handleSwipe("left")}
        >
          ▶
        </button>
      </div>
    </section>
  );
}

export default Projects;
