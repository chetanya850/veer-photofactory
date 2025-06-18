'use client'
import { Mail } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { FaInstagram } from 'react-icons/fa'

const Header: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-stone-200/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-between items-center py-5"
        >
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/Logo.png"
                alt="Veer Photofactory Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-light text-stone-800 tracking-wide">
              Veer Photofactory
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Services', path: '/services' },
              { name: 'Contact', path: '/contact' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 30
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                  delay: 0.1 + index * 0.15
                }}
              >
                <Link
                  href={item.path}
                  className="relative text-stone-600 hover:text-amber-700 font-light text-sm tracking-wide uppercase transition-all duration-300 group"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-5">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FaInstagram className="h-4 w-4 text-stone-500 hover:text-amber-700 cursor-pointer transition-all duration-300" />
            </motion.a>
            <motion.a
              href="mailto:contact@veerphotofactory.com"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="h-4 w-4 text-stone-500 hover:text-amber-700 cursor-pointer transition-all duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Header
