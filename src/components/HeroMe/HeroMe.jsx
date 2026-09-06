import "./heroMe.css"
import linked from "../../assets/socialmedia/linked.svg"
import github from "../../assets/socialmedia/git2.png"
import myphoto from "../../assets/me.jpeg"

const techs = [
  { label: "React", x: -140, y: -90, delay: 0 },
  { label: "Node.js", x: 150, y: -70, delay: 0.3 },
  { label: "Python", x: -160, y: 80, delay: 0.6 },
  { label: "TypeScript", x: 140, y: 100, delay: 0.9 },
  { label: "Django", x: -100, y: 170, delay: 1.2 },
  { label: "Angular", x: 110, y: -180, delay: 1.5 },
]

const HeroMe = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-photo-col">
        <div className="hero-portrait-wrapper">
          <div className="portrait-ring" />
          <img src={myphoto} alt="Angel Pilamunga" className="hero-portrait" />
          {techs.map((t) => (
            <span
              key={t.label}
              className="tech-float"
              style={{
                "--x": `${t.x}px`,
                "--y": `${t.y}px`,
                "--delay": `${t.delay}s`,
              }}
            >
              {t.label}
            </span>
          ))}
        </div>
        <div className="hero-social">
          <a href="https://github.com/DemoAnge" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/angel-pilamunga-30a758133/" target="_blank" rel="noopener noreferrer">
            <img src={linked} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="hero-content-col">
        <span className="hero-badge">Full-Stack Software Engineer</span>
        <h1 className="hero-headline">
          Hi, I&apos;m <span className="hero-gradient">Angel Pilamunga</span>
        </h1>
        <p className="hero-subtitle">
          Full-Stack Software Engineer (Junior / Semi-Senior) based in Ambato, Ecuador.<br />
          React, Angular, Node.js, and Django. Open to remote or local roles.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="hero-cta-primary">Get in touch</a>
          <a href="#project" className="hero-cta-secondary">View projects</a>
        </div>
      </div>
    </div>
  )
}

export default HeroMe
