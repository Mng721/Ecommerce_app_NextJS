"use client"
import HeaderContent from "./_components/header/headercontent";
import ProductCard from "./_components/productcard";
import FlashSalesCarousel from "./_components/body/carousel/flashsales";

export default function HomePage() {
  return (
    <>
      <HeaderContent />
      {/* Đây là đầu mục mỗi list product */}
      <div className="content-title container mx-auto flex flex-row w-full pt-6 items-center">
        <div className="border-box h-[40px] w-3 bg-red-600 rounded-sm"></div>
        <div className="text pl-3 text-2xl text-red-600 font-semibold">Today's</div>
      </div>
      <FlashSalesCarousel />
    </>
  );
}
