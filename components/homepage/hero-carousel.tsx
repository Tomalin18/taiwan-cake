'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const heroSlides = [
  {
    id: 1,
    title: '台灣糕點百選',
    subtitle: '傳承百年的糕餅文化',
    description: '嚴選台灣各地優質糕餅品牌，每一份都承載著職人精神與文化傳承',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=600&fit=crop',
    cta: '立即選購',
    href: '/products'
  },
  {
    id: 2,
    title: '精選品牌故事',
    subtitle: '每個品牌都有獨特的故事',
    description: '從百年老店到創新品牌，探索台灣糕餅文化的豐富多元',
    image: 'https://images.unsplash.com/photo-1464195643916-2f8fe5b84a2f?w=1200&h=600&fit=crop',
    cta: '了解更多',
    href: '/brands'
  },
  {
    id: 3,
    title: '節慶禮盒專區',
    subtitle: '用心意傳達溫暖',
    description: '精心策劃的節慶禮盒，讓您的心意在每個重要時刻都能完美傳達',
    image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=1200&h=600&fit=crop',
    cta: '選購禮盒',
    href: '/festival-gifts'
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="relative overflow-hidden rounded-lg bg-amber-50">
      <div className="relative h-[500px] md:h-[600px]">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl mb-6 text-amber-200">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
                  >
                    <a href={slide.href}>
                      {slide.cta}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}