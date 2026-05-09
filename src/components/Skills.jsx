import { motion } from "framer-motion"

const skills = [
  "Python",
  "Java",
  "C",
  "SQL",
  "Machine Learning",
  "Power BI",
  "Excel",
  "Data Analysis",
]

function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
    >
      <h2 className="text-4xl font-bold mb-12 gradient-text">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-2xl text-center hover:-translate-y-2 hover:scale-105 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold">
              {skill}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills