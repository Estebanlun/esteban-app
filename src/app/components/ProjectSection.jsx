"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio WebSite",
    description: "React website",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/Estebanlun/estebanluna-app",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://youtu.be/uCF3G5U7ZxQ",
  },
  {
    id: 2,
    title: "Dev-Sky",
    description:
      "SPA (Single Page Application) on sale of real flights. Developed with ReactJS on the Front-end, with NodeJS and Express on the Back-end and with a non-SQL Firebase database. In it, I mainly worked on the Front-end. We use Sass and other tools to style it. This project helped me a lot to learn to work as a team. It enriched my communication, and helped me reaffirm my technical knowledge.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Grupo2PF/Proyecto-Final",
    previewUrl: "https://dev-sky.vercel.app/",
  },
  {
    id: 3,
    title: "Countries Project",
    description:
      "SPA (Single Page Application) about countries. Developed with ReactJS, Redux on the Front-end, with NodeJS, Express and Sequalize on the Back-end. And for the database use PostgresSQL. This project was a real challenge, I spent hours and hours looking for solutions to all the problems that arose. I did it alone, something that gave me confidence and allowed me to consolidate my technical knowledge and everything I learned during my course.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Estebanlun/PI-Estebanlun",
    previewUrl: "https://www.youtube.com/watch?v=3FAH4ZKn-Kw&t=21s",
  },
  {
    id: 4,
    title: "NextJs Portfolio WebSite",
    description:
      "Updated portfolio page, made with NextJs, Tailwind and deployed with Firebase.",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Estebanlun/esteban-app",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
