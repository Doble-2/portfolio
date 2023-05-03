import React from "react";

export default function Data({ data }) {
  return (
    <div class="lg:ml-20 place-self-center  px-6 py-4  lg:col-span-7">
      <h5
        class="mb-2 text-2xl text-center tracking-tight text-black"
        style={{ borderBottom: `3px solid ${data.color}` }}
      >
        {data.name}
      </h5>

      <p class="mb-3 font-normal text-gray-800">{data.desc}</p>
      <hr
        className=" mb-3 text-black"
        style={{ borderColor: `${data.color}` }}
      ></hr>
      <div className="flex justify-evenly">
        <div className="flex">
          <span className="mx-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-calendar-check"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />{" "}
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
            </svg>
          </span>
          <p class="mb-3 font-normal text-gray-800 ">
            Desde : {data.dateStart}{" "}
          </p>
        </div>
        {data.dateEnd && (
          <div className="flex">
            <span className="mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar-check"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />{" "}
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
              </svg>
            </span>
            <p class="mb-3 font-normal text-gray-800">
              Hasta : {data.dateEnd}{" "}
            </p>
          </div>
        )}

        {/* if (data.dateEnd) {
                <div className='flex'>
                 <span  className='mx-3'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16"> <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/> </svg>
                 </span>
                 <p class="mb-3 font-normal text-gray-800"> 
                 Hasta : {data.dateEnd} </p>
                 </div>
            }*/}
      </div>
      <p class="mb-3 font-normal text-gray-800"> Rol : {data.role}</p>
      <hr
        className=" mb-3 text-black"
        style={{ borderColor: `${data.color}` }}
      ></hr>
    </div>
  );
}
