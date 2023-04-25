import React from 'react'
import Image from 'next/image'

export default function PrincipalBanner() {
  return (
    <div class="banner text-white py-24 px-10 object-fill">
    <div class="containeravila">
    <Image class="rounded-t-lg bannerImage "  width={250} height={250} src={'/avila.png' } alt="" />
    </div>
    
    <div class="md:w-1/2 flex justify-end z-4" >
        <div><p class="font-bold text-sm uppercase">Hola  me  llamo</p>
     <p class="text-3xl font-bold">Angel Calderon</p>
     <p class="text-2xl mb-10 leading-none">Soy un Software Developer</p>
     <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
     </div>
     
     </div>  
     <div class="md:w-1/2">
        <div className='flex justify-start' >
        <Image class="rounded-t-lg ProfileImage  z-4 "  width={250} height={250} src={'/angel4.png' } alt="" />
        </div>
    
     </div>
 </div>
  )
}
