import React from "react";
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TimerIcon from '@mui/icons-material/Timer';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { products, categorySlider, brnads } from "./data";
// images
import banner_1 from '../asstes/images/banner_1.png'
import banner_2 from '../asstes/images/banner_2.png'
import banner_3 from '../asstes/images/banner_3.png'
import banner12 from '../asstes/images/banner12.png'
import bannerH from '../asstes/images/bannerH.png'
import banner2 from '../asstes/images/banner2.png' 
import banner1 from '../asstes/images/banner1.png' 
// components
import VerticalBanner from "@/components/VerticalBanner";
import CategorySlider from "@/components/homeComponents/CategorySlider";
import BrandSlider from "@/components/homeComponents/BrandSlider"
import ProductSlider from "@/components/ProductSlider";
import HomeSlider from "@/components/homeComponents/HomeSlider";
import HorizontalBanner from "@/components/HorizontalBanner";
import HomeInfoCard from "@/components/homeComponents/HomeInfoCard";

export default function Home() {
  return (
    <main className="py-3 sm:py-4">
      <div className="container">

      {/* Home Slider */}
      <HomeSlider/>

      <div className="grid grid-cols-2 sm:gap-1 gap-3 mb-sm-5 mb-3 sm:grid-cols-4 sm:mb-2">
        <HomeInfoCard icon={<PaymentsIcon/>} title='Money Guarantee' body='7 Days Back'/>
        <HomeInfoCard icon={<LocalShippingIcon/>} title='Fast Delivery' body='Start from $10'/>
        <HomeInfoCard icon={<TimerIcon/>} title='365 Days' body='For free return'/>
        <HomeInfoCard icon={<GppGoodIcon/>} title='Payment' body='Payment'/>
      </div>

      {/* category slider */}
      <CategorySlider  slidesPerView={8} spaceBetween={40} data={categorySlider} loop={true}/>

      {/* banner image */}
      <HorizontalBanner items={[banner_1, banner_2, banner_3]}/>


      {/* product slider */}
      <ProductSlider slidesPerView={5} spaceBetween={20} data={products} loop={true} title="New Arrivals" seeAll={true}/>
      
      {/* banner image */}
      <HorizontalBanner items={[banner12]}/>

      {/* product slider */}
      <div className="grid grid-cols-12 gap-3">
        <div className="sm:col-span-2 col-span-12 hidden sm:block mb-sm-5 mb-3">
           <VerticalBanner items={bannerH}/>
        </div>
        <div className="sm:col-span-10 col-span-12">
          <ProductSlider  slidesPerView={4} spaceBetween={20} data={products} loop={true} title="New Arrivals" seeAll={true}/>
        </div>
      </div>

      {/* banner image */}
      <HorizontalBanner items={[banner2, banner1]}/>
      
      {/* product slider */}
      <ProductSlider slidesPerView={5} spaceBetween={20} data={products} loop={true} title="New Arrivals" seeAll={true}/>
      
      <BrandSlider slidesPerView={7} spaceBetween={20} data={brnads} loop={true}/>
      </div>

    </main>
  );
}
