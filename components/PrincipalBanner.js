import React from 'react'
import Image from 'next/image'

export default function PrincipalBanner() {
  return (
    <section class=" px-10">
    <div class="grid text-center sm:flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl ">Hola me llamo Angel Calderon</h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 text-lg  md:text-lg lg:text-xl ">soy un desarrollador de software apasionado por los retos y el aprendizaje constante. Me encanta crear sitios web atractivos, funcionales y accesibles.</p>
           
          
        </div>
        <div class=" lg:mt-0 lg:col-span-5 flex justify-center">
        <Image class="rounded-t-lg ProfileImage  z-4 "  width={250} height={250} src={'/angel4.png' } alt="" />
        </div>                
    </div>
    <hr className='bg-gray-800'></hr>
</section>

  )
}
