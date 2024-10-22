import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import ProductCard from '../../productcard'

const BestSelling = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 5, align: 'start', loop: true })

    return (
        <div className="container mx-auto px-4 flex flex-col justify-center">
            <div className="content-title container mx-auto flex flex-row w-full pt-6 items-center">
                <div className="border-box h-[40px] w-3 bg-red-600 rounded-sm"></div>
                <div className="text pl-3 text-2xl text-red-600 font-semibold">Today's</div>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
                <h2 className="text-4xl font-bold py-4">Flash Sales</h2>
                <Button variant="destructive" className='text-xl px-6 py-3'>View All</Button>
            </div>

            <div className="overflow-hidden my-8 h-fit" ref={emblaRef}>
                <div className="flex">
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' reviewCount={1000} rating={3.5} />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' reviewCount={200} rating={4.2} sale={30} />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' sale={"20"} />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' newItem={true} />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' sale={"50"} rating={3.5} />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' listColor={["#cf639e", "#6b63cf", "#3c3a5a"]} />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' newItem={true} />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' newItem={true} />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag'
                            listColor={["#7dcf63", "#cfb063", "#b363cf"]}
                            newItem={true}
                            rating={5}
                        />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' newItem={true} />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag'
                            listColor={["#3a5a3a", "#a9bba9", "#aec251"]}
                            newItem={true}
                            rating={5}
                            reviewCount={1}
                        />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag'
                            sale={"40"}
                            listColor={["#54c251", "#51bbc2", "#62638d", "#a74d88"]}
                        />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' reviewCount={100} rating={4} />
                    </div>
                    <div className="md:flex-[0_0_20%] flex-[0_0_25%] min-w-0 px-2">
                        <ProductCard price={120} name='Simple Bag' newItem={true} reviewCount={10} rating={4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSelling
