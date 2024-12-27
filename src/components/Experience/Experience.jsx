import React from 'react'
import "./Experience.css"
import experience_data from '../../data/experience_data'
import logo_path from "../../assets/dragon.svg"

const Experience = () => {
  return (
<div id="experience" className="experience-container">
    <div className="experience-title">
      <h1>Experience</h1>
      <img src={logo_path} alt="" />
    </div>
      
      <div className="experience-list">
        {experience_data.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-year">{exp.year}</div>
            <div className="experience-details">
              <h2 className="experience-role">{exp.title}</h2>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-technologies">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="ex-technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Experience