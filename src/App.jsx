import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [lang, setLang] = useState('en')

  return (
    <div className="min-h-screen bg-bg text-white font-sans">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Education lang={lang} />
      <Contact lang={lang} />
    </div>
  )
}

export default App
