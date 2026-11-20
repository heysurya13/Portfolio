
import CursorEffect from './Components/CursorEffect'
import { Routes, Route } from 'react-router-dom'
import Experience from './Components/Experience'
import Welcome from './Components/Welcome'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route
        path="/home"
        element={
          <>
            <CursorEffect />

            <Navbar />

            <main>
              <section id="home">
                <Home />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="education">
                <Education />
              </section>

              <section id="experience">
                <Experience />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </main>
          </>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
