import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@component/components/Layout'
import ProjectArea from "@component/components/project/ProjectArea";
import CertifiedArea from "@component/components/certified/CertifiedArea"
import PrincipalBanner from '@component/components/PrincipalBanner';
import app  from '../firebase'
import { getFirestore, collection,addDoc,getDoc,getDocs,doc,deleteDoc,setDoc } from 'firebase/firestore'

const db = getFirestore(app)




const inter = Inter({ subsets: ['latin'] })

export default function Home({ projects, certifieds }) {
  
  projects.sort((a,b)=>{
    return b.order -a.order
  });

  certifieds.sort((a,b)=>{
    return b.order -a.order
  });

  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col   ${inter.className}`}
      >
        <PrincipalBanner/>
        <div className='flex flex-wrap justify-evenly'>
        <ProjectArea data={projects}/>
        </div>
        <div className='flex flex-wrap justify-evenly'>
        <CertifiedArea data={certifieds}/>
        </div>
      </main>
    </Layout>

  )
}

export const getStaticProps = async (context) => {
  const queryProjects = await getDocs(collection(db, 'projects'))
  const queryCertifieds = await getDocs(collection(db, 'certifieds'))
  const docsProjects = []
  const docsCertifieds = []
  //console.log(queryProjects);
  queryProjects.forEach((doc) => {
    docsProjects.push({ ...doc.data(), id: doc.id })
  })
  queryCertifieds.forEach((doc) => {
    docsCertifieds.push({ ...doc.data(), id: doc.id })
  })
  return {
    props: {
      projects: docsProjects,
      certifieds:docsCertifieds
    }
  }
}
