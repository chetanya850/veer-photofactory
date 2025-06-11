'use client'
import { AnimatePresence, motion } from 'framer-motion'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  // Group images into sets of 3 for collage layout
  const imageGroups = []
  for (let i = 0; i < images.length; i += 3) {
    imageGroups.push(images.slice(i, i + 3))
  }

  const SmokeOverlay = () => (
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-black/40 via-transparent to-gray-600/30"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-2 left-2 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-4 right-4 w-12 h-12 bg-white/5 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-8 h-8 bg-white/8 rounded-full blur-md animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-white/6 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>
    </div>
  )

  const renderCollageGroup = (group: string[], groupIndex: number) => {
    const isEvenGroup = groupIndex % 2 === 0

    return (
      <motion.div
        key={groupIndex}
        variants={itemVariants}
        className={`grid gap-2 sm:gap-4 ${
          isEvenGroup ? 'grid-cols-2' : 'grid-cols-2'
        } h-[300px] sm:h-[400px] lg:h-[600px]`}
      >
        {isEvenGroup ? (
          // Even groups: Large image on left, two small on right
          <>
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              onClick={() => setSelectedImage(group[0])}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Image
                  src={`/images/${group[0]}`}
                  alt="Gallery image"
                  fill
                  className="object-cover transition-transform duration-700"
                />
              </motion.div>
              <SmokeOverlay />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <span className="text-white font-light text-sm sm:text-lg lg:text-2xl tracking-widest uppercase drop-shadow-lg">
                  Preview
                </span>
              </motion.div>
            </motion.div>

            <div className="flex flex-col gap-2 sm:gap-4">
              {group.slice(1, 3).map((image, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className="relative flex-1 rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-400 cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <Image
                      src={`/images/${image}`}
                      alt="Gallery image"
                      fill
                      className="object-cover transition-transform duration-600"
                    />
                  </motion.div>
                  <SmokeOverlay />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <span className="text-white font-light text-xs sm:text-sm lg:text-lg tracking-widest uppercase drop-shadow-lg">
                      Preview
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          // Odd groups: Two small on left, large on right
          <>
            <div className="flex flex-col gap-2 sm:gap-4">
              {group.slice(0, 2).map((image, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className="relative flex-1 rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-400 cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <Image
                      src={`/images/${image}`}
                      alt="Gallery image"
                      fill
                      className="object-cover transition-transform duration-600"
                    />
                  </motion.div>
                  <SmokeOverlay />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <span className="text-white font-light text-xs sm:text-sm lg:text-lg tracking-widest uppercase drop-shadow-lg">
                      Preview
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {group[2] && (
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                onClick={() => setSelectedImage(group[2])}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <Image
                    src={`/images/${group[2]}`}
                    alt="Gallery image"
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                </motion.div>
                <SmokeOverlay />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  <span className="text-white font-light text-sm sm:text-lg lg:text-2xl tracking-widest uppercase drop-shadow-lg">
                    Preview
                  </span>
                </motion.div>
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 pt-16 sm:pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-stone-800 mb-2 sm:mb-4 rouge-script-regular">
            Our <span className="text-amber-700 italic">Gallery</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto sm:w-[100px]"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8 lg:space-y-12"
        >
          {imageGroups.map((group, groupIndex) =>
            renderCollageGroup(group, groupIndex)
          )}
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.7, opacity: 0, rotate: 5 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative max-w-5xl w-full aspect-[3/4] rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <Image
                  src={`/images/${selectedImage}`}
                  alt="Selected image"
                  fill
                  className="object-contain"
                />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-3 right-3 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-amber-400 hover:bg-white/30 transition-all duration-300"
                  onClick={() => setSelectedImage(null)}
                >
                  <span className="text-sm sm:text-base">✕</span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default GalleryPage
