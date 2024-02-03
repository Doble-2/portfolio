import React from "react";
import CarouselPage from "@component/components/project/page/CarouselPage";
import app from "../../firebase/client";
import Layout from "@component/components/Layout";
import Data from "@component/components/project/page/Data";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
const db = getFirestore(app);
export default function projectpage({ project }) {
  return (
    <>
      <Head>
        <title>{project.name}</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className="py-4 bg-white">
          <div
            className="grid  sm:flex max-w-screen-xl   mx-auto lg:gap-8 xl:gap-0 lg:py-10 "
            data-aos="fade-down"
            style={{ minHeight: `80vh` }}
          >
            <CarouselPage data={project} />
            <Data data={project} />
          </div>
        </div>
      </Layout>
    </>
  );
}
export async function getStaticPaths(ctx) {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
}

export const getStaticProps = async ({ params }) => {
  //console.log(queryProjects);
  const docRef = doc(db, "projects", params.id);
  var docSnap = await getDoc(docRef);

  var Docproject = docSnap.data();
  //console.log(Docproject);

  return {
    props: {
      project: Docproject,
    },
  };
};
