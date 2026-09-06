import Navbar from './components/navbar/Navbar'
import HeroMe from './components/HeroMe/HeroMe'
import About from './components/About/About'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Proyect from './components/Proyects/Proyect'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="app-shell">
      <div className="app-content">
        <Navbar />
        <HeroMe />
        <About />
        <Services />
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
