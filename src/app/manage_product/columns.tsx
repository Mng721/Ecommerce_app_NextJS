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
import axios from "axios"
import { ProductSchema } from "./util"
export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "avatar",
        header: "Image",
        cell: ({ row }) => (<img src={row.getValue("avatar")} alt={row.getValue("name")} className="size-28 object-cover" />)
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
        cell: ({ row }) => { return <div className="text-ellipsis overflow-hidden ">{row.getValue("name")}</div> }
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
        id: "function",
        header: () => { return <div className="flex flex-row justify-end">Function</div> },
        cell: ({ row }) => {
            const [open, setOpen] = useState(false);
            const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
            const [productName, setProductName] = useState("")
            const [previewImg, setPreviewImg] = useState("")
            const [productPrice, setProductPrice] = useState<any>("")
            const [hasName, setHasName] = useState<any>("")
            const [hasPrice, setHasPrice] = useState<any>("")
            const [hasImg, setHasImg] = useState<any>("")
            const [file, setFile] = useState<any>(null)
            const id: number = row.getValue("id")
            const name: string = row.getValue("name")
            const price: any = row.getValue("price")
            const avatar: any = row.getValue("avatar")
            const router = useRouter()
            const handleSaveChange = async (event: any) => {
                setHasName("")
                setHasPrice("")
                setHasImg("")
                const newProduct = {
                    name: productName,
                    price: productPrice,
                    avatar: previewImg
                }
                const validation = ProductSchema.safeParse(newProduct)
                if (!validation.success) {
                    const formattedErrors = validation.error.format()
                    setHasName(formattedErrors.name?._errors)
                    setHasPrice(formattedErrors.price?._errors)
                    setHasImg(formattedErrors.avatar?._errors)
                    return
                }
                if (file) {
                    var image = new Image();
                    image.onload = function () {
                        setHasImg("")
                    };
                    image.onerror = function () {
                        setHasImg('Invalid image');
                        return
                    };
                    image.src = previewImg;
                    event.preventDefault();

                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('upload_preset', 'product_img');
                    try {
                        const response = await axios.post(
                            "https://api.cloudinary.com/v1_1/dtwie44qs/image/upload",
                            formData
                        );
                        let productImgUrl = `https://res.cloudinary.com/dtwie44qs/image/upload/v${response.data.version}/${response.data.public_id}.png`
                        updateProduct(id, productName, productImgUrl, productPrice);

                    } catch (error) {
                        console.error(error);
                    }
                } else {
                    updateProduct(id, productName, previewImg, productPrice)
                }
                router.refresh()
                setOpen(false)
            }

            const handleDelete = () => {
                removeProduct(row.getValue("id"));
                router.refresh()
            }
            useEffect(() => {
                setProductName(name);
                setProductPrice(+price);
                setPreviewImg(avatar);
            }, [open])
            return (<div className="flex gap-2 justify-end">
                <Dialog open={open} onOpenChange={() => {
                    setOpen(!open)
                    setHasName("");
                    setHasPrice("");
                    setHasImg("");
                }}>
                    <DialogTrigger asChild>
                        <Button variant={"outline"} onClick={() => { setOpen(true) }}>Update</Button>

                    </DialogTrigger>
                    <DialogContent className="" aria-describedby={undefined}>
                        <DialogHeader>
                            <DialogTitle >Update product</DialogTitle>
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
                                />
                                {hasName && <div className="text-red-600">{hasName}</div>}

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
                                    onChange={(event) => { setProductPrice(+event.target.value) }}
                                    className="col-span-3"
                                />
                                {hasPrice && <div className="text-red-600">{hasPrice}</div>}

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
                                        if (event.target.files.length === 0) {
                                            setFile(null);
                                            setPreviewImg(avatar);
                                            return
                                        }
                                        if (event.target.files[0] === null) return
                                        setPreviewImg(URL.createObjectURL(event.target.files[0]!))
                                        setFile(event.target.files[0])
                                    }}
                                />
                                {hasImg && <div className="text-red-600">{hasImg}</div>}

                            </div>

                            <div className="flex justify-center items-center w-full border-gray-300 border-dashed border-[1px] rounded h-32">
                                {previewImg ? <img src={previewImg} alt="product-img-preview" className="h-full w-auto object-contain" /> : <i className="text-gray-300">Product preview</i>}
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="secondary" onClick={() => {
                                    setOpen(false)
                                }}>
                                    Close
                                </Button>
                            </DialogClose>
                            <Button type="submit" onClick={handleSaveChange}>Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <Dialog open={openDeleteDialog} onOpenChange={() => {
                    setOpenDeleteDialog(!openDeleteDialog)
                }}>
                    <DialogTrigger asChild>
                        <Button variant={"destructive"} onClick={() => setOpenDeleteDialog(true)}>Remove</Button>

                    </DialogTrigger>
                    <DialogContent className="" aria-describedby={undefined}>
                        <DialogHeader>
                            <DialogTitle >Confirm remove</DialogTitle>
                        </DialogHeader>
                        <div>Are you sure you want to remove this item?</div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="secondary" onClick={() => {
                                    setOpenDeleteDialog(false)
                                }}>
                                    Close
                                </Button>
                            </DialogClose>
                            <Button type="submit" onClick={handleDelete} variant={"destructive"}>Remove</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </div>)
        }
    },
]