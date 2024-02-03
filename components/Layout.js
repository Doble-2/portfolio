import React, { Children } from "react";
import Navbar from "./Navbar";
import Footer from "@component/components/Footer";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
