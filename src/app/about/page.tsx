'use client'
import Image from 'next/image'
import { FC } from 'react'

const AboutPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-light text-stone-800 rouge-script-regular">
              About{' '}
              <span className="text-amber-700 italic">Veer Photofactory</span>
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              We are passionate photographers dedicated to capturing the most
              precious moments of your life. With years of experience in wedding
              and event photography, we blend artistic vision with technical
              expertise to create timeless memories.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Our approach combines candid moments with carefully composed
              portraits, ensuring we capture both the grand celebrations and the
              intimate details that make your special day unique.
            </p>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/VEE01255.jpg"
              alt="Photographer at work"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-light text-stone-800 mb-4">
              Our Vision
            </h3>
            <p className="text-stone-600">
              To capture authentic emotions and create visual stories that will
              be cherished for generations.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-light text-stone-800 mb-4">
              Our Mission
            </h3>
            <p className="text-stone-600">
              To provide exceptional photography services that exceed
              expectations and preserve precious memories.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-light text-stone-800 mb-4">
              Our Promise
            </h3>
            <p className="text-stone-600">
              Dedication to quality, attention to detail, and a commitment to
              capturing your unique story.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['VEE06606.jpg', 'VEE06586.jpg', 'VEE06446.jpg', 'VEE06139.jpg'].map(
            (image, index) => (
              <div
                key={image}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={`/images/${image}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
