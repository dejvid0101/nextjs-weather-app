import React, {useState} from 'react'
import Link from 'next/link'

//autocomplete suggestions
export default function autocomplete({AutocompleteProps}:any) {
const targetUrl="details?name=";

    if(AutocompleteProps.length>2){
  return (
    //onclick calls parent function referenced in the first element of AutocompleteProps
    <div onClick={AutocompleteProps[0].clearInput} className='w-1/2 absolute mt-12'>
        <Link href={targetUrl+AutocompleteProps[0].name}>
    <div className='h-12 bg-white hover:bg-violet-100'>
      <span className='px-1 py-1 text-violet-700'>{AutocompleteProps[0].name}</span>
      <br/>
      <span className='px-1 py-1 text-violet-700 text-xs'>{AutocompleteProps[0].country}, {AutocompleteProps[0].subcountry}</span>
    </div>
    </Link>

    <Link href={targetUrl+AutocompleteProps[1].name}>
    <div className='h-12 bg-white hover:bg-violet-100'>
    <span className='px-1 py-1 text-violet-700'>{AutocompleteProps[1].name}</span>
    <br/>
      <span className='px-1 py-1 text-violet-700 text-xs'>{AutocompleteProps[1].country}, {AutocompleteProps[1].subcountry}</span>
  </div>
  </Link>

  <Link href={targetUrl+AutocompleteProps[2].name}>
  <div className='h-12 bg-white hover:bg-violet-100'>
    <span className='px-1 py-1 text-violet-700'>{AutocompleteProps[2].name}</span>
    <br/>
      <span className='px-1 py-1 text-xs text-violet-700'>{AutocompleteProps[2].country}, {AutocompleteProps[2].subcountry}</span>
  </div> 
  </Link>

  </div>
  )
    } else if((AutocompleteProps.length>=1)&&(AutocompleteProps.length<=2)){
        return(
         
            <div onClick={AutocompleteProps[0].clearInput} className='w-1/2 absolute mt-12'> 
            <Link href={targetUrl+AutocompleteProps[0].name}>
    <div className='h-12 bg-white hover:bg-violet-100'>
      <span className='px-1 py-1 text-violet-700'>{AutocompleteProps[0].name}</span>
      <br/>
      <span className='px-1 py-1 text-xs text-violet-700'>{AutocompleteProps[0].country}, {AutocompleteProps[0].subcountry}</span>
    </div>
     </Link>
    </div>
   
        )
    } else{
        return <div></div>;
    }
}
