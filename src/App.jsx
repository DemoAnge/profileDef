import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroMe from './components/HeroMe/HeroMe'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Proyect from './components/Proyects/Proyect'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroMe/>
      <About/>
      <Skills/>
      <Proyect/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App