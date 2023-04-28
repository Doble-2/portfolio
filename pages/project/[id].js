import React from 'react'
import app  from '../../firebase/client'
import { getFirestore, collection,addDoc,getDoc,getDocs,doc,deleteDoc,setDoc } from 'firebase/firestore'
import Link from 'next/link'
const db = getFirestore(app)
export default function projectpage ({project}) {
  return (
    <div class="p-5">
    <Link href={'project/[id]'} as={'project/'+ project.id }>
        <h5 class="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
    </Link>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.desc}</p>
    <Link href={'project/[id]'} as={'project/'+ project.id }>
    <p href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-1 focus:ring-gray-100  hover:bg-teal-900  btn-green">
        Read more
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </p>
    </Link>
    
</div>
  )
}
export async function getStaticPaths(ctx) {
    
    
    
  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export const getStaticProps = async (context) => {


  //console.log(queryProjects);
  const docRef = doc(db, "projects", 'XPzrM29jkkTU6j9xYJrl');
var docSnap = await getDoc(docRef);

var Docproject = docSnap.data();
//Docproject = JSON.stringify(Docproject); 
console.log(Docproject);

  return {
    props: {
      project: Docproject,
    }
  }
}