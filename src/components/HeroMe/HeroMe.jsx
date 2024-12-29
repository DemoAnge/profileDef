import React from 'react'
import "./heroMe.css"
import me from  "../../assets/me.png"
import linked  from  "../../assets/socialmedia/linked.svg"
import github  from  "../../assets/socialmedia/git2.png"
import facebook  from  "../../assets/socialmedia/facebok.svg"
import insta  from  "../../assets/socialmedia/inst2.png"


const HeroMe = () => {
  return (
    <div id="home" className='hero'>
      <div className="hero-right">
        <div className='imgme'>
        <img className="img-me" src={me} alt="" />

        </div>
       
       <div className="socialmedia">
        <a href="https://github.com/DemoAnge" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
        <a href="https://www.linkedin.com/in/angel-pilamunga-30a758133/" target="_blank" rel="noopener noreferrer"><img src={linked} alt="" /></a>
               </div>

      </div>
      <div className="hero-left">
        <h1><span>I'm Angel Pilamunga,</span> a Full Stack web developer from Ecuador</h1>
        <p>Specializing in the creation of dynamic interfaces and robust backend systems. Experienced in developing scalable and innovative applications, I collaborate with multidisciplinary teams to ensure goals are met and excellence is achieved in every project.</p>
        <div className='hero-action'>
         
            {/*<div className='hero-resume'>
                Download CV

            </div>*/}

        </div>
        
      </div>
       
        

    </div>
  )
}

export default HeroMe