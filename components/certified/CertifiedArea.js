import React from "react";
import CertifiedCarousel from "@component/components/certified/CertifiedCarousel";

export default function ProjectArea({ data }) {
  return (
    <div className="p-6 cardsArea main-section flex flex-col justify-evenly bg-white" id="certifiedArea">
      <h3 className="text-center text-2xl font-bold mb-4">
        Algunos certificados que he conseguido
      </h3>
      <CertifiedCarousel data-aos="fade-up" data={data} />
    </div>
  );
}
