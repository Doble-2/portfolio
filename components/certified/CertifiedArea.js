import React from 'react'
import CertifiedCarousel from "@component/components/certified/CertifiedCarousel";

export default function ProjectArea({data}) {
  return (
    
    <div className='p-6 cardsArea' id='certifiedArea'>
        <h3 className='text-center text-2xl font-bold mb-4'>Algunos certificados que he conseguido</h3>
        <CertifiedCarousel  data-aos="fade-up" data={data}/>
        <hr className='bg-gray-800'></hr>
    </div>
   
  )
}
