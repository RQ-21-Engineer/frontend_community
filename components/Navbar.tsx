import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo3.09793be1157929fdb87ed85ea9899a4a.svg";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="RQ '21 Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-bold text-xl">RQ &apos;21</span>
        </Link>

        <div className="flex space-x-8">
          {[
            { href: "/about", label: "About Us" },
            { href: "/#social-media", label: "Social Media" },
            { href: "/members", label: "Members" },
            { href: "/gallery", label: "Gallery" },
            { href: "/learning", label: "Learning Path" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-300 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
