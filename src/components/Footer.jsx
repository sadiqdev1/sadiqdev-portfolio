import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/dev-anna-life' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/annastesia-amarachi-ugwuanyi-3318a3390/?' },
  { icon: <FaTwitter />, label: 'Twitter', href: 'https://x.com/Dev_Anna20/' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/devanna_22?' },
  { icon: <FaFacebook />, label: 'Facebook', href: 'https://www.facebook.com/profile.php?' },
  { icon: <FaTiktok />, label: 'Tiktok', href: 'https://www.tiktok.com/@itsanna136?' },
]

export default function Footer() {
  
  return (
    <footer className="px-8 md:px-16 py-8 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        <span className="font-display font-black text-xl text-rose">
          Dev Anna<span className="text-blush">.</span>
        </span>

        <div className="flex gap-3">
          {socials.map(s => (

            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              className="w-10 h-10 rounded-full border border-rose text-white text-base bg-rose flex items-center justify-center hover:-translate-y-1 hover:bg-blush hover:border-blush transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <span className="text-rose text-xs">
          © 2025 Ugwuanyi Annastesia Amarachi
        </span>

      </div>
    </footer>
  )
}