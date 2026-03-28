export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-5 bg-white/90 backdrop-blur-md border-b border-blush/10">
            <span className="font-display font-black text-xl text-rose tracking-tight">
            Dev Anna<span className="text-blush">.</span>
            </span>
            <ul className="hidden md:flex gap-8 list-none">
                {['About', 'Skills', 'Hero', 'Projects', 'Contact',].map(link => (<li key={link}> 
                    <a href={`#${link.toLowerCase()}`}
                    className="text-rose/70 text-xl font-medium hover:text-blush transition-colors duration-200 relative group"
                    >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blush translation-all duration-300 group-hover:w-full" />
                    </a>
                </li>
                ))}
            </ul>

            <a href="#contact"
            className="bg-blush text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-rose transition-colors duration-200">
                Let's Talk →
            </a>
        </nav>
    )
}