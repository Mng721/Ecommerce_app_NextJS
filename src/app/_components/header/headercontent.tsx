"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Card, CardContent } from "~/components/ui/card"
import { Button } from '~/components/ui/button'


const HeaderContent = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const categories = [
    "Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle",
    "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets",
    "Health & Beauty"
  ]

  const slides = [
    {
      title: "iPhone 16 Series",
      description: "Up to 10% off Voucher",
      image: "https://utfs.io/f/GzuQWehHg8N7bW9v6xqX6tOdErfc8IHwieGCqJb27pSKFoYD",
      logo: "/placeholder.svg",
    },
    {
      title: "Samsung Galaxy S23",
      description: "Get 15% cashback on Samsung",
      image: "https://utfs.io/f/GzuQWehHg8N79x6idKr8VCw76ugnHZdeBMThJGoUbzP3aqmk",
      logo: "/placeholder.svg",
    },
    {
      title: "MacBook Air M2",
      description: "Free AirPods with purchase",
      image: "https://bizweb.dktcdn.net/100/444/581/products/apple-macbook-pro-14-16-inch-jpeg-b2dc7a7d-d44c-4d26-ad51-a97756e6e9a7.jpg?v=1709350560137",
      logo: "/placeholder.svg",
    },
    {
      title: "Sony PlayStation 5",
      description: "Save $50 on selected bundles",
      image: "https://images2.thanhnien.vn/528068263637045248/2023/10/12/playstation-5-new-look-ps5-slim-1697089426045463180820.jpg",
      logo: "/placeholder.svg",
    },
    {
      title: "Nintendo Switch OLED",
      description: "Buy now, pay later with 0% APR",
      image: "https://sb.tinhte.vn/2021/10/5687010_cover_home_nintendo_switch_oled_1.jpg",
      logo: "/placeholder.svg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 mb-8 md:mb-0 md:mr-8 ">
        <nav>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-between p-2 hover:bg-accent rounded-md">
                  {category}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <section className="flex-1">
        <div className="relative md:h-full">
          <Card className="bg-black text-white overflow-hidden md:h-full">
            <CardContent className="p-0 md:h-full">
              <div className="relative h-[400px] md:h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                      } `}
                  >
                    <img src={slide.image} alt={`${slide.title}-img`} className='w-full h-full object-cover absolute' width={"auto"} height={"auto"} />
                    <div className="p-4 md:p-8 flex flex-col md:flex-row items-center justify-between h-full">
                      <div className="mb-4 md:mb-0 z-10 ml-6">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{slide.title}</h2>
                        <p className="text-xl md:text-3xl font-semibold mb-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{slide.description}</p>
                        <Button variant="outline" className="text-black hover:bg-gray-300 hover:text-black">
                          Shop Now <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                onClick={() => setCurrentSlide(index)}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HeaderContent
