"use client"
import React, {useState} from 'react'
import Hamburger from 'hamburger-react'
import SearchBar from './searchBar'

export default function navbar({CitiesObj}:any) {
    const [isOpen, setOpen] = useState(false)


  return (

//cities list is passed further to searchbar component
    <div className='grid grid-cols-12 h-12 fixed relative bg-purple-400 w-full rounded-b-lg'>
        <div className='self-center justify-self-center col-span-1'>
      Logo
      </div>
      <div className='self-center lg:px-64 md:px-32 sm:px-4 col-span-10'>
        <SearchBar CitiesObj={CitiesObj}></SearchBar>
      </div>
      <div className='self-center justify-self-center col-span-1'>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  )
}
