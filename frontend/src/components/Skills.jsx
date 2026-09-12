import React from 'react'

function Skills() {
  const skills = {
    'Frontend Development': ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design', 'Vite'],
    'Backend Development': ['Django', 'Python', 'REST APIs', 'Database Design'],
    'Tools & Platforms': ['Git/GitHub', 'VS Code', 'Linux', 'Docker', 'npm/yarn'],
    'Soft Skills': ['Problem Solving', 'Communication', 'Team Collaboration', 'Project Management']
  }

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {items.map((skill, idx) => (
                <li key={idx}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
