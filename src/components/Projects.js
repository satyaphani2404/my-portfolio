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
  const [direction, setDirection] = useState(0);

  // Helper function to determine swipe direction
  const handleSwipe = (newDirection) => {
    if (newDirection === "left") {
      setDirection(-1);
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    } else if (newDirection === "right") {
      setDirection(1);
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-carousel">
        {/* Left Button */}
        <button
          className="nav-button left"
          onClick={() => handleSwipe("right")}
        >
          ◀
        </button>

        {/* Card */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentProjectIndex}
            className="project-card"
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? -300 : 300 }} // Animates in from the left or right depending on direction
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? 300 : -300 }} // Animates out to the opposite side
            transition={{ duration: 0.6 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
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

        {/* Right Button */}
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
