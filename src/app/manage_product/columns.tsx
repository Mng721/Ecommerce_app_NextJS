"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Product } from "../_interfaces/product"
import { Button } from "~/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { removeProduct, updateProduct } from "./action"
import { useEffect, useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog"
import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { useRouter } from "next/navigation"
export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "avatar",
        header: "Image",
        cell: ({ row }) => (<img src={row.getValue("avatar")} alt={row.getValue("name")} className="size-28" />)
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "price",
        header: "Price",

        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="font-medium">{formatted}</div>
        }
    },

    {
        accessorKey: "rating",
        header: "Rating",
    },
    {
        header: "Function",
        cell: ({ row }) => {
            const [open, setOpen] = useState(false);
            const [productName, setProductName] = useState("")
            const [productImg, setProductImg] = useState("")
            const [productPrice, setProductPrice] = useState("")
            const id: number = row.getValue("id")
            const name: string = row.getValue("name")
            const price: any = row.getValue("price")
            const avatar: any = row.getValue("avatar")
            const router = useRouter()
            const handleSaveChange = () => {
                updateProduct(id, productName, productImg, productPrice)
                router.refresh()
                setOpen(false)
            }
            useEffect(() => {
                setProductName(name);
                setProductPrice(price);
                setProductImg(avatar);
            }, [])
            return (<div className="flex gap-2">
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button variant={"outline"} onClick={() => { setOpen(true) }}>Update</Button>

                    </DialogTrigger>
                    <DialogContent className="">
                        <DialogHeader>
                            <DialogTitle>Update product</DialogTitle>
                        </DialogHeader>

                        <div className="grid gap-4 pb-4">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="name" className="">
                                    Product name
                                </Label>
                                <Input
                                    id="name"
                                    className="col-span-3"
                                    value={productName}
                                    onChange={(event) => setProductName(event.target.value)}
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="price" className="">
                                    Price
                                </Label>
                                <Input
                                    id="price"
                                    value={productPrice}
                                    type="number"
                                    min="0"
                                    step="any"
                                    onChange={(event) => { setProductPrice(event.target.value) }}
                                    className="col-span-3"
                                    required
                                />
                            </div>

                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="product-img" className="">
                                    Product Image
                                </Label>
                                <Input
                                    id="product-img"
                                    className="col-span-3"
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) => {
                                        if (event.target.files === null) return
                                        if (event.target.files[0] === null) return
                                        (setProductImg(URL.createObjectURL(event.target.files[0]!)))
                                    }}
                                    required
                                />
                            </div>

                            <div className="flex justify-center items-center w-full border-gray-300 border-dashed border-[1px] rounded h-32">
                                {productImg ? <img src={productImg} alt="product-img-preview" className="h-full w-auto object-contain" /> : <i className="text-gray-300">Product preview</i>}
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="secondary" onClick={() => { setOpen(false) }}>
                                    Close
                                </Button>
                            </DialogClose>
                            <Button type="submit" onClick={handleSaveChange}>Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <Button variant={"destructive"} onClick={() => {
                    removeProduct(row.getValue("id"));
                    router.refresh()
                }}>Remove</Button>
            </div>)
        }
    },
]