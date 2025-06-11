'use client'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 pt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-light text-stone-800 mb-12 text-center rouge-script-regular">
          Our <span className="text-amber-700 italic">Services</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map(service => (
            <div
              key={service.title}
              className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={`/images/${service.image}`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="h-6 w-6 text-amber-700" />
                  <h3 className="text-2xl font-light text-stone-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-6 px-6 py-2 bg-amber-700 text-white rounded-sm hover:bg-amber-800 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-light text-stone-800 mb-6 text-center">
            Ready to Create{' '}
            <span className="text-amber-700 italic rouge-script-regular">
              Memories
            </span>
            ?
          </h2>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-8">
            Contact us to discuss your photography needs and let us help you
            capture your special moments with our professional services.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-amber-700 text-white rounded-sm hover:bg-amber-800 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
