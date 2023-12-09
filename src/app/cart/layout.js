import React from 'react'

export default function layout({children}) {
  return (
    <div className='container my-4 sm:my-5'>
      <h1 className='mb-2'>Shipping Cart</h1>
      <p className='mb-4'>Home page / Cart </p>
      {children}
      </div>
  )
}
