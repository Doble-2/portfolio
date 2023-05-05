import React from 'react'
import Image from 'next/image'

export default function PrincipalBanner() {
  return (
    <section className=" px-10">
    <div className="grid  sm:flex max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16  lg:px-16 lg:grid-cols-12" >
        <div className="lg:mr-20 place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl ">Hola me llamo Angel Calderon</h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 text-lg  md:text-lg lg:text-xl ">soy un desarrollador de software apasionado por los retos y el aprendizaje constante. Me encanta crear sitios web atractivos, funcionales y accesibles.</p>
            <div className='hidden sm:block'>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Descarga mi Curriculum
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="/angel4.png" download className="bg-black ring-white ring-1  inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white  rounded-lg hover:bg-gray-900 focus:ring-1 focus:ring-gray-100 ">
                Descargar
            </a> 
            </div>
           
            
            
          
        </div>
        <div className=" lg:mt-0 lg:col-span-5 flex justify-center">
        <Image className="rounded-t-lg ProfileImage  z-4 "  width={250} height={250} src={'/angel4.png' } alt="" />
        
        </div>  
                     
    </div>
    <hr className='bg-gray-800'></hr>
</section>

  )
}
