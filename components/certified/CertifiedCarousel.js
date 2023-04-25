import CertifiedCard from '@component/components/certified/CertifiedCard'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'




export default function CertifiedCarousel ({data})   {
    const options = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }


    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
// console.log(emblaRef)
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container  ">
        {data.map((certified) => (
            <CertifiedCard  key={certified.id} data={certified} />
          ))}
           
        </div>
      </div>
    
    </div>
   
  )
}
