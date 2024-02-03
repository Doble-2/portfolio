import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import {
  DotButton,
  PrevButton,
  NextButton,
} from "../../EmblaCarouselArrowsDotsButtons";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselPage({ data }) {
  const options = { containScroll: "trimSnaps" };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
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
    <div className="w550px lg:mt-0 md:col-span-6 flex justify-center">
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <div className="embla ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {data.images.map((image) => (
              <div className=" project-image-container " key={image}>
                <div className=" p-3 embla__slide flex justify-center">
                  <div className="rounded-lg bg-black flex justify-center p-3">
                    <Image
                      loading="eager"
                      className="rounded-t-lg   card-image project-image"
                      width={1000}
                      height={1000}
                      src={"/projects/" + data.name + "/" + image}
                      alt={image}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          */}
      </div>
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
}
