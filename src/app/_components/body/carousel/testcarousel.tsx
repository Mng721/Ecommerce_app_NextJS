import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllProduct, getProductPaging } from '~/app/_service/product'

const testcarousel = () => {

    const { isPending, isError, data, error } = useQuery({
        queryKey: "sales_products",
        queryFn: getAllProduct
    })
    if (isPending) { return <div>Loading</div> }
    if (isError) { return <div>Error</div> }
    setListProduct(data.data)
    return (
        <div>

        </div>
    )
}

export default testcarousel
function setListProduct(data: any) {
    throw new Error('Function not implemented.')
}

