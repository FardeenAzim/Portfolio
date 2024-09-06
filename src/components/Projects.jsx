import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectInfo } from '../Data';


const Projects = () => {
  return (
    <div id="Projects" className="justify-center mx-18 px-20 mt-20">
      <div>
        <h1 className="text-4xl font-bold mb-20 text-center text-violet-400">Projects</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {ProjectInfo.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
