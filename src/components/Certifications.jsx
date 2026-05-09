function Certifications() {
  const certs = [
    "Python Programming – Cisco",
    "C Programming – Cisco",
    "Machine Learning – Infosys",
    "AI Fundamentals – NPTEL",
    "DBMS – NPTEL",
  ]

  return (
    <section
      id="certifications"
      className="section-padding"
    >
      <h2 className="text-4xl font-bold mb-12 gradient-text">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {certs.map(cert => (
          <div
            key={cert}
            className="glass p-8 rounded-3xl hover:bg-cyan-500/5 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)] transition duration-300"
          >
            {cert}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications