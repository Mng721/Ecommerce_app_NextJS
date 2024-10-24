"use client"
import HeaderContent from "./_components/header/headercontent";
import FlashSalesCarousel from "./_components/body/carousel/flashsales";
import CategoryCard from "./_components/body/carousel/categorycard";
import BestSelling from "./_components/body/carousel/bestselling";
import NewArriveProduct from "./_components/body/banner/newarriveproduct";
import OurProduct from "./_components/body/carousel/ourproduct";
import FeatureNewArrival from "./_components/body/banner/feature";
import GuaranteeBanner from "./_components/body/banner/guarantee";

export default function HomePage() {
  return (
    <>
      <HeaderContent />
      <FlashSalesCarousel />
      <CategoryCard />
      <BestSelling />
      <NewArriveProduct />
      <OurProduct />
      <FeatureNewArrival />
      <GuaranteeBanner />
    </>
  );
}
