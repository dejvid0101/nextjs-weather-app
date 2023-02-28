import '../../styles/globals.css'
import React from 'react'
import Citypanelsmall from './citypanelsmall'
const UUID = require('uuid-int');

const gen = UUID(0);

const weatherDescMap = new Map<string, string>([
  ["0", "Vedro"],//day.svg
  ["1", "Pretežno vedro"],//cloudy-day-1.svg
  ["2", "Poluoblačno"],//cloudy-day-2.svg
  ["3", "Oblačno"],//cloudy.svg
  ["48", "Magla"],//cloudy.svg
  ["45", "Magla"],//cloudy.svg
  ["61", "Slaba kiša"],//rainy-1.svg
  ["51", "Slaba kiša"],//rainy-1.svg
  ["53", "Slaba kiša"],//rainy-1.svg
  ["55", "Slaba kiša"],//rainy-1.svg
  ["63", "Kiša"],//rainy-1.svg
  ["65", "Jaka kiša"],//rainy-1.svg,
  ["66", "Poledica"],//rainy-1.svg
  ["67", "Poledica"],//rainy-1.svg
  ["80", "Pljuskovi"],//rainy-1.svg
  ["81", "Pljuskovi"],//rainy-1.svg
  ["82", "Pljuskovi"],//rainy-1.svg
  ["71", "Snijeg"],//snowy-1.svg,
  ["73", "Snijeg"],//snowy-1.svg,
  ["75", "Snijeg"]//snowy-1.svg
]);

async function getCityInfo() {
  const res=await fetch('https://api.open-meteo.com/v1/forecast?latitude=45.80&longitude=15.90&current_weather=true',
  {cache:'no-store'});
  //add error handling

  const data=await res.json();
  return data;
}
async function prepareProp() {
  const fetchedObj=await getCityInfo();
  var weathercode = new Number(fetchedObj.current_weather.weathercode);
  fetchedObj.weatherdesc=weatherDescMap.get((weathercode.toString()));
  switch(fetchedObj.current_weather.weathercode) { 
    case 0: { 
       fetchedObj.imgSrc='\day.svg'
       break; 
    } 
    case 1: { 
      fetchedObj.imgSrc='/cloudy-day-1.svg'
       break; 
    } 
    case 2: { 
      fetchedObj.imgSrc='/cloudy-day-2.svg'
       break; 
    } 
    case 3||48:{ 
      fetchedObj.imgSrc='/cloudy.svg'
       break; 
    } 
    case 61||63||65||51||53||55||56||57: { 
      fetchedObj.imgSrc='/rainy-1.svg'
       break; 
    } 
    case 71||73||75||77||85||86: { 
      fetchedObj.imgSrc='/snowy-1.svg'
       break; 
    }
    case 95||96||99: { 
      fetchedObj.imgSrc='/thunder.svg'
       break; 
    }
    default: { 
      fetchedObj.imgSrc='/rainy-1.svg'
       break; 
    } 
 } 

  return fetchedObj;
}


export default async function page() {
  
const info=await prepareProp();

  return (
    <div className='mx-64'> 
      <Citypanelsmall key={gen.uuid()} WeatherInfo={info}></Citypanelsmall>
    </div> 
  )
}
