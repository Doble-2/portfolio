import React from 'react'
import ProjectCarousel from "@component/components/project/ProjectCarousel";

export default function ProjectArea({data}) {
  return (
    <div className='p-12  cardsArea'>
        <h3 className='text-center text-2xl font-bold mb-4'>Proyectos</h3>
        <ProjectCarousel data={data}/>
    </div>
   
  )
}
