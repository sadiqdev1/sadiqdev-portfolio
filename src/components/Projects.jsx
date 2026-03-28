import fashionImg from '../assets/fashion-store.png'
import amakaImg from '../assets/amaka-beauty.png'
import multipreneurImg from '../assets/multi-preneur.png'

const projects = [
    {
        img: fashionImg,
        name: 'Fashion Store',
        tags: ['React', 'Tailwind'],
        desc: 'A vibrant e-commerce fashion interface with product listings, cart functionality, payment integration & smooth animations.',
        link: 'https://fashion-store-six-ivory.vercel.app/',
        bg: 'bg-blush/10'
    },
    {
        img: amakaImg,
        name: 'Amaaka Beauty Empire',
        tags: ['React', 'CSS3'],
        desc: 'A glowing beauty brand website with elegant product showcase and smooth UI.',
        link: 'https://amaka-beauty-empire.vercel.app/',
        bg: 'bg-rose/10'
    },
    {
        img: multipreneurImg,
        name: 'Multi-Preneur',
        tags: ['HTML', 'Tailwind', 'JavaScript'],
        desc: 'A multi-preneur multi-pages with responsive layouts and Tailwind styling.',
        link: 'https://dev-anna-life.github.io/Multi-Preneur/',
        bg: 'bg-blush/5'
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-8 md:px-16">
            <div className="flex justify-between items-end mb-12 reveal">
                <div>
                    <p className="text-blush text-xs font-bold uppercase tracking-widest mb-3">Projects</p>
                    <h2 className="font-display font-black text-4xl md:text-5xl text-rose leading-tight">Things I've Built</h2>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 reveal">
                {projects.map(p => (
                    <div key={p.name}
                        className="rounded-3xl overflow-hidden border border-blush/15 hover:-translate-y-2 hover:shadow-xl hover:shadow-blush/10 transition-all duration-300">
                        <div className="relative overflow-hidden h-52">
                            <img 
                            src={p.img} 
                            alt={p.name} 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-blush/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                            <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-rose font-display font-bold text-sm px-6 py-3 rounded-full hover:bg-rose hover:text-white transition-colors duration-200"
                            >
                                View Live style →
                            </a>
                            </div>
                        </div>
                        
                        <div className="p-6 bg-rose">
                            <div className="flex gap-2 flex-wrap mb-3">
                                {p.tags.map(t => (
                                    <span key={t} className="text-xs font-semibold bg-blush/10 text-white px-3 py-1 rounded-full">{t}</span>
                                ))}
                            </div>
                            <h3 className="font-display font-bold text-lg text-white mb-2">{p.name}</h3>
                            <p className="text-white text-sm leading-relaxed mb-4">{p.desc}</p>
                            <a href={p.link} target="_blank" rel="noreferrer"
                                className="text-blush text-sm font-semibold hover:text-rose transition-colors">
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}