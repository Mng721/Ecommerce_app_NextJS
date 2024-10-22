import { redirect } from 'next/navigation'
import React from 'react'
import { db } from '~/server/db'
import ProductCard from '../_components/productcard'

const page = async () => {
    const products = await db.query.product.findMany()
    return (
        <div>
            this is manage product page
            {products.map((item) => {
                return <div key={item.id}>
                    <ProductCard price={item.price} imgSrc={item.avatar} name={item.name} rating={item.rating} />
                </div>
            })}
        </div>
    )
}

export default page
