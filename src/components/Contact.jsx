import { useState } from "react"
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa"

const EMAILJS_SERVICE_ID = 'service_08ppscs'
const EMAILJS_TEMPLATE_ID = 'template_65l6x9e'
const EMAILJS_PUBLIC_KEY = 'Hk863i4zkcRGIr0im'

const socials = [
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/dev-anna-life' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/annastesia-amarachi-ugwuanyi-3318a3390/' },
    { icon: <FaTwitter />, label: 'Twitter', href: 'https://x.com/Dev_Anna20/' },
    { icon: <FaInstagram />, label: 'Instagram', href: '#' },
    { icon: <FaFacebook />, label: 'Facebook', href: '#' },
    { icon: <FaTiktok />, label: 'Tiktok', href: '#' },
    { icon: <FaWhatsapp />, label: 'Whatsapp', href: 'https://wa.me/2348146790636' },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle')

    const validate = () => {
        const newErrors = {}
        if (!form.name.trim()) newErrors.name = 'Name is required'
        if (!form.email.trim()) newErrors.email = 'Email is Required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email'
        if (!form.subject.trim()) newErrors.subject = 'Subject is required'
        if (!form.message.trim()) newErrors.message = 'Message is required'
        else if (form.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters'
        return newErrors
    }

    const handleChange = e => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const newErrors = validate()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setStatus('loading')

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,

                },
                EMAILJS_PUBLIC_KEY
            )
            setStatus('success')
            setForm({
                name: '', email: '', subject: '',
                message: ''
            })
            setErrors({})
            setTimeout(() => setStatus('idle'), 6000)
        } catch (err) {
            console.error(err)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }

    }


    return (
        <>

            <a
                href="https://wa.me/2348146790636"
                target="_blank"
                rel="noreferrer"
                title="Chat on WhatsApp"
                className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 hover:bg-green-600 transition-all duration-200 animate-float"
            >
                <FaWhatsapp />
            </a>

            <section id="contact" className="py-24 px-8 md:px-16 bg-blush">
                <div className="max-w-2xl mx-auto reveal">

                    <div className="text-center mb-12">
                        <span className="text-5xl animate-float block mb-6">✉️</span>
                        <p className="text-white text-xs font-bold uppercase tracking-widest mb-3">Contact</p>
                        <h2 className="font-display font-black text-4xl md:text-4xl text-rose leading-tight mb-3">
                            Let's create something amazing
                        </h2>
                        <p className="text-white">
                            Got a project, an idea, or just want to say hi? I'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">

                        <a
                            href="https://mail.google.com/mail/?view=cm&to=annastesiaaugwuanyi@gmail.com"
                            className="flex items-center gap-4 bg-white border border-blush/15 rounded-2xl px-5 py-4 hover:-translate-y-1 hover:shadow-md hover:shadow-blush/10 transition-all duration-300 group"
                        >
                            <div className="w-11 h-11 rounded-full bg-blush/10 flex items-center justify-center text-blush text-lg group-hover:bg-blush group-hover:text-white transition-all duration-200">
                                <FaEnvelope />
                            </div>
                            <div>
                                <div className="text-xs text-rose/50 font-semibold uppercase tracking-wide mb-0.5">Email</div>
                                <div className="text-sm font-semibold text-rose">annastesiaugwuanyi@gmail.com</div>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/8146790636"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-4 bg-white border border-blush/15 rounded-2xl px-5 py-4 hover:-translate-y-1 hover:shadow-md hover:shadow-blush/10 transition-all duration-300 group"
                        >
                            <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center text-green-500 text-lg group-hover:bg-green-500 group-hover:text-white transition-all duration-200">
                                <FaWhatsapp />
                            </div>
                            <div>
                                <div className="text-xs text-rose/50 font-semibold uppercase tracking-wide mb-0.5">WhatsApp</div>
                                <div className="text-sm font-semibold text-rose">+234 8146790636</div>
                            </div>
                        </a>
                    </div>

                    {status === 'success' && (
                        <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl px-6 py-4 text-sm font-semibold text-center mb-6 animate-fadeUp">
                            Message sent successfully! I'll get back to you soon.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-500 rounded-2xl px-6 py-4 text-sm font-semibold text-center mb-6 animate-fadeUp">
                            Something went wrong. Please try again or email me directly.
                        </div>
                    )}

                    <form
                        className="bg-white rounded-3xl p-8 shadow-sm border border-blush/15 flex flex-col gap-5"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-semibold text-rose uppercase tracking-wide">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className={`px-4 py-3 rounded-xl border text-sm outline-none transition-colors bg-white text-rose placeholder:text-rose/30 ${errors.name ? 'border-red-400 bg-red-50' : 'border-blush/25 focus:border-blush'}`}
                                />
                                {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-semibold text-rose uppercase tracking-wide">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className={`px-4 py-3 rounded-xl border text-sm outline-none transition-colors bg-white text-rose placeholder:text-rose/30 ${errors.email ? 'border-red-400 bg-red-50' : 'border-blush/25 focus:border-blush'}`}
                                />
                                {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-rose uppercase tracking-wide">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="What's this about?"
                                className={`px-4 py-3 rounded-xl border text-sm outline-none transition-colors bg-white text-rose placeholder:text-rose/30 ${errors.subject ? 'border-red-400 bg-red-50' : 'border-blush/25 focus:border-blush'}`}
                            />
                            {errors.subject && <span className="text-red-400 text-xs">{errors.subject}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-semibold text-rose uppercase tracking-wide">
                                Message
                            </label>
                            <textarea
                                rows={6}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project or idea..."
                                className={`px-4 py-3 rounded-xl border text-sm outline-none transition-colors bg-white text-rose placeholder:text-rose/30 resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-blush/25 focus:border-blush'}`}
                            />
                            {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="bg-blush text-white py-4 rounded-xl font-display font-bold text-base hover:bg-rose transition-colors duration-200 mt-1 w-full"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="flex justify-center gap-3 mt-10">
                        {socials.map(s => (

                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                title={s.label}
                                className="w-11 h-11 rounded-full border border-blush/20 bg-white text-rose text-lg flex items-center justify-center hover:-translate-y-1 hover:bg-blush hover:text-white hover:border-blush transition-all duration-200"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>

                </div>
            </section >
        </>
    )
}