"use client"
import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

export default function layout({children}) {
  return (
    <div className='container my-5'>
        <h1>Account</h1> 
        <p><strong>Joe Cole,</strong> joe@email.com · Los Angeles, CA</p>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            {children}
        </LocalizationProvider>
    </div>
  )
}
