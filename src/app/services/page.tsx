'use client'
import { motion } from 'framer-motion'
import { Calendar, Camera, Heart, Users } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

const ServicesPage: FC = () => {
  const services = [
    {
      title: 'Wedding Photography',
      description:
        'Capture your special day with our comprehensive wedding photography packages. From the ceremony to the reception, we document every precious moment.',
      icon: Heart,
      image: 'VEE01288.jpg'
    },
    {
      title: 'Event Photography',
      description:
        'Professional coverage for corporate events, parties, and special occasions. We ensure every important moment is captured with style.',
      icon: Users,
      image: 'VEE06606.jpg'
    },
    {
      title: 'Portrait Sessions',
      description:
        'Individual, couple, or family portraits in our studio or at a location of your choice. Create lasting memories with professional portraits.',
      icon: Camera,
      image: 'VEE01255.jpg'
    },
    {
      title: 'Custom Packages',
      description:
        'Tailored photography services to meet your specific needs. Contact us to discuss your requirements and create a custom package.',
      icon: Calendar,
      image: 'VEE06586.jpg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-light text-stone-800 mb-12 text-center rouge-script-regular"
        >
          Our <span className="text-amber-700 italic">Services</span>
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12"
        >
          {services.map(service => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className="relative h-64"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`/images/${service.image}`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="p-8">
                <motion.div
                  className="flex items-center gap-4 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <service.icon className="h-6 w-6 text-amber-700" />
                  <h3 className="text-2xl font-light text-stone-800">
                    {service.title}
                  </h3>
                </motion.div>
                <p className="text-stone-600 leading-relaxed">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-2 bg-amber-700 text-white rounded-sm hover:bg-amber-800 transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-3xl font-light text-stone-800 mb-6 text-center"
          >
            Ready to Create{' '}
            <span className="text-amber-700 italic">Memories</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-stone-600 text-center max-w-2xl mx-auto mb-8"
          >
            Contact us to discuss your photography needs and let us help you
            capture your special moments with our professional services.
          </motion.p>
          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-amber-700 text-white rounded-sm hover:bg-amber-800 transition-colors duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesPage
