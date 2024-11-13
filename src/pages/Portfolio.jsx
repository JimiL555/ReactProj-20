// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Group Project 2',
      image: 'path-to-image-1.jpg', // Image or screenshot for Project 1
      deployedLink: 'https://seismic-tracker-pro.onrender.com/search',
      repoLink: 'https://github.com/JimiL555/GRP2-Seismic-Tracker-Pro.git',
    },
    {
      title: 'A day in Phish History App',
      image: '/Users/jsliapis/Documents/Bootcamp/My-Projects/ReactProj-20/src/images/Phish_Project.jpeg', // Image or screenshot for Project 2
      deployedLink: 'https://jimil555.github.io/GRPJ-1-Phish-/',
      repoLink: 'https://github.com/JimiL555/GRPJ-1-Phish-.git',
    },
    // Add more projects similarly...
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