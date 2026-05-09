import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Vaishnavi
         </h1>

        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-cyan-400 hover:bg-white/10 px-3 py-2 rounded-lg transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar