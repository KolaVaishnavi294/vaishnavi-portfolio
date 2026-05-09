function Footer() {
  return (
    <footer className="py-10 text-center text-gray-400">

      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/KolaVaishnavi294"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jai-durga-vaishanavi-kola-996174291"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:kola.vaishnavi88@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          Email
        </a>
      </div>

      <p>
        © 2026 Jai Durga Vaishanavi Kola
      </p>

    </footer>
  )
}

export default Footer