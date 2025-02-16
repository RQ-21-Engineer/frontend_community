'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample gallery data - replace with your actual images
const galleryItems = [
  {
    id: 1,
    title: 'Class Photo 2021',
    description: 'First day of our journey together',
    image: '/gallery/class-photo.jpg',
    category: 'Class Photos'
  },
  {
    id: 2,
    title: 'Coding Competition',
    description: 'Annual hackathon event',
    image: '/gallery/coding-event.jpg',
    category: 'Events'
  },
  // Add more gallery items as needed
];

const categories = ['All', 'Class Photos', 'Events', 'Study Sessions', 'Campus Life'];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white py-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-black py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Capturing moments and memories throughout our academic journey
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-zinc-900 text-zinc-400 hover:bg-purple-600/20 hover:text-purple-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredImages.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.03 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-square relative overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={24} />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
                const prevImage = galleryItems[currentIndex - 1];
                if (prevImage) setSelectedImage(prevImage.id);
              }}
            >
              <FaChevronLeft size={24} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
                const nextImage = galleryItems[currentIndex + 1];
                if (nextImage) setSelectedImage(nextImage.id);
              }}
            >
              <FaChevronRight size={24} />
            </button>

            <div className="relative max-w-4xl max-h-[80vh] w-full aspect-video">
              {galleryItems.find(item => item.id === selectedImage) && (
                <Image
                  src={galleryItems.find(item => item.id === selectedImage)!.image}
                  alt={galleryItems.find(item => item.id === selectedImage)!.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
