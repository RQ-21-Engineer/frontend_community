'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLightbulb, FaUsers, FaRocket, FaCode } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg" // Add a relevant image to your public folder
            alt="About Us Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6"
          >
            <h1 className="text-6xl font-bold mb-4">About Class RQ '21</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We are a dynamic group of Computer Science students, dedicated to learning
              and growing together in our academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: FaLightbulb, title: "Learning", description: "Embracing new knowledge and skills" },
              { icon: FaUsers, title: "Collaboration", description: "Supporting each other's growth" },
              { icon: FaRocket, title: "Achievement", description: "Striving for academic excellence" },
              { icon: FaCode, title: "Practice", description: "Hands-on programming experience" }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-zinc-900 rounded-xl border border-zinc-800"
              >
                <value.icon className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Our Class Story
              </h2>
              <p className="text-gray-300 mb-6">
                Established in 2021, our class began with a diverse group of aspiring 
                computer science students. We've grown together through challenging 
                coursework and exciting projects.
              </p>
              <p className="text-gray-300">
                Today, we're a close-knit community of future tech professionals, 
                supporting each other in our academic and personal growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <Image
                  src="/story-image.jpg" // Add this image to your public folder
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "30+", label: "Students" },
              { number: "20+", label: "Assignments" },
              { number: "50+", label: "Study Sessions" },
              { number: "500+", label: "Coffee Cups" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Class</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a freshman or a senior, there's always room to learn and 
              grow together. Let's make our academic journey memorable.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full
              hover:scale-105 transition-all duration-300">
              Join Class Group
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
