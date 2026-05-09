import { motion } from "framer-motion"

function Education() {
  return (
    <section
      id="education"
      className="section-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Education
        </h2>

        <div className="glass p-8 rounded-3xl hover:bg-cyan-500/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)] transition duration-300">
          <h3 className="text-2xl font-bold">
            B.Tech – Artificial Intelligence & Machine Learning
          </h3>

          <p className="text-cyan-400 mt-2">
            Aditya University
          </p>

          <p className="text-gray-400 mt-4">
            CGPA: 8.95 | 2023 – 2027
          </p>

          <p className="text-gray-400 mt-4">
            Focused on Machine Learning, Data Analytics,
            DBMS, Artificial Intelligence, and Software Development.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Education