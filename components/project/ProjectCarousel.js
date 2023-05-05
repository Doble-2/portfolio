import ProjectCard from '@component/components/project/ProjectCard'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'




export default function ProjectCarousel ({data})   {
    const options = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }


    const [emblaRef, emblaApi] = useEmblaCarousel(options,[Autoplay()])

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
// console.log(emblaRef)
  return (
    <div className="embla mb-5">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container  " >
        {data.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
          
   

          
          
           
        </div>
      </div>
    
    </div>
   
  )
}
