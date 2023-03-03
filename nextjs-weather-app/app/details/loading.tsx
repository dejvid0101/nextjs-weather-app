import React from 'react'

export default function loading() {
//adjust placeholders to match PAGE!!!!
    return (
        <div className="container mx-32 w-auto h-auto ">
    <div className="text-indigo-800 h-32 text-4xl antialiased text-5xl grid items-center">
    
      <div className="loading-wrapper">
        <div className="activity"></div>
      </div>
    </div>

    <div className='w-5/12 antialiased my-5 h-96'>
    <div className="loading-wrapper">
        <div className="activity"></div>
      </div>
    </div>

    <div className='forecast-wrapper'>
    <div className="loading-wrapper">
        <div className="activity"></div>
      </div>
    </div>
    </div>
      )
}
