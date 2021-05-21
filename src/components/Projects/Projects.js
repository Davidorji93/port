import React from 'react';

import { ProjectCard } from './../ProjectCard/ProjectCard';

import './project.css';

export const Projects = ({ projects }) => {
    return (
        <div className="projects-container">
            <div className="industry-skill-container">
                {
                    projects.projectList.map(project => <ProjectCard project={project} />)
                }
            </div>
        </div>
    )
}