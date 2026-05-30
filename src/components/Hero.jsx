import { motion } from 'framer-motion'
import { LuArrowDown, LuDownload } from 'react-icons/lu'
import { dict } from './i18n'

const Hero = ({ lang }) => {
  const t = dict[lang].hero

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-dark/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-light font-mono text-sm sm:text-base mb-4 tracking-wider"
        >
          {t.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          Sérgio Bernardelli Netto
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-primary-light font-medium mb-3"
        >
          {t.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted text-sm sm:text-base max-w-xl mx-auto mb-10"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            {t.cta}
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('experience')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 border border-border text-muted hover:text-white hover:border-primary rounded-full font-medium transition-all duration-300 flex items-center gap-2"
          >
            <LuDownload size={16} />
            {t.resume}
          </button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        onClick={() => {
          const el = document.getElementById('experience')
          el?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-white transition-colors"
      >
        <LuArrowDown size={24} />
      </motion.button>
    </section>
  )
}

export default Hero
