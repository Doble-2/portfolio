import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
//import image from '../public/projects/Enviosfarma/main.jpg'
export default function ProjectCard({data}) {
  
  if (data.desc.length > 100) {
    data.desc= data.desc.substr(0,100)
    data.desc= data.desc + ' ...'
  }
//image = '../public/projects/' + data.name +'/'+ data.images[0];
  return (
    <div className="card mx-4  rounded-lg shadow " data-aos="fade-up" style={{flex: `0 0 30%`}}>
    <Link href={'project/[id]'} as={'project/'+ data.id }>
    <Image className="rounded-t-lg card-image"  width={500} height={500} src={'/projects/' + data.name +'/'+data.images[0] } alt={data.name} />
    </Link>
    <div className="p-5">
        <Link href={'project/[id]'} as={'project/'+ data.id }>
            <p className="mb-2 text-xl  tracking-tight text-white">{data.name}</p>
        </Link>
        <p className="mb-3 font-normal text-gray-300">{data.desc}</p>
        <Link href={'project/[id]'} as={'project/'+ data.id }>
        <p href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ring-white ring-1 rounded-lg focus:ring-1 focus:ring-gray-100  hover:bg-black-900  bg-black ">
            Ver mas
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </p>
        </Link>
        
    </div>
</div>
    
  )
}
