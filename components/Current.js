import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Current() {
  return (
    <section className="">
    <div className="grid  sm:flex max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className=" lg:mt-0 lg:col-span-5 flex justify-center">
        <Image className="rounded-t-lg card-image"  data-aos="fade-up" width={250} height={250} src={'/projects/Enviosfarma/home_mobile.jpg' } alt="" />
        
        </div>  
                     
        <div className="lg:ml-20 place-self-center  px-6 py-4  lg:col-span-7">
            <h3 className="max-w-2xl text-center mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl ">Actualmente colaborando en Enviosfarma</h3>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 text-lg  md:text-lg lg:text-xl ">Como programador junior. Trabajo en el desarrollo de un sistema para la compra y alquiler de productos médicos, a la vez que ayuda a conectar con profesionales de la salud.</p>  <p className="max-w-2xl mb-6 font-light lg:mb-8 text-lg  md:text-lg lg:text-xl "> El proyecto está siendo un éxito y hemos recibido comentarios positivos de los usuarios.</p>
            <div className='hidden sm:flex  md:justify-center'>
            <Link href={'/project/XPzrM29jkkTU6j9xYJrl'} as={'/project/XPzrM29jkkTU6j9xYJrl/' }>
            <p href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
               Revisa el proyecto
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </p>
            <p  className="bg-black txt-center ring-white ring-1  inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white  rounded-lg hover:bg-gray-900 focus:ring-1 focus:ring-gray-100 ">
                Ver más
            </p> 
        </Link>
            
            </div>
           
            
            
          
        </div>
     
    </div>
    <hr className='bg-gray-800'></hr>
</section>
  )
}
