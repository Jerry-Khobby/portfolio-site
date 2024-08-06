import React from 'react';
import projects from '../../data/projects';
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineLiveTv } from "react-icons/md";
import { Tooltip } from 'react-tooltip';

const ProjectsComponent = () => {
  return (
    <div className='h-full px-4 sm:px-4 lg:px-48 md:36 flex flex-col items-start sm:items-start sm:justify-start pb-10 sm:mt-14 md:mt-10 lg:mt-14 mt-14'>
      <div>
        <h4 style={{fontFamily: 'Fira Code'}} className='text-2xl text-white font-bold sm:text-2xl md:text-4xl lg:text-5xl'>Projects</h4>
      </div>
      <div>
        {projects.map((project, index) => (
          <div key={index} className='mt-5'>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h5 className='text-xl text-white font-normal list-item hover:underline cursor-pointer' style={{fontFamily: 'Fira Code'}}>
                {project.name}
              </h5>
            </a>
            <p className='text-sm text-gray-400 pt-5' style={{fontFamily: 'Fira Code'}}>{project.description}</p>
            <div className='flex flex-row items-start justify-start mt-4 space-x-4'>
              <a href={project.githubCode} target="_blank" rel="noopener noreferrer" data-tooltip-id={`github-${index}`}>
                <div className='p-2 bg-gray-800 rounded-full hover:bg-gray-700 cursor-pointer'>
                  <IoLogoGithub className='text-white text-2xl' />
                </div>
              </a>
              <Tooltip id={`github-${index}`} content="GitHub Code" />
              <a href={project.link} target="_blank" rel="noopener noreferrer" data-tooltip-id={`live-${index}`}>
                <div className='p-2 bg-gray-800 rounded-full hover:bg-gray-700 cursor-pointer'>
                  <MdOutlineLiveTv className='text-white text-2xl' />
                </div>
              </a>
              <Tooltip id={`live-${index}`} content="Live Project" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsComponent;
