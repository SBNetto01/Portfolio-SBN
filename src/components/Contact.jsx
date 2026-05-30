import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { dict } from './i18n'

const Contact = ({ lang }) => {
  const t = dict[lang].contact

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted mb-10 max-w-lg mx-auto"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={`mailto:${t.email}`}
            className="flex items-center gap-3 px-6 py-3 bg-surface rounded-xl border border-border hover:border-primary/40 transition-all duration-300 text-muted hover:text-white group"
          >
            <FaEnvelope className="w-5 h-5 text-primary-light group-hover:scale-110 transition-transform" />
            <span className="text-sm">{t.email}</span>
          </a>
          <a
            href={`tel:${t.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 px-6 py-3 bg-surface rounded-xl border border-border hover:border-primary/40 transition-all duration-300 text-muted hover:text-white group"
          >
            <FaPhone className="w-5 h-5 text-primary-light group-hover:scale-110 transition-transform" />
            <span className="text-sm">{t.phone}</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/sergio-b-netto"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-surface rounded-xl border border-border flex items-center justify-center text-muted hover:text-primary-light hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/SBNetto01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-surface rounded-xl border border-border flex items-center justify-center text-muted hover:text-primary-light hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub size={24} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-20 pt-8 border-t border-border"
      >
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Sérgio Bernardelli Netto. {dict[lang].footer.copyright}
        </p>
      </motion.div>
    </section>
  )
}

export default Contact
