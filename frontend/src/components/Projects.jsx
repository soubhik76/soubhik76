import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with React and Django. Features professional design with contact form integration.',
      technologies: 'React, Django, CSS3',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Project Name',
      description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
      technologies: 'Technology Stack',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Project Name',
      description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
      technologies: 'Technology Stack',
      github: '#',
      live: '#'
    }
  ]

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
              <strong>Tech:</strong> {project.technologies}
            </p>
            <div className="project-links">
              <a href={project.github}>GitHub</a>
              <a href={project.live}>Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
