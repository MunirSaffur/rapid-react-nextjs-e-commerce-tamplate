"use client";
import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import mainProductimage from "../../asstes/images/mainProductimage.jpg"

import Image from "next/image";
export default function ProductImageGallary() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="image-gallary-container"
      >
        {
            [0,1,2,3,4,5,6].map(item=>(
                <SwiperSlide className="image-gallary-big" key={item}>
                    <Image src={mainProductimage} />
                </SwiperSlide>
            ))
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
            [0,1,2,3,4,5,6].map(item=>(
                <SwiperSlide className="image-gallary-small" key={item}>
                    <Image src={mainProductimage} />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}
