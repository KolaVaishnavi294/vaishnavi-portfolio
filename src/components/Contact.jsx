function Contact() {
  return (
    <section
      id="contact"
      className="section-padding"
    >
      <h2 className="text-4xl font-bold mb-12 gradient-text">
        Contact
      </h2>

      <div className="glass p-8 rounded-3xl hover:bg-cyan-500/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)] transition duration-300">
        <p className="mb-4">
          Email:
          <a
            href="mailto:kola.vaishnavi88@gmail.com"
            className="text-cyan-400 ml-2"
          >
            kola.vaishnavi88@gmail.com
          </a>
        </p>

        <p className="mb-4">
          GitHub:
          <a
            href="https://github.com/KolaVaishnavi294"
            className="text-cyan-400 ml-2"
          >
            github.com/KolaVaishnavi294
          </a>
        </p>

        <p>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/jai-durga-vaishanavi-kola-996174291"
            className="text-cyan-400 ml-2"
          >
            View Profile
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact