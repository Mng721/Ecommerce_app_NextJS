"use client"

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "~/components/ui/carousel"
import ProductCard from "../../productcard"
import { useCallback, useState } from "react"
import { Button } from "~/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Mock product data
const products = [
    { id: 1, name: "Product 1", price: 19.99, rating: 4.5, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Product 2", price: 29.99, rating: 4.0, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Product 3", price: 39.99, rating: 4.8, image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Product 4", price: 49.99, rating: 3.5, image: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "Product 5", price: 59.99, rating: 5.0, image: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "Product 6", price: 69.99, rating: 4.2, image: "/placeholder.svg?height=200&width=200" },
    { id: 7, name: "Product 7", price: 79.99, rating: 4.7, image: "/placeholder.svg?height=200&width=200" },
    { id: 8, name: "Product 8", price: 89.99, rating: 3.8, image: "/placeholder.svg?height=200&width=200" },
    { id: 9, name: "Product 9", price: 99.99, rating: 4.9, image: "/placeholder.svg?height=200&width=200" },
    { id: 10, name: "Product 10", price: 109.99, rating: 4.1, image: "/placeholder.svg?height=200&width=200" },
    { id: 11, name: "Product 10", price: 109.99, rating: 4.1, image: "/placeholder.svg?height=200&width=200" },
    { id: 12, name: "Product 10", price: 109.99, rating: 4.1, image: "/placeholder.svg?height=200&width=200" },
    { id: 13, name: "Product 10", price: 109.99, rating: 4.1, image: "/placeholder.svg?height=200&width=200" },
    { id: 14, name: "Product 10", price: 109.99, rating: 4.1, image: "/placeholder.svg?height=200&width=200" },
    { id: 14, name: "Product 10", price: 109.99, rating: 4.1, image: "/placeholder.svg?height=200&width=200" },
    { id: 14, name: "Product 10", price: 109.99, rating: 4.1, image: "/placeholder.svg?height=200&width=200" },
    { id: 14, name: "Product 10", price: 109.99, rating: 4.1, image: "/placeholder.svg?height=200&width=200" },
    { id: 14, name: "Product 10", price: 109.99, rating: 4.1, image: "/placeholder.svg?height=200&width=200" },
    { id: 14, name: "Product 10", price: 109.99, rating: 4.1, image: "/placeholder.svg?height=200&width=200" },
    { id: 14, name: "Product 10", price: 109.99, rating: 4.1, image: "/placeholder.svg?height=200&width=200" },
    // Add more products as needed
]

export default function OurProduct() {
    const [api, setApi] = useState<CarouselApi>()
    const itemsPerPage = 10
    const totalPages = Math.ceil(products.length / itemsPerPage)

    //Scroll pre func
    const scrollPrev = useCallback(() => {
        if (api) api.scrollPrev()
    }, [api])

    //Scroll next func
    const scrollNext = useCallback(() => {
        if (api) api.scrollNext()
    }, [api])
    return (
        <Carousel className="container mx-auto" setApi={setApi}>
            <div className="content-title container mx-auto flex flex-row w-full pt-6 items-center">
                <div className="border-box h-[40px] w-3 bg-red-600 rounded-sm"></div>
                <div className="text pl-3 text-2xl text-red-600 font-semibold">Today's</div>
            </div>
            <div className="w-full flex flex-row justify-between ">
                <div className='flex flex-row items-center gap-8'>
                    <h2 className="text-4xl font-bold py-4">Flash Sales</h2>
                </div>
                <div className="flex gap-2 items-center">
                    <Button variant="outline" size="icon" onClick={scrollPrev} >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={scrollNext}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <CarouselContent className="my-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="grid grid-cols-5 gap-4">
                            {products.slice(index * itemsPerPage, (index + 1) * itemsPerPage).map((product) => (
                                <ProductCard name={product.name} price={product.price} rating={product.rating} />
                            ))}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="w-full flex flex-col justify-center">
                <Button variant="destructive" className='text-2xl mx-auto p-6'>Get All Products</Button>
            </div>
        </Carousel>
    )
}