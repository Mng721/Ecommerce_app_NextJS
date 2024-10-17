import Link from "next/link";
import HeaderContent from "./_components/header/headercontent";
import ProductCart from "./_components/productcard";

export default function HomePage() {
  return (
    <>
      <HeaderContent/>
      <ProductCart price={"160"} name="A Normal Bag" sale={35} rating={3.5}/>
    </>
  );
}
