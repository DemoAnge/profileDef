import Navbar from './components/navbar/Navbar'
import HeroMe from './components/HeroMe/HeroMe'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Proyect from './components/Proyects/Proyect'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'
import ThreeBackground from './components/ThreeBackground/ThreeBackground'

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <ThreeBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar/>
        <HeroMe/>
        <About/>
        <Skills/>
        <Proyect/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App