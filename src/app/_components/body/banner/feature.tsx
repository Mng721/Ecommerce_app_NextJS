import Image from 'next/image'
import React from 'react'
import { images } from '~/app/_assets/image'

const FeatureNewArrival = () => {
    return (
        <div className='container mx-auto'>
            <div className="content-title container mx-auto flex flex-row w-full pt-6 items-center ">
                <div className="border-box h-[40px] w-3 bg-red-600 rounded-sm"></div>
                <div className="text pl-3 text-2xl text-red-600 font-semibold">Today's</div>
            </div>
            <h2 className="text-4xl font-bold py-4">Flash Sales</h2>
            <div className='grid grid-cols-4 gap-4 grid-rows-2 h-[70vh]'>
                <div className='row-span-2 col-span-2 bg-black relative'>
                    <Image src={images.ps5Img} alt='ps5-image' className='absolute h-auto bottom-0 left-[10%] right-[10%] z-0 w-[80%]' />
                </div>
                <div className='row-span-1 col-span-2 bg-black relative'>
                    <Image src={images.womanCollectionsImg} alt='woman-collection-img' className='absolute h-full w-auto bottom-0 top-0 right-0 z-0 max-w-full' />
                </div>
                <div className='bg-black col-span-1 relative'>
                    <Image src={images.speakerImg} alt='speaker-img' className='absolute h-auto inset-[10%] w-[80%] z-0 max-h-[80%]' />

                </div>
                <div className='bg-black col-span-1 relative'>
                    <Image src={images.gucciPerfumeImg} alt='gucci-perfume-img' className='absolute h-auto inset-[10%] w-[80%] z-0 max-h-[80%]' />

                </div>
            </div>
        </div>
    )
}

export default FeatureNewArrival
