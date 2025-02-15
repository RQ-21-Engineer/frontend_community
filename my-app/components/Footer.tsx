import Link from "next/link";
import Image from "next/image";
import { 
  FaGithub, 
  FaDiscord, 
  FaInstagram, 
  FaYoutube, 
  FaArrowRight 
} from "react-icons/fa";

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: FaGithub, 
    href: 'https://github.com/rq21-se',
    hoverColor: 'hover:text-gray-100'
  },
  { 
    name: 'Discord', 
    icon: FaDiscord, 
    href: 'https://discord.gg/rq21se',
    hoverColor: 'hover:text-indigo-400'
  },
  { 
    name: 'Instagram', 
    icon: FaInstagram, 
    href: 'https://instagram.com/rq21.se',
    hoverColor: 'hover:text-pink-400'
  },
  { 
    name: 'YouTube', 
    icon: FaYoutube, 
    href: 'https://youtube.com/@rq21se',
    hoverColor: 'hover:text-red-400'
  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-8 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo3.svg" alt="RQ '21" width={40} height={40} />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                RQ '21
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Empowering the next generation of software engineers through community, learning, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/members', label: 'Our Members' },
                { href: '/projects', label: 'Projects' },
                { href: '/learning', label: 'Learning Path' },
              ].map(link => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-zinc-400 hover:text-blue-400 transition-colors flex items-center space-x-1 group"
                  >
                    <FaArrowRight className="text-sm transition-transform transform group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-4">
              {socialLinks.map(({ name, icon: Icon, href, hoverColor }) => (
                <li key={name}>
                  <a 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-zinc-400 ${hoverColor} transition-colors flex items-center space-x-3 group`}
                  >
                    <Icon className="text-xl transition-transform transform group-hover:scale-110" />
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-zinc-900 border border-zinc-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder:text-zinc-500"
              />
              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} RQ '21 Software Engineering Club. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
