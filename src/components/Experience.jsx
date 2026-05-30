import { motion } from 'framer-motion'
import { dict } from './i18n'
import { LuBriefcase } from 'react-icons/lu'

const Experience = ({ lang }) => {
  const t = dict[lang].experience

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-16"
        >
          {t.title}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border sm:-translate-x-1/2" />

          {t.items.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col sm:flex-row items-start mb-12 sm:mb-16 ${
                  isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className={`w-full sm:w-5/12 ${isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                  <span className="text-xs font-bold text-primary-light tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3">{item.company}</h3>
                  <h4 className="text-md font-medium text-primary-light mt-1 mb-2">{item.role}</h4>
                  <p className="text-muted leading-relaxed text-sm">{item.description}</p>
                </div>

                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-surface rounded-full border-2 border-primary shadow-lg shadow-primary/20 items-center justify-center z-10">
                  <LuBriefcase className="w-4 h-4 text-primary-light" />
                </div>

                <div className="hidden sm:block w-0 sm:w-5/12" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
