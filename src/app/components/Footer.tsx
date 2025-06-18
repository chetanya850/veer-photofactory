'use client'
import { Mail } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { FaInstagram } from 'react-icons/fa'

const Footer: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 60 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
              className="mb-6"
            >
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/images/Logo.png"
                    alt="Veer Photofactory Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-light text-white tracking-wide">
                  Veer Photofactory
                </span>
              </Link>
              <p className="text-stone-300 font-light leading-relaxed mb-4 text-sm">
                Capturing life&apos;s most precious moments with artistic vision
                and authentic emotion. Every photograph tells a story, and
                we&apos;re here to tell yours.
              </p>
              <div className="flex space-x-3">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram className="h-3 w-3 text-white group-hover:text-white transition-colors duration-300" />
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="h-3 w-3 text-white group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="h-3 w-3 text-white group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="mailto:contact@veerphotofactory.com"
                  className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="h-3 w-3 text-white group-hover:text-white transition-colors duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.1 }}
          >
            <h3 className="text-base font-light text-white mb-4 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : -20
                  }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                    delay: 1.2 + index * 0.1
                  }}
                >
                  <Link
                    href={link.path}
                    className="text-stone-300 hover:text-amber-400 font-light transition-colors duration-300 relative group text-sm"
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
          >
            <h3 className="text-base font-light text-white mb-4 tracking-wide uppercase">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                'Wedding Photography',
                'Engagement Sessions',
                'Portrait Photography',
                'Event Coverage',
                'Photo Albums',
                'Video Services'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : -20
                  }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                    delay: 1.4 + index * 0.1
                  }}
                  className="text-stone-300 font-light text-sm"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}
          >
            <h3 className="text-base font-light text-white mb-4 tracking-wide uppercase">
              Contact Info
            </h3>
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.6 }}
                className="flex items-start space-x-3"
              >
                <div className="w-4 h-4 mt-0.5">
                  <svg
                    className="w-4 h-4 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-stone-300 font-light text-sm">
                    123 Photography Lane
                  </p>
                  <p className="text-stone-300 font-light text-sm">
                    Creative District, CD 12345
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.7 }}
                className="flex items-center space-x-3"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <a
                  href="mailto:contact@veerphotofactory.com"
                  className="text-stone-300 hover:text-amber-400 font-light transition-colors duration-300 text-sm"
                >
                  contact@veerphotofactory.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.8 }}
                className="flex items-center space-x-3"
              >
                <svg
                  className="w-4 h-4 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+1234567890"
                  className="text-stone-300 hover:text-amber-400 font-light transition-colors duration-300 text-sm"
                >
                  +1 (234) 567-8900
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 2 }}
          className="border-t border-stone-700 mt-8 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-stone-400 font-light text-xs">
              © 2024 Veer Photofactory. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs">
              <Link
                href="/privacy"
                className="text-stone-400 hover:text-amber-400 font-light transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-stone-400 hover:text-amber-400 font-light transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-stone-400 hover:text-amber-400 font-light transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
