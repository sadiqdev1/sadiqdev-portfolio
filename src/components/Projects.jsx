import fashionImg from '../assets/fashion-store.png'
import amakaImg from '../assets/amaka-beauty.png'
import multipreneurImg from '../assets/multi-preneur.png'

const projects = [
  {
    img: fashionImg,
    name: 'Fashion Store',
    tags: ['React', 'Tailwind'],
    desc: 'A vibrant e-commerce fashion interface with product listings, cart functionality & smooth animations.',
    link: 'https://fashion-store-six-ivory.vercel.app/',
  },
  {
    img: amakaImg,
    name: 'Amaka Beauty Empire',
    tags: ['React', 'Tailwind'],
    desc: 'A glowing beauty brand website with elegant product showcases and smooth UI.',
    link: 'https://amaka-beauty-empire.vercel.app/',
  },
  {
    img: multipreneurImg,
    name: 'Multi-Preneur',
    tags: ['HTML', 'Tailwind', 'JavaScript'],
    desc: 'A multi-entrepreneur landing page with responsive layouts and Tailwind styling.',
    link: 'https://dev-anna-life.github.io/Multi-Preneur/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-16 reveal">
          <div>
            <p className="text-blush text-sm font-bold uppercase tracking-widest mb-6">Projects</p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-black leading-tight">
              Things I've built
            </h2>
          </div>
          
          < a
            href="/resume.pdf"
            download
            className="hidden md:flex items-center gap-2 border border-blush text-blush px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-rose hover:text-white transition-all duration-200"
          >
            Download CV ↓
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal">
          {projects.map((p) => (
            
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl block"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-80 object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                />

                <div className="absolute inset-0 bg-rose/0 group-hover:bg-rose/60 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display font-black text-white text-xl mb-2 mt-4">
                    {p.name}
                  </h3>
                  <div className="flex gap-2 flex-wrap mb-3">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/80 text-xs leading-relaxed mb-3">
                    {p.desc}
                  </p>
                  <span className="text-blush text-sm font-bold flex items-center gap-2">
                    View Project →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}