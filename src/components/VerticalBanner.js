import Image from 'next/image'
import React from 'react'


export default function VerticalBanner({items}) {
  return (
    <div className='h-100'>
        <div className='vertical-banner'>
            <Image src={items}/>
        </div>
    </div>
   
  )
}
