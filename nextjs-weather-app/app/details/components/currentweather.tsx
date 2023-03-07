import React from 'react'
import {weatherDescMap, prepareImg} from 'app\\modules\\weathercodes.js'


export default function currentweather({WeatherProp}:any) {
  return (
    <>
    <div className='grid grid-rows-6 lg:my-16 float-left inline w-11/12 antialiased h-96 bg-white border-2 border-indigo-400 rounded-md'>
    <div className='font-poppins flex justify-center items-center'>
<div>CURRENT WEATHER</div>
    </div>
    <div className='row-span-4 grid grid-cols-2'>
<div className='grid grid-rows-2'>

  {/* weathertype */}
<div className='flex items-center justify-center'>
  <img className='w-1/2' src={prepareImg(WeatherProp.current_weather.weathercode)}></img>
  
  </div>
  {/* wind speed and direction */}
  <div className='text-xl font-poppins flex items-center justify-center'>
{weatherDescMap.get(WeatherProp.current_weather.weathercode.toString())}
  </div>

</div>
{/* temp */}
<div className='flex items-center justify-center'>
<div className='font-poppins text-6xl'>{WeatherProp.current_weather.temperature}°C</div>
</div>


    </div>

   
    <div className='font-poppins flex justify-center items-center'>
<div>{WeatherProp.current_weather.time.substring(11)} UTC+1</div>
    </div>
    
    </div>
    </>
  )
}
