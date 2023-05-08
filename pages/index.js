import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@component/components/Layout'
import ProjectArea from "@component/components/project/ProjectArea";
import Current from '@component/components/Current';
import CertifiedArea from "@component/components/certified/CertifiedArea"
import PrincipalBanner from '@component/components/PrincipalBanner';
import app  from '../firebase/client'
import Head from 'next/head';
import Contact from '@component/components/Contact';
import { getFirestore, collection,addDoc,getDoc,getDocs,doc,deleteDoc,setDoc } from 'firebase/firestore'

import About from '@component/components/About';

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
    <>
   <Head>
    <title>Angel Calderon Desarrollador Frontend</title>
   <link rel="shortcut icon" href="/favicon.png" />
   <meta name="description" content="Soy un desarrollador de software apasionado por los retos y el aprendizaje constante. Me encanta crear sitios web atractivos, funcionales y accesibles. Actualmente estoy estudiando Ingeniería en Sistemas en la UNEXPO y también tengo varios certificados de plataformas como Platzi y Google."/>
  <meta name="keywords" content="desarrollo, programacion, web, desarrollador, programador, Caracas, Angel Calderon, android, movil, mobile, developer, software, flutter, react,react.js, next.js, php, laravel,bootstrap,tailwind, platzi "/>
 </Head>
    <Layout>
      <main
        className={`flex min-h-screen flex-col ${inter} `}
      >
        <PrincipalBanner/>
        <div className='flex flex-wrap justify-evenly'>
        <ProjectArea data={projects}/>
        <Current></Current>
        <About/>
        <CertifiedArea data={certifieds}/>
        <Contact/>
        </div>

      </main>
    </Layout>
    
    </>
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
