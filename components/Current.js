import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Current() {
  return (
    <section className="bg-black">
           <div className="flex flex-wrap justify-evenly">
    <div className="grid  sm:flex max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className=" lg:mt-0 lg:col-span-5 flex justify-center">
        <Image
               className="rounded-t-lg card-image"  data-aos="fade-up" width={250} height={250} src={'/projects/Enviosfarma/home_mobile.jpg' } alt="" />
        
        </div>  
                     
        <div className="lg:ml-20 place-self-center  px-6 py-4  lg:col-span-7">
            <h3 className="max-w-2xl text-center mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl ">Actualmente colaboro en Enviosfarma</h3>
            <p className="max-w-2xl mb-6 font-light text-lg text-center md:text-lg lg:text-xl ">En enviosfarma me desempeño como programador junior, trabajo en el desarrollo de un sistema para la compra y alquiler de productos médicos, a la vez que ayuda a conectar con profesionales de la salud.</p> 
            <div className='hidden sm:flex  md:justify-center'>
            
            
            </div>
            <div className="hidden sm:flex md:justify-center">
            <Link href={'/project/XPzrM29jkkTU6j9xYJrl'} as={'/project/XPzrM29jkkTU6j9xYJrl/' }
              className="text-blue-500 inline-flex items-center text-base sm:text-lg justify-center px-5 py-3 mr-3 mb-3 font-medium text-center "
            >
             Revisa el proyecto
             
            </Link>
           
          </div>
           
            
            
          
        </div>
     
    </div>
    
    <hr className='bg-gray-800'></hr>
    </div>
</section>
  )
}
