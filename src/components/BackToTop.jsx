import { ArrowUp } from "lucide-react"

function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 p-4 rounded-full bg-cyan-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition duration-300"
    >
      <ArrowUp />
    </button>
  )
}

export default BackToTop