import CertifiedCard from '@component/components/certified/CertifiedCard'

import React, { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import {
  DotButton,
  PrevButton,
  NextButton,
} from "../EmblaCarouselArrowsDotsButtons";


export default function CertifiedCarousel ({data})   {
    const options = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }


    const [emblaRef, emblaApi] = useEmblaCarousel(options,[Autoplay()])
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
  
    const scrollPrev = useCallback(
      () => emblaApi && emblaApi.scrollPrev(),
      [emblaApi]
    );
    const scrollNext = useCallback(
      () => emblaApi && emblaApi.scrollNext(),
      [emblaApi]
    );
    const scrollTo = useCallback(
      (index) => emblaApi && emblaApi.scrollTo(index),
      [emblaApi]
    );
  
    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi, setSelectedIndex]);
  
    useEffect(() => {
      if (!emblaApi) return;
      onSelect();
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", onSelect);
      emblaApi.on("reInit", onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);
// console.log(emblaRef)
  return (
    <div className='flex'>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        
    <div className="embla mb-5 ">
    
      <div className="embla__viewport " ref={emblaRef}>
      
        <div className="embla__container  ">
        {data.map((certified) => (
            <CertifiedCard  key={certified.id} data={certified} />
          ))}
           
        </div>
       
     
      </div>
     
    </div>
    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  )
}
