import React from 'react'
import CertifiedCarousel from "@component/components/certified/CertifiedCarousel";

export default function ProjectArea({data}) {
  return (
    <div className='p-12 cardsArea'>
        <h3 className='text-center text-2xl font-bold mb-4'>Certificados</h3>
        <CertifiedCarousel data={data}/>
    </div>
   
  )
}
