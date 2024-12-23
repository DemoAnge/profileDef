import React from 'react'
import "./heroMe.css"
import me from "../../assets/me.jpg"

const HeroMe = () => {
  return (
    <div className='hero'>
        <img className="img-me" src={me} alt="" />
        <h1><span>Soy Angel Pilamunga,</span>  Auditor Informático en Ecuador</h1>
        <p>Soy desarrollador full stack de Ecuador, no cuento con experiencia laboral, pero cuento con proyectos experimentales que he colaborado durante los años de estudio</p>
        <div className='hero-action'>
            <div  className='hero-connect'>
                Conectar conmigo

            </div>
            <div className='hero-resume'>
                Resumen

            </div>

        </div>

    </div>
  )
}

export default HeroMe