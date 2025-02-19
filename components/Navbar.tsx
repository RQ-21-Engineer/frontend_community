'use client'

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "@/public/logo3.09793be1157929fdb87ed85ea9899a4a.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigationLinks = [
    { href: "/about", label: "About Us" },
    { href: "/#social-media", label: "Social Media" },
    { href: "/members", label: "Members" },
    { href: "/gallery", label: "Gallery" },
    { href: "/learning", label: "Learning Path" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 text-white border-b border-zinc-800 z-50
      ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black backdrop-blur-none'}`}>
      <div ref={menuRef} className="max-w-7xl mx-auto flex justify-between items-center p-6">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-300 hover:text-blue-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-300 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-zinc-800 p-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-300 hover:text-blue-400 transition-colors px-4 py-2 rounded-lg hover:bg-zinc-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
