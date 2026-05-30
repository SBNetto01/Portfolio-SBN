import { motion } from 'framer-motion'
import { dict } from './i18n'
import { LuFolder, LuGithub } from 'react-icons/lu'

const Projects = ({ lang }) => {
  const t = dict[lang].projects

  return (
    <section id="projects" className="py-24 px-4 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-16"
        >
          {t.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-surface rounded-xl border border-border p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <LuFolder className="w-8 h-8 text-primary-light" />
                <span className="text-xs font-medium text-primary-light bg-primary/10 px-2 py-1 rounded-full">
                  {project.subtitle}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary-light hover:text-white transition-colors mb-4"
                >
                  <LuGithub size={16} />
                  <span>GitHub</span>
                </a>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-primary-light bg-primary/5 border border-primary/20 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
