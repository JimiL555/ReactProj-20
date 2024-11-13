// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'image-url-1.jpg',
      deployedLink: 'https://live-site-1.com',
      repoLink: 'https://github.com/JimiL555/project-1',
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;