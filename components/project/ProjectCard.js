import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VscChevronRight } from "react-icons/vsc";

//import image from '../public/projects/Enviosfarma/main.jpg'
export default function ProjectCard({ data }) {
 
  //image = '../public/projects/' + data.name +'/'+ data.images[0];
  return (
    <div
      className="card mx-4  rounded-xl shadow "
      data-aos="fade-up"
      style={{ flex: `0 0 30%` }}
    >
      <Link href={"project/[id]"} as={"project/" + data.id}>
        <Image
          loading="eager"
          className="rounded-t-lg card-image card-image-project"
          width={500}
          height={500}
          src={"/projects/" + data.name + "/" + data.images[0]}
          alt={data.name}
        />
      </Link>
      <div className="p-5 text-center">
        <Link href={"project/[id]"} as={"project/" + data.id}>
          <p className="mb-2 text-xl  tracking-tight text-white">{data.name}</p>
        </Link>
        <div className="card-desc">
        <p className="mb-3 font-normal text-left text-gray-300">{data.desc}</p>
        </div>
        
        <Link className="text-center text-blue-500 inline-flex items-center text-base sm:text-lg justify-center px-5 py-3 mr-3 mb-3 text-center " href={"project/[id]"} as={"project/" + data.id}>
              Ver más
              <VscChevronRight />
        </Link>
      </div>
    </div>
  );
}
