const skills = [
    { name: 'HTML & CSS', level: 'Advanced', pct: 95 },
    { name: 'JavaScript', level: 'Proficient', pct: 78 },
    { name: 'React', level: 'Proficient', pct: 76 },
    { name: 'Tailwind CSS', level: 'Advanced', pct: 88 },
    { name: 'Responsive Design', level: 'Advanced', pct: 98 },
    { name: 'Git & GitHub', level: 'Proficient', pct: 100 },

]

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-8 md:px-16 bg-rose">
            <div className="reveal">
                <p className="text-blush text-xs font-bold uppercase tracking-widest mb-3">Skills</p>
                <h2 className="font display font-black text-4xl md:text-3xl text-white leading-tight mb-12 max-w-md">
                    Tools I bring to every project
                </h2>
            </div>

            <div className="flex flex-wrap gap-6 mb-12 reveal">
                {[
                    ['2+', 'Year of Experience'],
                    ['3', 'Projects Deployed'],
                    ['4', 'Technologies Mastered'],
                    ['100%', 'Passion & Dedication'],
                ].map(([num, label]) => (
                    <div key={label} className="bg-white/10 border border-white/15 rounded-2xl px-6 py-4 flex-1 min-w-[140px]">
                        <div className="font-display font-black text-3xl text-white">{num}</div>
                        <div className="text-white/60 text-xs mt-2">{label}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
                {skills.map(skill => (
                    <div key={skill.name}
                        className="border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-blush/50 transition-all duration-300 group">
                        <div className="font-display font-bold text-white text-lg mb-2">{skill.name}</div>
                        <div className="text-white/40 text-xl mb-4">{skill.level}</div>
                        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-blush rounded-full transition-all duration-1000"
                                style={{ width: `${skill.pct}%` }}> </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}