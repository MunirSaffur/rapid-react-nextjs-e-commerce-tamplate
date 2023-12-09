"use client"
import React from 'react'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { products } from '../data';
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  cart_data,
  handleRemoveItemFromCart
} from "../globalRedux/features/CartSlice";
import Image from 'next/image';
import ProductSlider from '@/components/ProductSlider';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function page() {
    const dispatch = useDispatch();
    const cart = useSelector(cart_data);

    const calculateCartSubtotal = ()=>{
       return cart.map(item=>item.price).reduce(
            (accumulator, currentValue)=>{
           return accumulator + currentValue
        },0)
    }

  return (
    <div>
        <div className='grid grid-cols-12 gap-3 mb-10'>
        <div className='col-span-12 sm:col-span-8'>
           {
            cart.map((item, index)=>(
                <div className='flex items-center justify-between cart-item' key={index}>
                    {/* {JSON.stringify(cart)} */}
                    <div className='flex items-center justify-between'>
                        <Image src={item.image.src} width={120} height={120} alt="image"/>
                        <div className='mx-3 cart-item-info'>
                            <h5>{item.title}</h5>
                            <p className='mb-0'><strong>Storage: </strong>64 GB</p>
                            <p><strong>Color: </strong>Black</p>
                            <span className='price-qty'>{item.price}$ x {item.count} </span><span className="price-total"> {item.price * item.count}$</span>
                        </div>
                    </div>
                    <DeleteOutlineIcon 
                    onClick={() => {
                    dispatch(handleRemoveItemFromCart(item));
                    }}/>
                </div>
            ))
           }
        </div>
        <div className='col-span-12 sm:col-span-4'>
            <div className='cart-summary'>
                <h5>Order Summary</h5>
                <ul className='p-0'>
                    <li className='flex justify-between'>subtotal <strong>{ calculateCartSubtotal() }$</strong></li>
                    <li className='flex justify-between'>Shpping estimate <strong>5$</strong></li>
                    <li className='flex justify-between'>Tax estimate <strong>25$</strong></li>
                    <li className='flex justify-between'><strong>Order total</strong> <strong>{ calculateCartSubtotal() + 30 }$</strong></li>
                </ul>
                <Link href="/checkout"><Button size="large">Checkout</Button></Link>
            </div>
        </div>
    </div>
    <ProductSlider slidesPerView={5} spaceBetween={20} data={products} loop={true} title="New Arrivals" seeAll={true}/>
    </div>
  )
}
