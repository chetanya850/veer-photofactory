'use client'
import Image from 'next/image'
import { FC, useState } from 'react'

const GalleryPage: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    'VEE06606.jpg',
    'VEE06586.jpg',
    'VEE06446.jpg',
    'VEE06139.jpg',
    'VEE06199.jpg',
    'VEE01288.jpg',
    'MEG06538.jpg',
    'VER06133.jpg',
    'VER05988.jpg',
    'VER03212.jpg',
    'VER02005.jpg',
    'MDS00524.jpg',
    'VEE01255.jpg',
    'VEE01203.jpg',
    'VEE02049.jpg',
    'VEE02039.jpg',
    'VEE01762.jpg'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-light text-stone-800 mb-12 text-center rouge-script-regular">
          Our <span className="text-amber-700 italic">Gallery</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={image}
              className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={`/images/${image}`}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full aspect-[3/4]">
              <Image
                src={`/images/${selectedImage}`}
                alt="Selected image"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryPage
