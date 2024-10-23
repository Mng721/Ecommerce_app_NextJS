"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Product } from "../_interfaces/product"
import { Button } from "~/components/ui/button"
import { ArrowUpDown } from "lucide-react"

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
        cell: ({ row }) => (<div className="flex gap-2">
            <Button variant={"outline"}>Update</Button>
            <Button variant={"destructive"}>Remove</Button>
        </div>)
    },
]