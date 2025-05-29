import { WobbleCard } from "@/components/ui/wobble-card";
import React from "react";

const projectsList = [
  { id: 1, title: "Project 1", description: "Lorem Ipsum" },
  { id: 2, title: "Project 2", description: "Lorem Ipsum" },
  { id: 3, title: "Project 3", description: "Lorem Ipsum" },
  { id: 4, title: "Project 4", description: "Lorem Ipsum" },
  { id: 5, title: "Project 5", description: "Lorem Ipsum" },
  { id: 6, title: "Project 6", description: "Lorem Ipsum" },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      {projectsList.map((project) => (
        <WobbleCard key={project.id}>
          <h1 className="text-xl font-bold mb-2">{project.title}</h1>
          <p>{project.description}</p>
        </WobbleCard>
      ))}
    </div>
  );
};

export default Projects;
