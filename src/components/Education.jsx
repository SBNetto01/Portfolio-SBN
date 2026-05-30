import { motion } from 'framer-motion'
import { dict } from './i18n'
import { LuGraduationCap } from 'react-icons/lu'

const Education = ({ lang }) => {
  const t = dict[lang].education
  const langT = dict[lang].languages

  return (
    <section id="education" className="py-24 px-4 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-16"
        >
          {t.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface rounded-xl border border-border p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <LuGraduationCap className="w-6 h-6 text-primary-light" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{t.items[0].institution}</h3>
                <h4 className="text-primary-light font-medium mt-1">{t.items[0].degree}</h4>
                <span className="inline-block text-xs text-muted mt-2 bg-surface-light px-2 py-1 rounded-full">
                  {t.items[0].period}
                </span>
                <p className="text-muted text-sm mt-3 leading-relaxed">{t.items[0].description}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface rounded-xl border border-border p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">{langT.title}</h3>
            <div className="space-y-3">
              {langT.items.map((langItem) => (
                <div key={langItem.name} className="flex items-center justify-between">
                  <span className="text-sm text-muted">{langItem.name}</span>
                  <span className="text-xs font-medium text-primary-light bg-primary/10 px-2 py-1 rounded-full">
                    {langItem.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
