import React from 'react'
import ProjectCarousel from "@component/components/project/ProjectCarousel";

export default function ProjectArea({data}) {
  return (
    <div className='p-8  cardsArea' data-aos="fade-down">
        <h3 className='text-center text-2xl font-bold mb-4'>Algunos proyectos en los que he participado</h3>
        <ProjectCarousel className="" data={data}/>
            <hr className='bg-gray-800'></hr>
    </div>
   
  )
}
