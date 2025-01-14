import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import NavigationBar from "@/components/NavigationBar";
import ProductsSection from "@/components/ProductsSection";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavigationBar/>
      <Carousel/>
      <Button/>
      <ProductsSection/>
    </div>
  );
}
