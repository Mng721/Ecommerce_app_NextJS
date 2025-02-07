import React, { useEffect, useLayoutEffect, useState } from 'react'
import Image from "next/image";
import { Button } from '~/components/ui/button'
import { images } from '~/app/_assets/image';

const NewArriveProduct = () => {
    const [countdown, setCountdown] = useState({ days: 70, hours: 15, minutes: 42, seconds: 5 })
    const deadline = "December, 31, 2025";

    const getTime = () => {
        let time = Date.parse(deadline) - Date.now();
        setCountdown({
            days: Math.floor(time / (1000 * 60 * 60 * 24)),
            hours: Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((time / 1000 / 60) % 60),
            seconds: Math.floor((time / 1000) % 60)
        })
    };

    useLayoutEffect(() => {
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
        <div>
            <div className="container mx-auto bg-black h-[800px] relative flex flex-row overflow-hidden">
                <div className="relative grow-[2]">
                    <div className="absolute left-[5%] top-[12%] text-green-500 text-4xl font-medium">Categories</div>
                    <div className="absolute left-[5%] top-[24%] text-white font-medium text-7xl">
                        Enhance your music experience
                    </div>
                    <Button className="absolute bg-green-500 bottom-[12%] left-[5%]">Buy now!</Button>

                    <div className="flex space-x-4 absolute bottom-[24%] left-[5%]">
                        {Object.entries(countdown).map(([unit, value]) => (
                            <React.Fragment key={unit}>
                                <div className="rounded-full bg-white size-20 flex flex-col items-center justify-center">
                                    <div className="text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
                                    <div className="text-sm">{unit}</div>

                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="grow-[3] relative">
                    <Image src={images.jblSpeakerImg} alt="product-img" className='z-20 w-[80%] h-auto m-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></Image>
                    <div className="w-[60%] h-[5%] rounded-full shadow-[0_0_150px_150px_#b1b1b1] z-10 right-[20%] absolute top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
        </div>
    )
}

export default NewArriveProduct
