import "./Skills.css"
import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa"
import { SiAngular, SiDjango, SiTypescript, SiMysql } from "react-icons/si"
import cert1 from "../../assets/certificate/auditor.png"
import cert2 from "../../assets/certificate/iaelements.png"
import cert3 from "../../assets/certificate/tecnic.png"
import cert4 from "../../assets/certificate/redes.png"
import cert5 from "../../assets/certificate/eticalhac.png"
import cert6 from "../../assets/certificate/hack.png"

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

const certs = [
  { img: cert1, label: "Auditor ISO 27001" },
  { img: cert2, label: "Elements of AI" },
  { img: cert3, label: "Technical Certificate" },
  { img: cert4, label: "Network Configuration" },
  { img: cert5, label: "Ethical Hacking" },
  { img: cert6, label: "Hacking Wi-Fi" },
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

      <div className="certs-block">
        <h3 className="certs-title">Certificates</h3>
        <div className="certs-grid">
          {certs.map((c) => (
            <article key={c.label} className="cert-card card">
              <img src={c.img} alt={c.label} />
              <span>{c.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
