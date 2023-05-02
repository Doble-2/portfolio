import React from 'react'
import CarouselPage from '@component/components/project/page/CarouselPage'
import app  from '../../firebase/client'
import Layout from '@component/components/Layout'

import { getFirestore, collection,addDoc,getDoc,getDocs,doc,deleteDoc,setDoc } from 'firebase/firestore'
import Link from 'next/link'
const db = getFirestore(app)
export default function projectpage ({project}) {
  return (
    <Layout>
      <div className='py-4'>
      <Link href={'project/[id]'} as={'project/'+ project.id }>
        <h5 class="mb-2 text-4xl text-center tracking-tight text-black" style={{borderBottom: `3px solid ${project.color}`}}>{project.name}</h5>
    </Link>
      <div class="grid  sm:flex max-w-screen-xl   mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12" data-aos="fade-down">
        
    <div class=" lg:mt-0 lg:col-span-5 flex justify-center" style={{maxWidth:` 550px;`}}>
    <CarouselPage data={project}/>
        
        </div>  
                     
        <div class="lg:ml-20 place-self-center  px-6 py-4  lg:col-span-7">
      
    <p class="mb-3 font-normal text-gray-800">{project.desc}</p>
  
            
          
        </div>
     
    </div>

      </div>
      
   
     
</Layout>
  )
}
export async function getStaticPaths(ctx) {
    
    
    
  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export const getStaticProps = async ({params}) => {


  //console.log(queryProjects);
  const docRef = doc(db, "projects", params.id);
var docSnap = await getDoc(docRef);

var Docproject = docSnap.data();


  return {
    props: {
      project: Docproject,
    }
  }
}