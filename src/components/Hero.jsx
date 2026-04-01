export default function Hero() {
    return (
        <section id="hero" className="min-h-screen pt-28 pb-16 px-8 md:px-16 bg-rose grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center gap-2 bg-blush/10 text-blush text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-fadeUp">
                    <span className="w-2 h-2 bg-blush rounded-full animate-pulse" />
                        Available for Work
                </div>

                <h1 className="font-display font-black text-5xl md:text-6xl leading-tight text-cream tracking-tight animate-fadeUp"
                    style={{ animateDelay: '0.1s' }}>
                    Hi, I'm <br />
                    <span className="inline-block italic text-blush mb-8">Dev Anna.</span>
                    <br />
                    I build the web<br />beautifully
                </h1>

                <p className="text-blush text-base leading-relaxed mt-6 mb-8 max-w-md animate-fadeup"
                    style={{ animateDelay: '0.2s' }}>
                    Web Developer crafting pixel-perfect, elegant interfaces. I turn into interactive realities with HTML, CSS3, Tailwind-CSS, JavaScript, & React.
                </p>

                <div className="flex gap-4 flex-wrap animate-fadeUp" style={{ animateDelay: '0.3s' }}>
                    <a href="#projects"
                        className="bg-blush text-white px-7 py-3 rounded-full font-medium hover:bg-rose transition-colors duration-200">
                        View My Work ⭐
                    </a>
                    <a href="#contact"
                        className="border border-blush text-blush px-7 py-3 rounded-full font-medium hover:bg-blush hover:text-white transition-all duration-200">
                        Say Hello
                    </a>
                </div>
            </div>
            

            <div className="flex justify-center items-center relative animate-fadeUp" style={{ animationDelay: '0.4s' }}>
                <div className="w-72 h-80 bg-blush/10 animate-morph flex items-center justify-center text-8xl border-2 border-blush/20">
                    💻
                </div>
                {[
                    { label: 'React Dev', color: 'bg-blush', pos: 'top-4 -left-6' },
                    { label: 'CSS Wizard', color: 'bg-rose', pos: 'bottom-10 -right-4' },
                    { label: 'UI Lover', color: 'bg-blush/80', pos: 'top-1/2 -left-6' },
                ].map(chip => (
                    <div key={chip.label}
                        className={`absolute ${chip.pos} animate-float bg-white border border-blush/20 rounded-xl px-3 py-2 text-xs font-semibold text-rose shadow-sm flex items-center gap-2`}>
                        <span className={`w-2 h-2 rounded-full ${chip.color}`} />
                        {chip.label}
                    </div>
                ))}
            </div>
        </section>
    )
}