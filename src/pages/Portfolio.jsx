// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Group Project 2',
      image: '/src/assets/project1.png', // Ensure this path matches the actual location
      deployedLink: 'https://seismic-tracker-pro.onrender.com/search',
      repoLink: 'https://github.com/JimiL555/GRP2-Seismic-Tracker-Pro.git',
    },
    {
      title: 'A day in Phish History App',
      image: '/src/assets/project2.png', // Ensure this path matches the actual location
      deployedLink: 'https://jimil555.github.io/GRPJ-1-Phish-/',
      repoLink: 'https://github.com/JimiL555/GRPJ-1-Phish-.git',
    },
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