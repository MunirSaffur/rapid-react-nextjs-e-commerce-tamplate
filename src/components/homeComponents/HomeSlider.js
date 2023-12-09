"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../asstes/images/slider1.jpg";
import slider2 from "../../asstes/images/slider2.jpg";
import slider3 from "../../asstes/images/slider3.jpg";
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

export default function HomeSlider() {
  return (
    <>
        <Swiper 
        className="home-slider mb-sm-5 mb-3"
        slidesPerView={1}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
            dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}>
            <SwiperSlide><Link href='/category/apple'><Image src={slider1}/></Link></SwiperSlide>
            <SwiperSlide><Link href='/category/apple'><Image src={slider2}/></Link></SwiperSlide>
            <SwiperSlide><Link href='/category/apple'><Image src={slider3}/></Link></SwiperSlide>
            <SwiperSlide><Link href='/category/apple'><Image src={slider2}/></Link></SwiperSlide>
        </Swiper>
    </>
  )
}
