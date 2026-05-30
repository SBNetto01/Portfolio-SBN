import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuGlobe, LuMenu, LuX } from 'react-icons/lu'
import { dict } from './i18n'

const sections = ['home', 'experience', 'projects', 'skills', 'education', 'contact']

const Navbar = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [lang])

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
  }`

  return (
    <nav className={navClasses}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button onClick={() => scrollTo('home')} className="text-xl font-bold text-white tracking-tight">
          SBN<span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                active === id ? 'text-primary-light bg-primary/10' : 'text-muted hover:text-white hover:bg-surface'
              }`}
            >
              {dict[lang].nav[id]}
            </button>
          ))}
          <div className="ml-4 flex items-center gap-2 pl-4 border-l border-border">
            <LuGlobe className="w-4 h-4 text-muted" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-sm text-muted outline-none cursor-pointer"
            >
              <option value="en" className="bg-bg">EN</option>
              <option value="pt" className="bg-bg">PT</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {sections.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    active === id ? 'text-primary-light bg-primary/10' : 'text-muted hover:text-white'
                  }`}
                >
                  {dict[lang].nav[id]}
                </button>
              ))}
              <div className="flex items-center gap-2 px-3 pt-3 border-t border-border">
                <LuGlobe className="w-4 h-4 text-muted" />
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="bg-transparent text-sm text-muted outline-none cursor-pointer"
                >
                  <option value="en" className="bg-bg">EN</option>
                  <option value="pt" className="bg-bg">PT</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
