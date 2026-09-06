import "./About.css"
import me from "../../assets/me.jpeg"
import logo_pat from "../../assets/dragon.svg"


const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={logo_pat} alt="" />
            

        </div>
        <div className='about-section'>
            <div className="about-left">
                <img src={me} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Full-Stack Software Engineer with about one year of hands-on experience building web apps for cooperatives and university research in Ambato, Ecuador. B.Sc. in Software Engineering from Universidad Técnica de Ambato (UTA, 2020–2025). Actively looking for Junior or Semi-Senior full-stack roles, remote or local.</p>
                    <p>Day-to-day work covers React and Angular front ends, Node.js and Django REST APIs, and relational databases (MySQL, Oracle). Ships features end to end: UI, API, data model, and handover docs. Also held an IT support and security operations role at a cooperative — operations work, not full-stack development.</p>
                    <p>Recent work includes the FISEI faculty inventory system that replaced spreadsheet workflows, Angular document-management modules at Mushuc Runa, and a modular WEEE (RAEE) traceability research architecture that supported a peer-reviewed paper with a DOI. TypeScript and Docker appear in Skills at a Basic level; .NET/C# and SQL Server at Basic/Familiar.</p>
                </div>
                <div className="about-skills">
                    <h2>Knowledge</h2>

                    <div className="about-skill"> <p>Front-end Development</p> <hr style={{width:"50%"}} /> <span className="about-level">Intermediate</span></div>
                    <div className="about-skill"> <p>Back-end Development</p> <hr style={{width:"50%"}} /><span className="about-level">Intermediate</span></div>
                    <div className="about-skill"> <p>Database Management</p> <hr style={{width:"50%"}} /><span className="about-level">Intermediate</span></div>
                    <div className="about-skill"> <p>Network Security</p><hr style={{width:"35%"}} /><span className="about-level">Basic</span></div>
                    <div className="about-skill"> <p>IT Support &amp; Audit</p><hr style={{width:"35%"}} /><span className="about-level">Basic</span></div>

                    
                </div>                
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>English</h1>
                <p> B1 Intermediate</p>
            </div>
            
            
        </div>


    </div>
  )
}

export default About
