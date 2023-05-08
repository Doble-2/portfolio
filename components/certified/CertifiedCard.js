import React from 'react'
import Image from 'next/image'
//import image from '../public/projects/Enviosfarma/main.jpg'
export default function CertifiedCard({data}) {
  

//image = '../public/projects/' + data.name +'/'+ data.images[0];
  return (
    <div className="card mx-4 border-gray-200 rounded-xl shadow  "  data-aos="fade-up">
    <div href="#">
      <Image alt={data.name} className="rounded-t-lg card-image certifiedImage"  width={500} height={500} src={'/certifieds/'+data.id+'.jpg' } />
    </div>
    <div className="p-5">
        <div href="#">
            <p className="mb-2 text-xl  tracking-tight text-white">{data.name}</p>
            <div className="flex w-50 ">
            
            <p className="mb-3 font-normal text-white">
              {data.date}{" "}
            </p>
            <span className="mx-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />{" "}
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
              </svg>
            </span>
          </div>
        </div>
        <a  href={'/certifieds/'+data.id+'.pdf'} download className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ring-white ring-1 rounded-lg focus:ring-1 focus:ring-gray-100  hover:bg-gray-900  bg-black ">
            Descargar
              </a>
    </div>
</div>
    
  )
}
