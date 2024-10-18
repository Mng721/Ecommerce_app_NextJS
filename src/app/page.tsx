"use client"
import { Button } from "~/components/ui/button";
import HeaderContent from "./_components/header/headercontent";
import ProductCart from "./_components/productcard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductPaging } from "./_service/product";

export default function HomePage() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: ({ pageParam = 1 }) => getProductPaging(pageParam),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  })

  if (status === 'error') return <p>Error loading data</p>;
  return (
    <>
      <HeaderContent />
      {/* Đây là đầu mục mỗi list product */}
      <div className="content-title container mx-auto flex flex-row w-full pt-6 items-center">
        <div className="border-box h-[40px] w-3 bg-red-600 rounded-sm"></div>
        <div className="text pl-3 text-2xl text-red-600 font-semibold">Sales</div>

      </div>

      <div className="container mx-auto flex flex-row justify-between">
        <h2 className="text-4xl font-bold py-4">Flash Sales</h2>
        <div className="flex gap-2 items-center">
          <Button variant="outline" size="icon" aria-label="Scroll left" >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Scroll right">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading more...' : 'Load More'}
      </Button>
      <ProductCart price={"160"} name="A Normal Bag" sale={35} rating={3.5} />
    </>
  );
}
