import React from 'react'
import Image from 'next/image'
//import image from '../public/projects/Enviosfarma/main.jpg'
export default function CertifiedCard({data}) {
  

//image = '../public/projects/' + data.name +'/'+ data.images[0];
  return (
    <div class="card mx-4 border-gray-200 rounded-lg shadow ">
    <a href="#">
      <Image class="rounded-t-lg card-image certifiedImage"  width={500} height={500} src={'/certifieds/'+data.id+'.jpg' } alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
        </a>
        <a href={'/certifieds/'+data.id+'.pdf'} download class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-1 focus:ring-gray-100  hover:bg-teal-900  btn-green">
            Descargar
              </a>
    </div>
</div>
    
  )
}
