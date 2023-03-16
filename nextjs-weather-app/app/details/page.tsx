import React from 'react'
import Currentweather from './components/currentweather'
import Forecast3days from './components/forecast3days'
import TodayComponent from './components/today_component';
import TomorrowComponent from './components/tomorrow_component';

//ADD ERROR HANDLING FOR WHEN URL PARAMETER IS NOT SUPPLIED

async function fetchCoordinates(cityName:any) {
  const responseCoordinates=await fetch('https://api.opencagedata.com/geocode/v1/json?q='+cityName+'&key=dfbba9f7d48b4dbfb72e5ff1ae21d4ad',
{cache:'no-store'});
const dataCoordinates=await responseCoordinates.json();
return dataCoordinates;
}

async function getWeatherInfo(cityName:any){
//fetch object with coordinates based on city name in request params
const fetchedCityObj=await fetchCoordinates(cityName);
const lat=fetchedCityObj.results[0].geometry.lat;
const lng=fetchedCityObj.results[0].geometry.lng;

//fetch current weather object based on coordinates
const responseWeather=await fetch('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lng+'&current_weather=true&daily=weathercode&daily=temperature_2m_min&daily=temperature_2m_max&timezone=auto&daily=apparent_temperature_max&daily=apparent_temperature_min&daily=precipitation_probability_max',
{cache:'no-store'});
const dataWeather=await responseWeather.json();
return dataWeather;
}


//page server component receives url params through props
export default async function page({searchParams}: {searchParams?: { [key: string]: string | string[] | undefined };}) {

  // add error handling for when url paramaters aren't supplied or incorrect
const weatherObject=await getWeatherInfo(searchParams?.name);

//weather details for location
    return (
      <>
      <div className='modalPlaceholder invisible p-2 absolute w-96 h-[40rem] lg:w-[36rem] lg:h-[40rem] bg-indigo-50 border-indigo-900 border-solid border-8 rounded-xl right-2/4 top-2/4 -translate-y-2/4 translate-x-2/4'></div>
    <div className="content container grid mx-4 lg:mx-32 w-auto h-auto gap-y-4 lg:gap-4 lg:grid-cols-2">
<div className="text-indigo-800 h-32 text-4xl antialiased text-5xl font-poppins grid items-center lg:col-span-2">{searchParams?.name}, {searchParams?.region}</div>
<Currentweather WeatherProp={weatherObject}></Currentweather>
<TodayComponent WeatherProp={weatherObject}></TodayComponent>
<TomorrowComponent WeatherProp={weatherObject}></TomorrowComponent>
<Forecast3days WeatherProp={weatherObject}></Forecast3days>
    </div>
    </>
  )
}


