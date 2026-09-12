import React from 'react'

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Soubhik Chakraborty, a passionate developer interested in GitHub and modern web technologies.
            I love building innovative solutions and exploring new technologies.
          </p>
          <h3>Background</h3>
          <p>
            With a strong foundation in software development, I focus on creating clean, efficient, and scalable code.
            I'm passionate about learning and staying updated with the latest industry trends.
          </p>
          <h3>What I Do</h3>
          <p>
            I work on various projects ranging from web applications to software tools.
            I believe in the power of collaboration and open-source development.
          </p>
        </div>
        <div className="about-image">
          <div style={{
            width: '100%',
            height: '300px',
            background: '#e0e0e0',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: '18px'
          }}>
            Your Photo Here
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
