import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="section-padding"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 gradient-text">
          About Me
        </h2>

        <div className="glass p-8 rounded-3xl hover:bg-cyan-500/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)] transition duration-300">
          <p className="text-gray-300 leading-8 text-lg">
            Artificial Intelligence and Machine Learning undergraduate with strong foundations in Python, Java, SQL, and Data Analytics. Experienced in building machine learning models, predictive systems, and interactive Power BI dashboards. Passionate about solving real-world problems using AI-driven solutions and continuously exploring modern technologies in Data Science and Artificial Intelligence.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About