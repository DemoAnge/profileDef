import Navbar from './components/navbar/Navbar'
import HeroMe from './components/HeroMe/HeroMe'
import About from './components/About/About'
import Proyect from './components/Proyects/Proyect'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Extras from './components/Extras/Extras'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="app-shell">
      <div className="app-content">
        <Navbar />
        <HeroMe />
        <About />
        <Proyect />
        <Experience />
        <Skills />
        <Services />
        <Extras />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App