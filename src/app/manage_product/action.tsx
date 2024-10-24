'use server'

import { eq } from "drizzle-orm"
import { db } from "~/server/db"
import { product } from "~/server/db/schema"
import { ProductSchema } from "./util"

export async function addNewProduct(productName: string, productImg: string, productPrice: any) {
    const newProduct = {
        name: productName,
        price: productPrice,
        avatar: productImg
    }
    const validation = ProductSchema.safeParse(newProduct)
    if (!validation.success) {
        console.log(validation)
        return
    }
    await db.insert(product).values({ name: productName, avatar: productImg, price: productPrice })
}


export async function removeProduct(id: number) {
    await db.delete(product).where(eq(product.id, id))
}

export async function updateProduct(id: number, productName: string, productImg: string, productPrice: any) {
    const newProduct = {
        name: productName,
        price: productPrice,
        avatar: productImg
    }
    const validation = ProductSchema.safeParse(newProduct)
    if (!validation.success) {
        console.log(validation)
        return
    }
    await db.update(product).set({ name: productName, price: productPrice, avatar: productImg }).where(eq(product.id, id))
}
