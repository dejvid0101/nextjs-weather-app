import React from 'react'

export default function loading() {
    return (
        <div className="container grid mx-4 lg:mx-32 w-auto h-auto gap-y-4 lg:gap-4 lg:grid-cols-2">
    <div className="text-indigo-800 h-32 text-4xl antialiased text-5xl grid items-center lg:col-span-2">
    
      <div className="loading-wrapper">
        <div className="activity"></div>
      </div>
    </div>

    <div className='lg:my-16 float-left inline w-11/12 h-96 rounded-md'>
    <div className="loading-wrapper">
        <div className="activity"></div>
      </div>
    </div>

    <div className='lg:my-16 float-left inline w-11/12 h-96 rounded-md'>
    <div className="loading-wrapper">
        <div className="activity"></div>
      </div>
    </div>

    <div className='float-left inline w-11/12 antialiased h-96 rounded-md'>
    <div className="loading-wrapper">
        <div className="activity"></div>
      </div>
    </div>

    <div className='float-left inline w-11/12 antialiased h-96 rounded-md'>
    <div className="loading-wrapper">
        <div className="activity"></div>
      </div>
    </div>
    </div>
      )
}
