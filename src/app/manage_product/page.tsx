import React from 'react'
import { db } from '~/server/db'
import { DataTable } from './product-data-table'
import { columns } from './columns'
export const dynamic = 'force-dynamic'
const page = async () => {
    const products = await db.query.product.findMany()
    return (
        <div className='container mx-auto'>
            <DataTable columns={columns} data={products} />
        </div>
    )
}

export default page
