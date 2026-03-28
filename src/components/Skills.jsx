import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { MdDevices } from "react-icons/md"

const skills = [
    {
        name: 'HTML5',
        icon: FaHtml5,
        color: '#E34F26',
        desc: 'HTML5 is the standard language used to create and structure content on the web. It defines the meaning and layout of web content through a series of elements and tags that browsers use to display text, images, links and more.',
    },
    {
        name: 'CSS3',
        icon: FaCss3Alt,
        color: '#1572B6',
        desc: 'CSS3 is the language used to style and visually present HTML content. It controls layout, colors, fonts, animations and responsiveness making websites beautiful and engaging across all screen sizes.',
    },
    {
        name: 'JavaScript',
        icon: FaJs,
        color: '#F7DF1E',
        desc: 'JavaScript is the programming language of the web. It enables interactive and dynamic content on websites from form validation and animations to fetching data and building full web applications.',
    },
    {
        name: 'React',
        icon: FaReact,
        color: '#61DAFB',
        desc: 'React is a JavaScript library for building fast, interactive user interfaces. It uses a component-based approach that makes it easy to build scalable applications by breaking the UI into small reusable pieces.',
    },
    {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#38BDF8',
        desc: 'Tailwind CSS is a utility-first CSS framework that allows developers to style applications directly in their markup. It speeds up development while keeping designs consistent, clean and fully responsive.',
    },
    {
        name: 'Responsive Design',
        icon: MdDevices,
        color: '#FF7782',
        desc: 'Responsive design is the practice of building websites that look and work perfectly on any device whether a phone, tablet or desktop. It uses flexible layouts, media queries and fluid grids to adapt to any screen.',
    },
    {
        name: 'Git',
        icon: FaGitAlt,
        color: '#F05032',
        desc: 'Git is a version control system that tracks changes in code over time, manage versions and collaborate efficiently during development.',
    },
    {
        name: 'GitHub',
        icon: FaGithub,
        color: '#FFFF',
        desc: 'GitHub is a platform for hosting and sharing Git repositories. It allows developers to collaborate, showcase projects and manage code efficiently.',
    },
]

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-8 md:px-16 bg-rose">
            <div className="max-w-5xl mx-auto">
                <div className="reveal mb-16">
                    <p className="text-blush text-xs font-bold uppercase tracking-widest mb-3">Skills</p>
                    <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
                        Tools I bring to every project
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 reveal">
                    {[
                        ['1+', 'Year Experience'],
                        ['3', 'Projects Deployed'],
                        ['6', 'Technologies'],
                        ['100%', 'Dedication'],
                    ].map(([num, label]) => (
                        <div key={label} className="border border-white rounded-2xl p-5 text-center hover:border-blush/60 transition-all duration-300">
                            <div className="font-display font-black text-3xl text-white mb-1">{num}</div>
                            <div className="text-xs mt-2 text-white/50 font-medium">{label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 reveal">
                    {skills.map((skill) => {
                        const Icon = skill.icon
                        return (
                            <div
                                key={skill.name}
                                className="group relative border border-white/10 p-8 overflow-hidden transition-all duration-300"
                                style={{ '--glow-color': skill.color }}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{ background: skill.color }}
                                />
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        boxShadow: `inset 0 0 0 1px ${skill.color}`,
                                    }}
                                />
                                <div
                                    className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110 relative z-10"
                                    style={{ color: skill.color }}
                                >
                                    <Icon />
                                </div>
                                <h3
                                    className="font-display font-bold text-xl mb-4 relative z-10"
                                    style={{ color: skill.color }}
                                >
                                    {skill.name}
                                </h3>
                                <p className="text-white text-sm leading-relaxed relative z-10">
                                    {skill.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}