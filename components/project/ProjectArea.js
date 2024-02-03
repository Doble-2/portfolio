import React from "react";
import ProjectCarousel from "@component/components/project/ProjectCarousel";

export default function ProjectArea({ data }) {
  return (
    <div className=" main-section p-8 bg-white flex flex-col justify-evenly cardsArea" id="projectArea">
      <h3 className="text-center text-2xl font-bold mb-4">
        Algunos proyectos en los que he participado
      </h3>
      <ProjectCarousel data-aos="fade-up" className="" data={data} />
     
    </div>
  );
}
