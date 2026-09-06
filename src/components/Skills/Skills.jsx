import "./Skills.css"
import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa"
import { SiAngular, SiDjango, SiTypescript, SiMysql } from "react-icons/si"

const tools = [
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "Node.js", Icon: FaNodeJs, color: "#68A063" },
  { name: "Django", Icon: SiDjango, color: "#44B78B" },
  { name: "Python", Icon: FaPython, color: "#3776AB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
]

const Skills = () => {
  return (
    <section id="skill" className="skills section">
      <div className="section-head center">
        <span className="section-kicker">Skills</span>
        <h2 className="section-title">
          Tools I use <span className="accent">every day</span>
        </h2>
        <p className="section-sub">
          Core stack for front-end, back-end, and data work across product and research projects.
        </p>
      </div>

      <div className="skills-icons">
        {tools.map(({ name, Icon, color }) => (
          <div key={name} className="skill-icon-card card" title={name}>
            <Icon className="skill-icon" size={28} style={{ color }} aria-hidden />
            <span className="skill-icon-label">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills