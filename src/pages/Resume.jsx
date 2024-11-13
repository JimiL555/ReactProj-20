// src/pages/Resume.jsx
import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/path/to/resume.pdf" download>Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    </section>
  );
}

export default Resume;