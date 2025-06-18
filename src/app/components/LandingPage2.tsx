'use client'
import { ArrowRight, Heart } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

const LandingPage2: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Sample images for the carousel - you can replace these with your actual images
  const carouselImages = [
    '/images/VEE06199.jpg',
    '/images/VEE01255.jpg',
    '/images/VEE01288.jpg',
    '/images/VEE06606.jpg',
    '/images/VEE01762.jpg',
    '/images/VEE02039.jpg',
    '/images/VEE03197.jpg',
    '/images/VEE06527.jpg'
  ]

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Auto-play carousel
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % carouselImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [carouselImages.length])

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      prev => (prev - 1 + carouselImages.length) % carouselImages.length
    )
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-stone-200/30 to-amber-200/30 rounded-full blur-3xl"
            animate={{
              y: [0, 20, 0],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : -60
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center lg:text-left max-w-xl lg:max-w-none mx-auto"
            >
              <div className="mb-8">
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100/70 text-amber-800 text-xs font-medium mb-8 tracking-wide uppercase hover:bg-amber-200/70 transition-colors duration-300"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="h-3 w-3 mr-2" />
                  Wedding Photography
                </motion.div>

                <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8">
                  <motion.span
                    className="block text-stone-800 font-light mb-2 hover:text-amber-800 transition-colors duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    Capturing
                  </motion.span>
                  <motion.span
                    className="block text-amber-700 font-normal italic mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Love Stories
                  </motion.span>
                  <motion.span
                    className="block text-stone-800 font-light hover:text-amber-800 transition-colors duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    Forever
                  </motion.span>
                </h1>
              </div>

              <p className="text-lg text-stone-600 mb-10 leading-relaxed font-light">
                Creating timeless memories of your most precious moments with
                artistic vision, authentic emotion, and unparalleled attention
                to detail.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/gallery"
                    className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-sm font-light text-sm tracking-wide uppercase hover:shadow-lg hover:shadow-amber-600/25 flex items-center justify-center relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">View Gallery</span>
                    <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/services"
                    className="border border-stone-300 text-stone-700 px-8 py-4 rounded-sm font-light text-sm tracking-wide uppercase hover:bg-stone-50 transition-all duration-300 block"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Animated Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : 60
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <motion.div
                    className="aspect-[3/4] bg-stone-200 rounded-sm overflow-hidden shadow-sm"
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/images/VEE06199.jpg"
                      alt="Wedding Ceremony"
                      width={1000}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="aspect-[4/5] bg-stone-200 rounded-sm overflow-hidden shadow-sm"
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/images/VEE01255.jpg"
                      alt="Couple Portrait"
                      width={1000}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                <div className="space-y-6 mt-8">
                  <motion.div
                    className="aspect-[4/5] bg-stone-200 rounded-sm overflow-hidden shadow-sm"
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/images/VEE01288.jpg"
                      alt="Wedding Reception"
                      width={1000}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="aspect-[3/4] bg-stone-200 rounded-sm overflow-hidden shadow-sm"
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/images/VEE06606.jpg"
                      alt="Wedding Details"
                      width={1000}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 60 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-stone-800 mb-6">
              Our Latest
              <span className="text-amber-700 font-normal italic">
                {' '}
                Moments
              </span>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
              Discover the beauty and emotion captured in our most recent
              photography sessions
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <div className="relative h-[500px] lg:h-[600px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={carouselImages[currentImageIndex]}
                      alt={`Wedding Photography ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6 text-stone-700 group-hover:text-amber-700 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6 text-stone-700 group-hover:text-amber-700 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
              {carouselImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-light">
              {currentImageIndex + 1} / {carouselImages.length}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage2
