import { motion } from "framer-motion"
import projects from "../data/projects"

function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
    >
      <h2 className="text-4xl font-bold mb-12 gradient-text">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl hover:-translate-y-3 hover:bg-cyan-500/5 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(34,211,238,0.4)] transition duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              className="text-cyan-400"
            >
              GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects