"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Rating, Button, Snackbar, Alert } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Link from "next/link";
// redux
import { useDispatch } from "react-redux";
import { handleCartData } from "../app/globalRedux/features/CartSlice";

export default function ProductSlider({
  title,
  loop,
  data,
  spaceBetween,
  slidesPerView,
  seeAll
}) {
  const dispatch = useDispatch();

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    dispatch(handleCartData(item));
  };
  return (
    <div className="mb-sm-5 mb-3">
      <div className="flex items-center justify-between section-title">
        <h3>{title}</h3>
        {seeAll && <a href="#">See All</a>}
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1.4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="product-slider p-2"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={"/product/" + item.id}>
            <div className="product-slider-card">
              {item.favorite ? (
                <FavoriteIcon className="product-card-fav-icon" />
              ) : (
                <FavoriteBorderIcon className="product-card-fav-icon" />
              )}
              <Image src={item.image} width={200} height={300} alt="image"/>
              <div className="product-slider-card-details p-3">
                <h5 className="mb-1 text-base">{item.title}</h5>
                <div className="product-slider-card-rating flex">
                  <Rating
                    name="half-rating-read"
                    value={item.rating}
                    readOnly
                    size="small"
                  />
                  <p className="mb-1">({item.rating})</p>
                </div>
                <p className="price mb-3">${item.price}</p>
                <Button
                  variant="outlined"
                  className="w-100 product-slider-add-to-cart"
                  onClick={(e) => {
                    handleAddToCart(e, item)
                  }}
                >
                  <LocalMallIcon className="me-2"/>
                  Add To Cart
                </Button>
                
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
