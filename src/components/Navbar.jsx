import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ['About', 'Skills', 'Hero', 'Projects', 'Contact']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-4 bg-white/90 backdrop-blur-md border-b border-blush/10">
      
      <div className="flex justify-between items-center">

        <span className="font-display font-black text-xl text-rose tracking-tight">
          Dev Anna<span className="text-blush">.</span>
        </span>

        <ul className="hidden md:flex gap-8 list-none">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-rose/70 text-lg font-medium hover:text-blush transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blush transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">

          <a
            href="#contact"
            className="hidden md:inline-block bg-blush text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-rose transition-colors duration-200"
          >
            Let's Talk →
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-rose text-2xl focus:outline-none"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>
      </div>

      <div
        className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-rose text-lg font-medium hover:text-blush transition-colors"
              >
                {link}
              </a>
            </li>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-blush text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-rose transition-colors"
          >
            Let's Talk →
          </a>
        </ul>
      </div>
    </nav>
  )
}