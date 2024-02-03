import React from "react";
import Image from "next/image";
import { VscChevronRight } from "react-icons/vsc";

export default function PrincipalBanner() {
  return (
    <section className="  px-10 bg-black">
      <div  className="grid flex items-center main-section sm:flex max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16  lg:px-16 lg:grid-cols-12">
        <div className="lg:mr-20 place-self-center lg:col-span-7">
          <div className="" >
          <h1 className="max-w-2xl mb-4  tracking-tight leading-none text-2xl font-bold  md:text-1xl xl:text-2xl ">
            Hola, soy
            <p className=" text-3xl font-extrabold  md:text-3xl xl:text-4xl ">
              Ángel Calderón
            </p> 
          </h1>
          </div>
          
           <p className="max-w-2xl mb-6 lg:mb-8 text-lg  md:text-lg lg:text-xl ">
            un desarrollador de software apasionado por los retos y el
            aprendizaje constante. Tengo 21 años, actualmente, resido en
            Caracas, Venezuela.
  </p>
          <div className="hidden sm:flex justify-center">
            <a
                href="/AngelCalderonCV.pdf"
                download
              className="text-blue-500 inline-flex items-center text-base sm:text-lg justify-center px-5 py-3 mr-3 mb-3 sm:mb-0  text-center "
            >
              Descargar curriculum
              <VscChevronRight />

            </a>
           
          </div>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 flex justify-center">
          <Image
            className="rounded-t-lg ProfileImage  z-4 "
            width={300}
            height={250}
            src={"/angel4.png"}
            alt="foto de angel calderon"
          />
        </div>
      </div>
     
    </section>
  );
}
