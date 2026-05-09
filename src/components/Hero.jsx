import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#020617] text-white relative overflow-hidden">

      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-6 pt-24"
      >
        <img
          src="/avatar.png"
          alt="avatar"
          className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-cyan-400"
        />

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  JAI DURGA VAISHNAVI
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          ML & Data Engineer
          <div className="flex justify-center gap-4 flex-wrap text-sm md:text-base text-gray-400 mb-6">
             <span>•</span>
            <span>AI/ML Enthusiast</span>
            <span>•</span>
            <span>Data Analytics</span>
            <span>•</span>
            <span>Power BI Developer</span>
          </div>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          Passionate about AI, Machine Learning,
          Data Analytics, and intelligent systems.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
           className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition duration-300"
          >
            View Projects
          </a>

          <a
            href="mailto:kola.vaishnavi88@gmail.com"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero