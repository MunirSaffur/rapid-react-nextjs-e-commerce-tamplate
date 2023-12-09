"use client"
import React, { useState } from 'react'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { products } from '../data';
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  cart_data
} from "../globalRedux/features/CartSlice";
import Image from 'next/image';
import ProductSlider from '@/components/ProductSlider';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, FormControlLabel, RadioGroup, Radio, FormLabel, Checkbox } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddCardIcon from '@mui/icons-material/AddCard';
import Link from 'next/link';

export default function page() {
    const dispatch = useDispatch();
    const [showContact, setContact] = useState(false)
    const [showShipping, setShipping] = useState(false)
    const [showPayment, setPayment] = useState(false)
    const cart = useSelector(cart_data);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const calculateCartSubtotal = ()=>{
       return cart.map(item=>item.price).reduce(
            (accumulator, currentValue)=>{
           return accumulator + currentValue
        },0)
    }

  return (
    <div>
      <h3 className='mb-2'>Checkout</h3>
      <p className='mb-4'>Home page / Cart / Checkout</p>
        <div className='grid grid-cols-12 gap-3 mb-10'>
        <div className='col-span-12 sm:col-span-8'>
          <div className='checkout-info'>
          <div className='checkout-section'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <ContactPhoneIcon/>
                    <div className='ms-3'>
                      <h5>CONTACT INFO</h5>
                      <p className='mb-0'>Enrico Smith +855 - 666 - 7744</p>
                    </div>
                  </div>
                  <Button className='px-4' onClick={()=>{setContact(!showContact)}}>Change</Button>
                </div>
                {
                  showContact &&
                  <div className='checkout-section-options grid grid-cols-12 gap-3'>
                    <h5 className='col-span-12 flex items-center justify-between mb-3 font-semibold'>Contact infomation <p className='mb-0 font-normal'>Do not have an account? <Link href="/">Log in</Link></p></h5>
                  <TextField className='col-span-12 sm:col-span-9' size="small" defaultValue="Cole" id="outlined-basic" label="Your phone number" variant="outlined"  />
                  <TextField className='col-span-12 sm:col-span-9' size="small" defaultValue="Enrico" id="outlined-basic" label="E-mail address" variant="outlined" />
                  <FormControlLabel className='col-span-12 sm:col-span-9' control={<Checkbox defaultChecked />} label="Email me news and offers" />
                <Button className='col-span-8 sm:col-span-6 countinue' size="large" onClick={()=>{setContact(false), setShipping(true)}}>continue to shipping</Button>
                <Button className='col-span-4 sm:col-span-3' size="small" onClick={()=>{setContact(false)}}>Cancel</Button>
                </div>
                }
            </div>
            <div className='checkout-section'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <LocalShippingIcon/>
                    <div className='ms-3'>
                      <h5>SHIPPING INFO</h5>
                      <p className='mb-0'>St. Paul's Road, Norris, SD 57560, Dakota, USA</p>
                    </div>
                  </div>
                  <Button className='px-4' onClick={()=>{setShipping(!showShipping)}}>Change</Button>
                </div>
                {
                  showShipping &&
                  <div className='checkout-section-options grid grid-cols-12 gap-3'>
                  <TextField className='col-span-6' size="small" defaultValue="Cole" id="outlined-basic" label="First Name" variant="outlined"  />
                  <TextField className='col-span-6' size="small" defaultValue="Enrico" id="outlined-basic" label="Last name" variant="outlined" />
                  <TextField className='col-span-12 sm:col-span-9' size="small" defaultValue="123, Dream Avenue, USA" id="outlined-basic" label="Address" variant="outlined" />
                  <TextField className='col-span-12 sm:col-span-3' size="small" defaultValue="55U - DD5 " id="outlined-basic" label="Apt, Suite" variant="outlined" />
                  <TextField className='col-span-12 sm:col-span-6' size="small" defaultValue="Norris" id="outlined-basic" label="City" variant="outlined" />
                  <FormControl size="small" className='col-span-12 sm:col-span-6'>
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Country"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Usa</MenuItem>
                      <MenuItem value={20}>Canada</MenuItem>
                      <MenuItem value={30}>Maxico</MenuItem>
                    </Select>
                  </FormControl>
                    <TextField className='col-span-6' size="small" defaultValue="Texas" id="outlined-basic" label="State/Province" variant="outlined"  />
                    <TextField className='col-span-6' size="small" defaultValue="2500 " id="outlined-basic" label="Postal code" variant="outlined" />
                    <FormControl className='col-span-12'>
                    <FormLabel id="demo-row-radio-buttons-group-label">Address type</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel value="Home" control={<Radio />} label="Home (All Day Delivery)" />
                      <FormControlLabel value="Office" control={<Radio />} label="Office " />
                    </RadioGroup>
                </FormControl>
                <Button className='col-span-8 sm:col-span-6 countinue' size="large" onClick={()=>{setPayment(true), setShipping(false)}}>continue to payment</Button>
                <Button className='col-span-4 sm:col-span-3' size="small" onClick={()=>{setShipping(false)}}>Cancel</Button>
                </div>
                }
            </div>
            <div className='checkout-section'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <AddCardIcon/>
                    <div className='ms-3'>
                      <h5>PAYMENT INFO</h5>
                      <p className='mb-0'>Visa / xxxx-xxx-xxx-xx55</p>
                    </div>
                  </div>
                  <Button className='px-4' onClick={()=>{setPayment(!showPayment)}}>Change</Button>
                </div>
                {
                  showPayment &&
                  <div className='checkout-section-options grid grid-cols-12 gap-3'>
                    <TextField className='col-span-12' id="outlined-basic" label="Card number" variant="outlined"  />
                    <TextField className='col-span-12' id="outlined-basic" label="Name on Card" variant="outlined" />
                    <TextField className='col-span-9' id="outlined-basic" label="Expiration date (MM/YY)" variant="outlined" />
                    <TextField className='col-span-3' id="outlined-basic" label="CVC" variant="outlined" />
                    <Button className='col-span-8 sm:col-span-6 countinue' size="large" onClick={()=>{setPayment(false)}}>Confirm Order</Button>
                    <Button className='col-span-4 sm:col-span-3' size="small" onClick={()=>{setPayment(false)}}>Cancel</Button>
                </div>
                }
            </div>
          </div>
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
                <Button size="large">Confirm Order</Button>
            </div>
        </div>
    </div>
    <ProductSlider slidesPerView={5} spaceBetween={20} data={products} loop={true} title="You might like" seeAll={false}/>
    </div>
  )
}
