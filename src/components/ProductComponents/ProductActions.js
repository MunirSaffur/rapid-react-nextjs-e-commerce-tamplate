"use client";
import React, {useState, useEffect} from 'react'
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import LocalMallIcon from '@mui/icons-material/LocalMall';
// redux 
import { useDispatch } from 'react-redux';
import { handleCartData } from '../../app/globalRedux/features/CartSlice'

export default function ProductActions({data}) {
    const { variant } = data
    const [storage , setStorage] = useState("")
    const [color , setColor] = useState("")
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };

    const handleAddToCart = (item)=>{
        dispatch(handleCartData(item));
    }
  return (
    <div>
        <div className='product-option'>
            <p>Storage</p>
            {variant.storage.map((value, index)=>(
                <Button key={index} variant="outlined" className={value === storage ? "contained" : ""} onClick={()=>{setStorage(value)}}>{value}</Button>
            ))}
        </div>
        <div className='product-option'>
            <p>Color</p>
            {variant.color.map((value, index)=>(
                <Button key={index} variant="outlined" className={value === color ? "contained" : ""} onClick={()=>{setColor(value)}}>{value}</Button>
            ))}
        </div>
        <div className='flex items-center mt-4 pb-5 border-b'>
            <Button className='add-to-cart-btn' onClick={() => {
            handleAddToCart(data);
          }}
        ><LocalMallIcon className='me-2'/> Add To Cart</Button>
            <div className='product-count'>
                <RemoveIcon onClick={handleDecrement}/>
                <Typography variant="h6">{count}</Typography>
                <AddIcon onClick={handleIncrement}/>
            </div>
        </div>
        <div className='payment-shipping mt-4'>
            <p><LocalShippingIcon/> Free shipping for orders up to 100$</p>
            <p><SettingsBackupRestoreIcon /> Return right for 7 days</p>
        </div>
    </div>
  )
}
