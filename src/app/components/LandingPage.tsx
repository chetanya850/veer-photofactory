'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Facebook, Heart, Instagram, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const LandingPage: FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' }
  }

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden pb-16">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-rose-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Image
                src="/images/Logo.png"
                alt="Veer Photofactory Logo"
                width={32}
                height={32}
                // className="h-8 w-8"
              />
              {/* <span className="h-8 w-8 text-rose-500 bg-[url(/images/Logo)]" /> */}
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                Veer Photofactory
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Gallery', 'Services', 'Contact'].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-rose-500 transition-colors duration-300 font-medium"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Instagram className="h-5 w-5 text-gray-600 hover:text-rose-500 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-600 hover:text-rose-500 cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-gray-600 hover:text-rose-500 cursor-pointer transition-colors" />
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full opacity-20 blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full opacity-20 blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-4">
                  <Heart className="h-4 w-4 mr-2" />
                  Wedding Photography
                </span>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-gray-900 font-serif">
                    Capturing
                  </span>
                  <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent font-script">
                    Love Stories
                  </span>
                  <span className="block text-gray-900 font-serif">
                    Forever
                  </span>
                </h1>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
              >
                Creating timeless memories of your most precious moments with
                artistic vision, authentic emotion, and unparalleled attention
                to detail.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/gallery">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(244, 63, 94, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                  >
                    View Gallery
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* <motion.div
                variants={fadeInUp}
                className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Weddings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">5</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center flex items-center">
                  <div className="text-3xl font-bold text-gray-900 mr-2">
                    5.0
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </motion.div> */}
            </motion.div>

            {/* Right Content - Image Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 transform rotate-3">
                <motion.div
                  variants={slideInLeft}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.7 }}
                  className="space-y-4"
                >
                  <div className="h-48 bg-gradient-to-br from-rose-200 to-pink-300 rounded-2xl shadow-xl overflow-hidden relative">
                    <Image
                      src="/images/MEG06538.jpg"
                      alt="Beautiful wedding ceremony moment"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="h-64 bg-gradient-to-br from-pink-200 to-rose-300 rounded-2xl shadow-xl overflow-hidden relative">
                    <Image
                      src="/images/MDS00524.jpg"
                      alt="Romantic couple portrait"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInRight}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.9 }}
                  className="space-y-4 mt-8"
                >
                  <div className="h-64 bg-gradient-to-br from-rose-300 to-pink-200 rounded-2xl shadow-xl overflow-hidden relative">
                    <Image
                      src="/images/VEE01762.jpg"
                      alt="Wedding reception celebration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="h-48 bg-gradient-to-br from-pink-300 to-rose-200 rounded-2xl shadow-xl overflow-hidden relative">
                    <Image
                      src="/images/VEE06586.jpg"
                      alt="Wedding detail shots"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              {/* <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg"
              >
                <Heart className="h-8 w-8 text-rose-500" />
              </motion.div> */}

              {/* <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg"
              >
                <Camera className="h-6 w-6 text-pink-500" />
              </motion.div> */}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
          </motion.div>
        </motion.div> */}
      </section>
    </div>
  )
}

export default LandingPage
