'use client';
import React from 'react'
import {  useSearchParams } from "next/navigation";



export default function page() {
    const URLObj = useSearchParams();
    const parameter=URLObj.get("name");

    return (
    <div>
      Grad {parameter}
    </div>
  )
}