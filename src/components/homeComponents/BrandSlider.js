"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function CategorySlider({slidesPerView, spaceBetween, loop, data}) {
  return (
    <div className='mb-sm-5 mb-3'>
        <div className='flex items-center justify-between section-title'>
            <h3>Populer Brands</h3>
        </div>
        <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        340: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
      className="p-2"
    >
        {
            data.map((item, index)=>(
                <SwiperSlide key={index}>
                    <div className='brand-slider-item'>
                          <Image src={item.img}/>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
    </div>
  )
}
