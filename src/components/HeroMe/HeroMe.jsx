import "./heroMe.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import myphoto from "../../assets/me.jpeg"

const HeroMe = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="hero-name">Angel Pilamunga</h1>
          <p className="hero-lead">
            Full-Stack Software Engineer (Junior/Semi-Senior) · Ambato · Open to remote/local
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Get in touch</a>
            <a href="#project" className="btn-ghost">View portfolio</a>
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