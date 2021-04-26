import React from 'react'
import { FunctionalsContent } from '../../context/contextApi'



export const  fetchImage= async (url)=>{
    
    const key=process.env.NEXT_PUBLIC_ACCESS_KEY
    
   const data =await fetch(`${url}client_id=${key}`)
   const result= await data.json()
   return result 
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
export const morePage=(page)=>{
   return page+1
}
