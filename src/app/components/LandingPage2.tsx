'use client'
import { ArrowRight, Heart, Instagram, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

const LandingPage2: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes staggerFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-stagger-1 {
          animation: staggerFadeIn 0.8s ease-out 0.1s forwards;
          opacity: 0;
        }

        .animate-stagger-2 {
          animation: staggerFadeIn 0.8s ease-out 0.25s forwards;
          opacity: 0;
        }

        .animate-stagger-3 {
          animation: staggerFadeIn 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-stagger-4 {
          animation: staggerFadeIn 0.8s ease-out 0.55s forwards;
          opacity: 0;
        }

        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(to right, #d97706, #ea580c);
          transition: width 0.3s ease;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .hero-image {
          transition: transform 0.5s ease, box-shadow 0.3s ease;
        }

        .hero-image:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .btn-primary {
          background: linear-gradient(135deg, #d97706, #ea580c);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-secondary {
          transition: all 0.3s ease;
          position: relative;
        }

        .btn-secondary:hover {
          background-color: #f5f5f4;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div
            className={`flex justify-between items-center py-5 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-sm">V</span>
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
                <Link
                  key={item.name}
                  href={item.path}
                  className={`nav-item text-stone-600 hover:text-amber-700 font-light text-sm tracking-wide uppercase ${
                    isVisible ? `animate-stagger-${index + 1}` : 'opacity-0'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4 text-stone-500 hover:text-amber-700 cursor-pointer transition-all duration-300 hover:scale-110" />
              </a>
              <a href="mailto:contact@veerphotofactory.com">
                <Mail className="h-4 w-4 text-stone-500 hover:text-amber-700 cursor-pointer transition-all duration-300 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"
            style={{
              animation: 'float 25s ease-in-out infinite'
            }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-stone-200/30 to-amber-200/30 rounded-full blur-3xl"
            style={{
              animation: 'float 30s ease-in-out infinite reverse'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div
              className={`text-center lg:text-left max-w-xl lg:max-w-none mx-auto ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
            >
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100/70 text-amber-800 text-xs font-medium mb-8 tracking-wide uppercase hover:bg-amber-200/70 transition-colors duration-300">
                  <Heart className="h-3 w-3 mr-2 animate-pulse" />
                  Wedding Photography
                </div>

                <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8">
                  <span className="block text-stone-800 font-light mb-2 hover:text-amber-800 transition-colors duration-500">
                    Capturing
                  </span>
                  <span className="block text-amber-700 font-normal italic mb-2 hover:scale-105 transition-transform duration-300 inline-block">
                    Love Stories
                  </span>
                  <span className="block text-stone-800 font-light hover:text-amber-800 transition-colors duration-500">
                    Forever
                  </span>
                </h1>
              </div>

              <p className="text-lg text-stone-600 mb-10 leading-relaxed font-light">
                Creating timeless memories of your most precious moments with
                artistic vision, authentic emotion, and unparalleled attention
                to detail.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/gallery"
                  className="group btn-primary text-white px-8 py-4 rounded-sm font-light text-sm tracking-wide uppercase hover:shadow-lg hover:shadow-amber-600/25 flex items-center justify-center"
                >
                  View Gallery
                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  href="/services"
                  className="btn-secondary border border-stone-300 text-stone-700 px-8 py-4 rounded-sm font-light text-sm tracking-wide uppercase"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Content - Animated Image Grid */}
            <div
              className={`relative ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="hero-image aspect-[3/4] bg-stone-200 rounded-sm overflow-hidden shadow-sm">
                    <Image
                      src="/images/VEE06199.jpg"
                      alt="Wedding Ceremony"
                      width={1000}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="hero-image aspect-[4/5] bg-stone-200 rounded-sm overflow-hidden shadow-sm">
                    <Image
                      src="/images/VEE01255.jpg"
                      alt="Couple Portrait"
                      width={1000}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  <div className="hero-image aspect-[4/5] bg-stone-200 rounded-sm overflow-hidden shadow-sm">
                    <Image
                      src="/images/VEE01288.jpg"
                      alt="Wedding Reception"
                      width={1000}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="hero-image aspect-[3/4] bg-stone-200 rounded-sm overflow-hidden shadow-sm">
                    <Image
                      src="/images/VEE06606.jpg"
                      alt="Wedding Details"
                      width={1000}
                      height={150}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Animated Floating Element */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg cursor-pointer"
                style={{ animation: 'pulse 4s ease-in-out infinite' }}
              >
                <Heart className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage2
