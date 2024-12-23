import "./navbar.css"
import React from 'react'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
  <div className="navbar">
    <img src={logo} alt=""/>
    <ul className="nav-menu">
      <li>Inicio</li>
      <li>Acerca de Mi</li>
      <li>Portafolio</li>
      <li>Habilidades</li>
      <li>Contacto</li>
    </ul>
    <div className="nav-connect"> Conectar conmigo</div>

  </div>
  )
}

export default Navbar