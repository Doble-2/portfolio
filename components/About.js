import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function About() {
  return (
    <section className="px-10  flex justify-center " id='aboutArea' data-aos="fade-up" style={{width:`100%`}}> 
    <div className="grid  sm:flex m px-2 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16  lg:px-16 lg:grid-cols-12" >
        <div className=" place-self-center lg:col-span-7">
            <h3 className="max-w-2xl mb-4 text-center  text-4xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl ">Sobre mi </h3>
            <p className="max-w-2xl   mb-6 font-light lg:mb-8 text-lg  md:text-lg lg:text-xl "> Actualmente estoy estudiando Ingeniería en Sistemas en la UNEXPO y también tengo varios certificados de plataformas como Platzi y Google.
            </p><p className="max-w-2xl mb-6 font-light lg:mb-8 text-lg  md:text-lg lg:text-xl ">Llevo 2 años y medio trabajando como desarrollador y
me enorgullece mi capacidad para seguir aprendiendo y estar al día con las últimas tendencias y tecnologías en mi campo. Me apasiona el desarrollo de software porque me permite crear soluciones tecnológicas que mejoran la vida de las personas.
</p>

            <div className=' flex wrap justify-center'>

            <img className='mx-5 my-3 ' style={{maxWidth:`50px`}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
            <img  className='mx-5 my-3 ' style={{maxWidth:`50px`}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />       
          
            <img  className='mx-5  my-3 ' style={{maxWidth:`50px`}}  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
          
            <img  className='mx-5  my-3 ' style={{maxWidth:`50px`}}  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          
            <img  className='mx-5 my-3 ' style={{maxWidth:`50px`}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />
          
            <img   className='mx-5 my-3 ' style={{maxWidth:`50px`}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          
           
            <img  className='mx-5 my-3 ' style={{maxWidth:`50px`}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          
          
            <img  className='mx-5 my-3 ' style={{maxWidth:`50px`}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" />
          
            <img   className='mx-5 my-3'style={{maxWidth:`50px`}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          
            <img  className='mx-5 my-3 'style={{maxWidth:`50px`}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
          
            </div>
           
            
            
          
        </div>
       
                     
    </div>
    <hr className='bg-gray-800'></hr>
</section>
   
  )
}
