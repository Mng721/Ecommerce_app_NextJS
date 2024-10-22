import React, { useCallback } from 'react'
import { IconType } from 'react-icons/lib'
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { FiHeadphones } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "~/components/ui/button"
import useEmblaCarousel from 'embla-carousel-react';
const CategoryCard = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, align: 'start', loop: true })

    interface CategoryItem {
        icon: IconType;
        text: String
    }
    let listCategoryItem = [
        {
            icon: <IoIosPhonePortrait size={"2em"} />,
            text: "Phones",
        },
        {
            icon: <HiOutlineComputerDesktop size={"2em"} />,
            text: "Computers",
        },
        {
            icon: <BsSmartwatch size={"2em"} />,
            text: "Smartwatchs",
        },
        {
            icon: <IoCameraOutline size={"2em"} />,
            text: "Cameras",
        },
        {
            icon: <FiHeadphones size={"2em"} />,
            text: "Headphone",
        },
        {
            icon: <SiYoutubegaming size={"2em"} />,
            text: "Gaming",
        },
        {
            icon: <SiYoutubegaming size={"2em"} />,
            text: "Gaming",
        },
        {
            icon: <SiYoutubegaming size={"2em"} />,
            text: "Gaming",
        },
        {
            icon: <SiYoutubegaming size={"2em"} />,
            text: "Gaming",
        },
    ];

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
    return (
        <div className='container mx-auto px-4 flex flex-col justify-center'>
            <div className="content-title container mx-auto flex flex-row w-full pt-6 items-center">
                <div className="border-box h-[40px] w-3 bg-red-600 rounded-sm"></div>
                <div className="text pl-3 text-2xl text-red-600 font-semibold">Category</div>
            </div>
            <div className="w-full flex flex-row justify-between">
                <div className='flex flex-row items-center gap-8'>
                    <h2 className="text-4xl font-bold py-4">Browse By Category</h2>
                </div>
                <div className="flex gap-2 items-center">
                    <Button variant="outline" size="icon" onClick={scrollPrev}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={scrollNext}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className="overflow-hidden my-8 h-fit" ref={emblaRef}>
                <div className="flex">
                    {listCategoryItem.map((item, index) => (
                        <div className="lg:flex-[0_0_12.5%] md:flex-[0_0_16.666%] flex-[0_0_25%] min-w-0 px-2 " key={`category-item-${index}`}>
                            <div className='w-full border-[1px] border-solid border-black rounded-sm overflow-hidden'>
                                <span className="w-full py-4 flex flex-row justify-center">{item.icon}</span>
                                <div className="w-full py-4 flex flex-row justify-center">{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
