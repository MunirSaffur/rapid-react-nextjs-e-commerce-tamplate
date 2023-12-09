import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HorizontalBanner({items}) {
  return (
    <div className='mb-sm-5 mb-3'>
    {
        items.length === 1 ?
        <div className='horizontal-banner'>
            <Link href='/category/apple'>
                <Image src={items[0]} alt="image"/>
            </Link>
        </div> :
        items.length === 2 ?
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-3'>
            <div className='horizontal-banner'>
                <Link href='/category/apple'>
                    <Image src={items[0]} alt="image"/>
                </Link>
            </div>
            <div className='horizontal-banner'>
                <Link href='/category/apple'>
                    <Image src={items[1]} alt="image"/>
                </Link>
            </div>
        </div>
        :
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-3'>
            <div className='horizontal-banner'>
                <Link href='/category/apple'>
                    <Image src={items[0]} alt="image"/>
                </Link>
            </div> 
            <div className='horizontal-banner'>
                <Link href='/category/apple'>
                    <Image src={items[1]} alt="image"/>
                </Link>
            </div> 
            <div className='horizontal-banner'>
                <Link href='/category/apple'>
                    <Image src={items[2]} alt="image"/>
                </Link>
            </div> 
        </div>
    }
    </div>
   
  )
}
