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
    <div className="app-shell">
      <div className="cyber-bg" aria-hidden="true" />
      <div className="app-content">
        <Navbar />
        <HeroMe />
        <About />
        <Skills />
        <Proyect />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
