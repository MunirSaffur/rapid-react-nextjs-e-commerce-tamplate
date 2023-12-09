import React from 'react'
export default function layout({children}) {
  return (
    <div className='container my-5'>
        <h1 className='mb-2'>Favorite Items</h1>
        <p className='mb-4'>Home page / favorite </p>
        {children}
    </div>
  )
}
