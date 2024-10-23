"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    PaginationState,
    SortingState,
    useReactTable,
} from "@tanstack/react-table"
import { useRef, useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog"
import { Label } from "~/components/ui/label"
import { addNewProduct } from "./action"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [productName, setProductName] = useState("")
    const [productImg, setProductImg] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [open, setOpen] = useState(false)
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0, //initial page index
        pageSize: 4, //default page size
    })
    const handleAddProduct = () => {
        addNewProduct(productName, productImg, productPrice);
        setOpen(false);
    }
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
            sorting,
        }
    })

    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-between items-center p-4">
                <Input
                    placeholder="Filter names..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button variant={"default"} onClick={() => setOpen(true)}>Add products</Button>
                    </DialogTrigger>
                    <DialogContent className="">
                        <DialogHeader>
                            <DialogTitle>Add product</DialogTitle>
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
                                    onChange={(event) => (setProductImg(URL.createObjectURL(event.target.files[0])))}
                                    required
                                />
                            </div>

                            <div className="flex justify-center items-center w-full border-gray-300 border-dashed border-[1px] rounded h-32">
                                {productImg ? <img src={productImg} alt="product-img-preview" className="h-full w-auto object-contain" /> : <i className="text-gray-300">Product preview</i>}
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="secondary" onClick={() => { setOpen(false), setProductImg(""), setProductName(""), setProductPrice("") }}>
                                    Close
                                </Button>
                            </DialogClose>
                            <Button type="submit" onClick={handleAddProduct}>Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow className="hover:bg-gray-100"
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

            </div>

            <div className="space-x-2 mx-auto">
                <Button
                    variant="outline"
                    size="default"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="default"
                    onClick={() => { table.nextPage() }}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}
