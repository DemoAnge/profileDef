import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>Specializing in the creation of dynamic interfaces and robust backend systems.</p>
            </div>
            <div className="footer-top-right">

            </div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-botom-left"> <span>©2025 Angel.</span>    All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>

        </div>

    </div>
  )
}

export default Footer