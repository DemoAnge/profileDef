import React from 'react'
import "./About.css"
import me from "../../assets/me.png"
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
                    <p>I'm a final-year Software Engineering student with experience in projects that integrate modern technologies and best development practices. In my free time, I explore topics related to cybersecurity and networks in Linux environments, enhancing my skills as a developer.</p>
                    <p>My goal is to grow as a professional in Full Stack web development, applying new knowledge in technology and contributing to the success of organizations through effective and secure solutions.</p>
                </div>
                <div className="about-skills">
                    <h2>Knowledge</h2>

                    <div className="about-skill"> <p>Development FrontEnd</p> <hr style={{width:"50%"}} /> <span className="about-level">Advance</span></div>
                    <div className="about-skill"> <p>Development BackEnd</p> <hr style={{width:"50%"}} /><span className="about-level">Intermediate</span></div>
                    <div className="about-skill"> <p>Database Management </p> <hr style={{width:"50%"}} /><span className="about-level">Intermediate</span></div>
                    <div className="about-skill"> <p>Network Security</p><hr style={{width:"50%"}} /><span className="about-level">Basic</span></div>
                    <div className="about-skill"> <p>Auditor</p><hr style={{width:"50%"}} /><span className="about-level">Basic</span></div>

                    
                </div>                
            </div>
        </div>
        <div className="about-archievements">
            <div className="about-archievement">
                <h1>Englis</h1>
                <p> B1 Intermediate</p>
            </div>
            
            
        </div>


    </div>
  )
}

export default About