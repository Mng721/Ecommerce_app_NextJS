'use client'
import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "~/components/ui/button"
import ProductCard from '../../productcard'
import { getAllProduct, getProductPaging } from '~/app/_service/product'
import { Product } from '~/app/_interfaces/product'
export default function FlashSalesCarousel() {
    const ITEM_LIMIT = 5;
    const [listProduct, setListProduct] = useState<Product[]>([]);
    const [hasMore, setHasMore] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 5, align: 'start', loop: false })
    const [countdown, setCountdown] = useState({ days: 70, hours: 15, minutes: 42, seconds: 5 })
    const [isLoading, setIsLoading] = useState(false)
    const deadline = "December, 31, 2030";

    const getTime = () => {
        let time = Date.parse(deadline) - Date.now();
        setCountdown({
            days: Math.floor(time / (1000 * 60 * 60 * 24)),
            hours: Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((time / 1000 / 60) % 60),
            seconds: Math.floor((time / 1000) % 60)
        })
    };

    const handleFetchPagingProduct = async (page: number) => {
        setIsLoading(true)
        try {
            let res = await getProductPaging(page, ITEM_LIMIT);
            if (res.data.length < ITEM_LIMIT) {
                setHasMore(false)
            }
            let newList = [...listProduct, ...res.data];
            setListProduct(newList);
        } catch (error) {
            console.error('Error fetching items:', error)
        } finally {
            setIsLoading(false)
        }
    };

    //chuyển về trang trước 
    const handleGetPreviousPage = async () => {
        let previousPage = currentPage - 1;
        if (previousPage === 0) {
            return;
        }
        setCurrentPage(previousPage);
        scrollPrev()
    }

    //chuyển đến trang tiếp theo
    const handleGetNextPage = () => {
        let nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        if (
            //kiểm tra nếu currentpage vẫn còn data từ lần call API trước hoặc hết data từ API thì chỉ chuyển đến trang tiếp theo
            currentPage * ITEM_LIMIT < listProduct.length ||
            listProduct.length >= 100
        ) {
            scrollNext()
            return;
        }
        //Nếu vẫn có thể gọi tiếp data từ API thì gọi tiếp data từ page tiếp theo
        if (!isLoading && hasMore) {
            handleFetchPagingProduct(nextPage)
        }
        scrollNext();
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
        handleFetchPagingProduct(1);
        getTime()
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
        <div className="container mx-auto px-4 flex flex-col justify-center">
            <div className="content-title container mx-auto flex flex-row w-full pt-6 items-center">
                <div className="border-box h-[40px] w-3 bg-red-600 rounded-sm"></div>
                <div className="text pl-3 text-2xl text-red-600 font-semibold">Today's</div>
            </div>
            <div className="w-full flex flex-row justify-between">
                <div className='flex flex-row items-center gap-8'>
                    <h2 className="text-4xl font-bold py-4">Flash Sales</h2>
                    <div className="md:flex space-x-4 hidden">
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
                    <Button variant="outline" size="icon" onClick={handleGetPreviousPage} >
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
                        <div key={product.id} className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                            <ProductCard price={product.price} name={product.name} imgSrc={product.avatar} />
                        </div>
                    ))}
                </div>
            </div>
            <Button variant="destructive" className='text-2xl mx-auto p-6' onClick={handleGetAllProduct}>Get All Products</Button>
        </div>
    )
}