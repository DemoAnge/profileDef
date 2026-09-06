import "./Experience.css"
import experience_data from "../../data/experience_data"

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="section-head">
        <span className="section-kicker">Experience</span>
        <h2 className="section-title">
          Work <span className="accent">timeline</span>
        </h2>
      </div>
      <div className="experience-timeline">
        {experience_data.map((exp, index) => (
          <article key={index} className="experience-item">
            <div className="experience-marker" aria-hidden />
            <div className="experience-year">{exp.year}</div>
            <div className="experience-details card">
              <h3 className="experience-role">{exp.title}</h3>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-technologies">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
