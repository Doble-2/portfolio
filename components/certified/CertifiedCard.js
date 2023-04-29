import React from 'react'
import Image from 'next/image'
//import image from '../public/projects/Enviosfarma/main.jpg'
export default function CertifiedCard({data}) {
  

//image = '../public/projects/' + data.name +'/'+ data.images[0];
  return (
    <div class="card mx-4 border-gray-200 rounded-lg shadow ">
    <div href="#">
      <Image class="rounded-t-lg card-image certifiedImage"  width={500} height={500} src={'/certifieds/'+data.id+'.jpg' } alt="" />
    </div>
    <div class="p-5">
        <div href="#">
            <h5 class="mb-2 text-xl  tracking-tight text-white">{data.name}</h5>
        </div>
        <a href={'/certifieds/'+data.id+'.pdf'} download class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ring-white ring-1 rounded-lg focus:ring-1 focus:ring-gray-100  hover:bg-gray-900  bg-black ">
            Descargar
              </a>
    </div>
</div>
    
  )
}
