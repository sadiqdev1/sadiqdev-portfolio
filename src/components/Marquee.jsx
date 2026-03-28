const items = ['HTML & CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design', 'Creative UI', 'Frontend Dev']

export default function Marquee() {
    const doubled = [...items, ...items]
    return (
        <div className="p-4 overflow-hidden bg-black border-y border-blush">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
                {doubled.map((item, i) => (
                    <span key={i} className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}