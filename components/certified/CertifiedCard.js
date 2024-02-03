import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VscChevronRight } from "react-icons/vsc";

//import image from '../public/projects/Enviosfarma/main.jpg'
export default function CertifiedCard({ data }) {
  //image = '../public/projects/' + data.name +'/'+ data.images[0];
  return (
    <div
      className="card mx-4 border-gray-200 rounded-xl shadow  "
      data-aos="fade-up"
    >
      <div href="#">
        <Image
          alt={data.name}
          loading="eager"
          className="rounded-t-lg card-image certifiedImage"
          width={500}
          height={500}
          src={"/certifieds/" + data.id + ".jpg"}
        />
      </div>
      <div className="p-5 text-center">
        <div>
          <p className="mb-2 text-xl  tracking-tight text-white">{data.name}</p>
          
            <p className="mb-2 font-normal text-white">{data.date} </p>
         
        </div>

        <Link href={"/certifieds/" + data.id + ".pdf"}
          download className="text-center text-blue-500 inline-flex items-center text-base  justify-center  mb-3  text-center ">
        Descargar
        <VscChevronRight />
        </Link>
      </div>
    </div>
  );
}
