import React from 'react'
import Navbar from './components/navbar/navbar'
import HeroMe from './components/HeroMe/HeroMe'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Proyect from './components/Proyects/Proyect'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroMe/>
      <About/>
      <Proyect/>
      <Experience/>
    </div>
  )
}

export default App