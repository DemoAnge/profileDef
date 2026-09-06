import "./heroMe.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import myphoto from "../../assets/me.jpeg"

const HeroMe = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-badge mono">Full-Stack Software Engineer</span>
          <h1 className="hero-name">
            Angel <span className="hero-accent">Pilamunga</span>
          </h1>
          <p className="hero-role">
            Junior / Semi-Senior · Ambato, Ecuador · React · Angular · Node.js · Django
          </p>
          <p className="hero-lead">
            Building reliable web apps end to end — UI, API, and data — open to remote or local roles.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Get in touch</a>
            <a href="#project" className="btn-ghost">View projects</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/DemoAnge" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/angel-pilamunga-30a758133/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-frame">
            <img src={myphoto} alt="Angel Pilamunga" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroMe
