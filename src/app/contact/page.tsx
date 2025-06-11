'use client'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 pt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-light text-stone-800 mb-12 text-center rouge-script-regular">
          Get in <span className="text-amber-700 italic">Touch</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-light text-stone-800 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-700 text-white rounded-sm hover:bg-amber-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-light text-stone-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-amber-700" />
                  <span className="text-stone-600">
                    contact@veerphotofactory.com
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-amber-700" />
                  <span className="text-stone-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-amber-700" />
                  <span className="text-stone-600">
                    123 Photography Street, City, Country
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Instagram className="h-5 w-5 text-amber-700" />
                  <span className="text-stone-600">@veerphotofactory</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-light text-stone-800 mb-6">
                Business Hours
              </h2>
              <div className="space-y-2">
                <p className="text-stone-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-stone-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-stone-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
