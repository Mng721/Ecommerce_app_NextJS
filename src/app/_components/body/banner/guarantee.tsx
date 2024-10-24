import React from 'react'
import Image from 'next/image'

import { images } from '~/app/_assets/image'

const GuaranteeBanner = () => {
    return (
        <div className='container mx-auto flex flex-row flex-wrap justify-around my-6'>
            <div className='w-fit flex flex-col p-5 justify-center items-center'>
                <Image src={images.delivery} alt='delivery-img' className='m-4 rounded' />
                <div>
                    <h2 className='font-medium text-xl mx-auto w-fit my-2'>FREE AND FAST DELIVERY</h2>
                    <div className='mx-auto text-base'>Free delivery for all order over $140</div>
                </div>
            </div>
            <div className='w-fit flex flex-col p-5 justify-center items-center'>
                <Image src={images.customerServiceImg} alt='customer-service' className='m-4 rounded' />
                <div>
                    <h2 className='font-medium text-xl mx-auto w-fit my-2'>24/7 Customer service</h2>
                    <div className='mx-auto text-base'>Friendly 24/7 customer support</div>
                </div>
            </div>
            <div className='w-fit flex flex-col p-5 justify-center items-center'>
                <Image src={images.safe} alt="safe-img" className='m-4 rounded' />
                <div>
                    <h2 className='font-medium text-xl mx-auto w-fit my-2'>Money back guarantee</h2>
                    <div className='mx-auto text-base'>We return money within 30 days</div>
                </div>
            </div>
        </div>
    )
}

export default GuaranteeBanner
