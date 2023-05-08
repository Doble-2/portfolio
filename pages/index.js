import Image from 'next/image'
import { Roboto } from 'next/font/google'
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




const inter = Roboto({ subsets: ['latin'],weight:'100' })

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
   
  <meta name="description" content="Actualmente estoy estudiando Ingeniería en Sistemas en la UNEXPO y también tengo varios certificados de plataformas como Platzi y Google."/>


  <meta property="og:url" content="https://angelcalderon.dev/"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="Angel Calderon Desarrollador Frontend"/>
  <meta property="og:description" content="Actualmente estoy estudiando Ingeniería en Sistemas en la UNEXPO y también tengo varios certificados de plataformas como Platzi y Google."/>
  <meta property="og:image" content="https://angelcalderon.dev/_next/image?url=%2Fprojects%2Fangelcalderon.dev%2Fhome.jpg&w=1080&q=75"/>


  <meta name="twitter:card" content="summary_large_image"/>
  <meta property="twitter:domain" content="angelcalderon.dev"/>
  <meta property="twitter:url" content="https://angelcalderon.dev/"/>
  <meta name="twitter:title" content="Angel Calderon Desarrollador Frontend"/>
  <meta name="twitter:description" content="Actualmente estoy estudiando Ingeniería en Sistemas en la UNEXPO y también tengo varios certificados de plataformas como Platzi y Google."/>
  <meta name="twitter:image" content="https://angelcalderon.dev/_next/image?url=%2Fprojects%2Fangelcalderon.dev%2Fhome.jpg&w=1080&q=75"/>
  <meta name="keywords" content="desarrollo, programacion, web, desarrollador, programador, Caracas, Angel Calderon, android, movil, mobile, developer, software, flutter, react,react.js, next.js, php, laravel,bootstrap,tailwind, platzi "/>
 </Head>
    <Layout>
      <main
        className={`flex min-h-screen flex-col  `}
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
