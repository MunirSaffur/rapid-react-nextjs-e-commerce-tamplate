import React from 'react'


export default function HomeInfoCard({icon, title, body}) {
  return (
    <div className="flex items-center text-left p-2 p-md-3 rounded-lg home-info-card">
            {icon}
        <div className="ms-3">
            <h5 className='m-0'>{title}</h5>
            <p className='m-0'>{body}</p>
        </div>
    </div>
  )
}
