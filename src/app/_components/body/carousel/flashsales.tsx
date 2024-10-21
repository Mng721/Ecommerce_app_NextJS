'use client'

import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "~/components/ui/button"
import ProductCard from '../../productcard'
import { getAllProduct, getProductPaging } from '~/app/_service/product'
import { Product } from '~/app/_interfaces/product'
import { set } from 'zod'
export default function FlashSalesCarousel() {
    const ITEM_LIMIT = 6;
    const [listProduct, setListProduct] = useState<Product[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    const [countdown, setCountdown] = useState({ days: 70, hours: 15, minutes: 42, seconds: 5 })
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const handleFetchPagingProduct = async () => {
        let res = await getProductPaging(currentPage, ITEM_LIMIT);
        setListProduct(res.data)
    };

    const handleGetNextPage = async () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage)
        let res = await getProductPaging(nextPage, ITEM_LIMIT);
        setListProduct([...listProduct, ...res.data])
        scrollNext()
    }
    //Scroll pre func
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    //Scroll next func
    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext()
        }
    }, [emblaApi])

    //Lấy tất cả user
    const handleGetAllProduct = async () => {
        let res = await getAllProduct()
        setListProduct(res.data)
    }
    useLayoutEffect(() => {
        handleFetchPagingProduct();
    }, []);
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

    return (
        <div className="container w-full mx-auto px-4 flex flex-col justify-center">
            <div className="container mx-auto flex flex-row justify-between">
                <div className='flex flex-row items-center gap-8'>
                    <h2 className="text-4xl font-bold py-4">Flash Sales</h2>
                    <div className="flex space-x-4">
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
                </div>
                <div className="flex gap-2 items-center">
                    <Button variant="outline" size="icon" onClick={scrollPrev}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleGetNextPage}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className="overflow-hidden my-8 h-fit" ref={emblaRef}>
                <div className="flex">
                    {listProduct.map((product) => (
                        <div key={product.id} className="flex-[0_0_20%] min-w-0 px-2">
                            <ProductCard price={product.price} name={product.name} imgSrc={product.avatar} />
                        </div>
                    ))}
                </div>
            </div>
            <Button variant="destructive" className='text-2xl mx-auto p-6' onClick={handleGetAllProduct}>Get All Products</Button>
        </div>
    )
}