"use client"
import HeaderContent from "./_components/header/headercontent";
import ProductCart from "./_components/productcard";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function HomePage() {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <>
    
    <QueryClientProvider client={queryClient}>
      <HeaderContent/>
      <ProductCart price={"160"} name="A Normal Bag" sale={35} rating={3.5}/>
      </QueryClientProvider>
    </>
  );
}
