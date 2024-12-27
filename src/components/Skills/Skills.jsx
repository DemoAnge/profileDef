import React from 'react'
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
          
          <div className="skill"> <p>Angular </p> <hr style={{width:"50%"}} />
          <span className="skill-level">Advanced</span></div>
          <div className="skill"> <p>Node </p><hr style={{width:"50%"}} />
          <span className="skill-level">Intermedio</span></div>
          <div className="skill"> <p>Recat JS </p> <hr style={{width:"50%"}} /> 
          <span className="skill-level">Intermediate</span></div>
          <div className="skill"> <p>Python</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Basic</span></div>
          <div className="skill"> <p>Oracle</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Intermediate</span></div>
          <div className="skill"> <p>Linux</p> <hr style={{width:"50%"}} />
          <span className="skill-level">Basic</span></div>
                    

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
                <p>Curses</p>
            </div>
            <hr />
            <div className="skill-archievement">
                <h1>7+</h1>
                <p>Certficates</p>
            </div>
            
           
        </div>
    </div>
  )
}

export default Skills