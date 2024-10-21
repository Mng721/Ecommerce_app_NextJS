'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from 'lucide-react'
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardFooter } from "~/components/ui/card"

type Product = {
    id: number
    name: string
    price: number
    imageUrl: string
}

const products: Product[] = [
    { id: 1, name: "Dixie Senger", price: 560.00, imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Marc Hoppe", price: 150.00, imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Miss Clay Hintz", price: 220.00, imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Marty Koch", price: 251.00, imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "Carroll Huel", price: 777.00, imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "Rochelle Kertzmann II", price: 706.00, imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: 7, name: "Emma Johnson", price: 450.00, imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: 8, name: "Liam Smith", price: 320.00, imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: 9, name: "Olivia Brown", price: 590.00, imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: 10, name: "Noah Davis", price: 410.00, imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: 11, name: "Ava Wilson", price: 680.00, imageUrl: "/placeholder.svg?height=200&width=200" },
    { id: 12, name: "Ethan Moore", price: 340.00, imageUrl: "/placeholder.svg?height=200&width=200" },
]

export default function Component() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [countdown, setCountdown] = useState({ days: 70, hours: 15, minutes: 42, seconds: 5 })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 }
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
                } else {
                    clearInterval(timer)
                    return prev
                }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const groupedProducts = products.reduce((acc, product, index) => {
        const groupIndex = Math.floor(index / 8)
        if (!acc[groupIndex]) {
            acc[groupIndex] = []
        }
        acc[groupIndex].push(product)
        return acc
    }, [] as Product[][])

    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Today's Flash Sales</h2>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    {Object.entries(countdown).map(([unit, value], index, array) => (
                        <React.Fragment key={unit}>
                            <div className="text-center">
                                <div className="text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
                                <div className="text-sm">{unit}</div>
                            </div>
                            {index < array.length - 1 && <span className="text-3xl font-bold">:</span>}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={scrollPrev} aria-label="Previous slide">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={scrollNext} aria-label="Next slide">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {groupedProducts.map((group, groupIndex) => (
                        <div key={groupIndex} className="flex-[0_0_100%] min-w-0">
                            <div className="grid grid-cols-4 gap-4">
                                {group.map((product) => (
                                    <Card key={product.id}>
                                        <CardContent className="p-4">
                                            <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover mb-4" />
                                            <h3 className="font-semibold truncate">{product.name}</h3>
                                            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <Button variant="outline" size="icon" aria-label={`Add ${product.name} to favorites`}>
                                                <Heart className="h-4 w-4" />
                                            </Button>
                                            <Button size="sm">
                                                <ShoppingCart className="h-4 w-4 mr-2" />
                                                Add to Cart
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}