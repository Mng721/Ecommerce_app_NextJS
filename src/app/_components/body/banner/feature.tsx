import React from 'react'

const FeatureNewArrival = () => {
    return (
        <div className='container mx-auto'>
            <div className="content-title container mx-auto flex flex-row w-full pt-6 items-center ">
                <div className="border-box h-[40px] w-3 bg-red-600 rounded-sm"></div>
                <div className="text pl-3 text-2xl text-red-600 font-semibold">Today's</div>
            </div>
            <h2 className="text-4xl font-bold py-4">Flash Sales</h2>
            <div className='grid grid-cols-4 gap-4 grid-rows-2 h-[70vh]'>
                <div className='row-span-2 col-span-2 bg-black'></div>
                <div className='row-span-1 col-span-2 bg-black'></div>
                <div className='bg-black col-span-1'></div>
                <div className='bg-black col-span-1'></div>
            </div>
        </div>
    )
}

export default FeatureNewArrival
