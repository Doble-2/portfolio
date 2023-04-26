import React from 'react'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <div class="banner text-white py-24 px-10 object-fill">
    <div class="containeravila">
    <Image class="rounded-t-lg bannerImage "  width={250} height={250} src={'/avila.png' } alt="" />
    </div>
    
    <div class="md:w-1/2 flex lg:grid justify-end z-4" >
        <div> <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl ">Hola me llamo Angel Calderon</h1>
            <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl ">soy un desarrollador de software apasionado por los retos y el aprendizaje constante. Me encanta crear sitios web atractivos, funcionales y accesibles.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="btn-green inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white  rounded-lg hover:bg-gray-900 focus:ring-4 focus:ring-gray-100 ">
                Speak to Sales
            </a> 
     
     </div>
     
     </div>  
     <div class="">
        <div className='flex justify-start' >
        <Image class=" hidden lg:block rounded-t-lg ProfileImage  z-4 "  width={250} height={250} src={'/angel4.png' } alt="" />
        </div>
    
     </div>
 </div>
  )
}
