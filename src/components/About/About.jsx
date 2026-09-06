import "./About.css"
import me from "../../assets/me.jpeg"

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="section-head">
        <span className="section-kicker">01</span>
        <h2 className="section-title">About</h2>
      </div>

      <div className="about-layout">
        <div className="about-photo-wrap">
          <img src={me} alt="Angel Pilamunga" className="about-photo" />
        </div>

        <div className="about-body glass-card">
          <div className="about-para">
            <p>
              Full-Stack Software Engineer with about one year of hands-on experience building web apps for cooperatives and university research in Ambato, Ecuador. B.Sc. in Software Engineering from Universidad Técnica de Ambato (UTA, 2020–2025). Actively looking for Junior or Semi-Senior full-stack roles, remote or local.
            </p>
            <p>
              Day-to-day work covers React and Angular front ends, Node.js and Django REST APIs, and relational databases (MySQL, Oracle). Ships features end to end: UI, API, data model, and handover docs. Also held an IT support and security operations role at a cooperative — operations work, not full-stack development.
            </p>
            <p>
              Recent work includes the FISEI faculty inventory system that replaced spreadsheet workflows, Angular document-management modules at Mushuc Runa, and a modular WEEE (RAEE) traceability research architecture that supported a peer-reviewed paper with a DOI. TypeScript and Docker appear in Skills at a Basic level; .NET/C# and SQL Server at Basic/Familiar.
            </p>
          </div>
          <div className="about-meta">
            <span className="meta-chip mono">EN · B1 Intermediate</span>
            <span className="meta-chip mono">Ambato, EC</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
