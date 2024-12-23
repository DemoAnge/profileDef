import React from 'react'
import "./About.css"
import me from "../../assets/me.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>Acerca de Mi</h1>
            <img src="" alt="" />
            

        </div>
        <div className='about-section'>
            <div className="about-left">
                <img src={me} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>aqui va lo q soylfhfkhgkyhnkjknnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnyjknd</p>
                    <p>el objetivo profesional los cursos q realice etsksjknjbfjfgnjkfghknjjkjnfnjkkkkkkkkkkkkkk</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>Recat JS </p> <hr style={{width:"50%"}} /> </div>
                    <div className="about-skill"> <p>Angular </p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"> <p>Node </p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"> <p>Python</p> <hr style={{width:"50%"}} /></div>
                    
                </div>                
            </div>
        </div>
        <div className="about-archievements">
            <div className="about-archievement">
                <h1>10+</h1>
                <p>Años de experiencia</p>
            </div>
            <hr />
            <div className="about-archievement">
                <h1>90+</h1>
                <p>proyectos completados</p>
            </div>
            <hr />
            <div className="about-archievement">
                <h1>10+</h1>
                <p>Años de experiencia</p>
            </div>
        </div>


    </div>
  )
}

export default About