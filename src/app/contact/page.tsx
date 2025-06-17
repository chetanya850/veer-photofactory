'use client'
import { motion } from 'framer-motion'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { FC, useState } from 'react'

const ContactPage: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

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
          Get in <span className="text-amber-700 italic">Touch</span>
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-light text-stone-800 mb-6"
            >
              Send us a Message
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'phone', label: 'Phone', type: 'tel' }
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-stone-700 mb-2"
                  >
                    {field.label}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required={field.type !== 'tel'}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-amber-700 text-white rounded-sm hover:bg-amber-800 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-light text-stone-800 mb-6"
              >
                Contact Information
              </motion.h2>
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { icon: Mail, text: 'contact@veerphotofactory.com' },
                  { icon: Phone, text: '+1 (555) 123-4567' },
                  {
                    icon: MapPin,
                    text: '123 Photography Street, City, Country'
                  },
                  { icon: Instagram, text: '@veerphotofactory' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4"
                  >
                    <item.icon className="h-5 w-5 text-amber-700" />
                    <span className="text-stone-600">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-light text-stone-800 mb-6"
              >
                Business Hours
              </motion.h2>
              <motion.div
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  'Monday - Friday: 9:00 AM - 6:00 PM',
                  'Saturday: 10:00 AM - 4:00 PM',
                  'Sunday: Closed'
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    variants={itemVariants}
                    className="text-stone-600"
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
