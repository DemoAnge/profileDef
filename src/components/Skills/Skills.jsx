import "./Skills.css"
import logo_path from "../../assets/dragon.svg"
import cert1 from "../../assets/certificate/auditor.png"
import cert2 from "../../assets/certificate/iaelements.png"
import cert3 from "../../assets/certificate/tecnic.png"
import cert4 from "../../assets/certificate/redes.png"
import cert5 from "../../assets/certificate/eticalhac.png"
import cert6 from "../../assets/certificate/hack.png"

const Skills = () => {
  return (
    <div id="skill" className='skills'>
      <div className="skill-title">
        <h1>Skills</h1>
        <img src={logo_path} alt="" />
      </div>  
      <div className="skill-section">
        <div className="skill-right">
          <div className="right-title">
            <h1>Technologies</h1>
          </div>
          
          <div className="skill"> <p>React</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Intermediate</span></div>
          <div className="skill"> <p>Angular</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Intermediate</span></div>
          <div className="skill"> <p>Node.js</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Intermediate</span></div>
          <div className="skill"> <p>Django / DRF</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Intermediate</span></div>
          <div className="skill"> <p>Tailwind</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Intermediate</span></div>
          <div className="skill"> <p>TypeScript</p> <hr style={{width:"35%"}} />
          <span className="skill-level">Basic</span></div>
          <div className="skill"> <p>Python</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Intermediate</span></div>
          <div className="skill"> <p>.NET / C#</p> <hr style={{width:"35%"}} />
          <span className="skill-level">Basic</span></div>
          <div className="skill"> <p>MySQL</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Intermediate</span></div>
          <div className="skill"> <p>SQL Server</p> <hr style={{width:"35%"}} />
          <span className="skill-level">Basic</span></div>
          <div className="skill"> <p>Oracle</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Intermediate</span></div>
          <div className="skill"> <p>Docker</p> <hr style={{width:"35%"}} />
          <span className="skill-level">Basic</span></div>
          <div className="skill"> <p>Git</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Intermediate</span></div>
                    

        </div>
        <div className="skill-left">
          <div className="card-certificate">
            <img src={cert1} alt="" />
            <span>Bootcam Auditor ISO 27001</span>
          </div>
          <div className="card-certificate">
            <img src={cert2} alt="" />
            <span>Elements IA Certificate  </span>
          </div>
          <div className="card-certificate">
            <img src={cert3} alt="" />
            <span>Technical Certificate</span>
          </div>
          <div className="card-certificate">
            <img src={cert4} alt="" />
            <span>
            Network Configuration Certificate</span>
          </div>
          <div className="card-certificate">
            <img src={cert5} alt="" />
            <span>Ethical Hacking Certificate</span>
          </div>
          <div className="card-certificate">
            <img src={cert6} alt="" />
            <span>Hacking Wi-Fi Certificate</span>
          </div>

        </div>
      </div>
      <div className="skill-archievements">
            <div className="skill-archievement">
                <h1>6+</h1>
                <p>Courses</p>
            </div>
            <hr />
            <div className="skill-archievement">
                <h1>6</h1>
                <p>Certificates</p>
            </div>
            
           
        </div>
    </div>
  )
}

export default Skills
