import React from 'react'
import Currentweather from './components/currentweather'
import Forecast3days from './components/forecast3days'
import HourlyComponent from './components/hourly_component';
import TomorrowComponent from './components/tomorrow_component';

async function getCurrentWeatherInfo(param:any){
//fetch object with coordinates based on city name in request params
const responseCoordinates=await fetch('https://api.opencagedata.com/geocode/v1/json?q='+param+'&key=dfbba9f7d48b4dbfb72e5ff1ae21d4ad',
{cache:'no-store'});
const dataCoordinates=await responseCoordinates.json();

const fetchedCityObj=dataCoordinates;
const lat=fetchedCityObj.results[0].geometry.lat;
const lng=fetchedCityObj.results[0].geometry.lng;

//fetch current weather object based on coordinates
const responseWeather=await fetch('https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lng+'&current_weather=true',
{cache:'no-store'});
const dataWeather=await responseWeather.json();
return dataWeather;
}

//page server component receives url params through props
export default async function page({searchParams}: {searchParams?: { [key: string]: string | string[] | undefined };}) {

  // add error handling for when url paramaters aren't supplied or incorrect
const currentWeatherObject=await getCurrentWeatherInfo(searchParams?.name);
console.log(currentWeatherObject);

//weather details for location
    return (
    <div className="container grid mx-4 lg:mx-32 w-auto h-auto bg-violet-200 gap-y-4 lg:gap-4 lg:grid-cols-2">
<div className="text-indigo-800 h-32 text-4xl antialiased text-5xl grid items-center lg:col-span-2">{searchParams?.name}, {searchParams?.region}</div>
<Currentweather></Currentweather>
<HourlyComponent></HourlyComponent>
<TomorrowComponent></TomorrowComponent>
<Forecast3days></Forecast3days>
    </div>
  )
}