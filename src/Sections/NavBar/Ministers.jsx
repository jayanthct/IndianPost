import React from "react";
import minister1 from "./Assets/minister1.png";
import minister2 from "./Assets/minister2.png";
import HeroBanner from "../HeroBanner";

function Ministers() {
  return (
    <>
      <section className="ministers flex justify-between w-full items-center gap-8 px-[2%]">
        <article className="misinisters scale-[0.8] flex flex-col justify-center items-center gap-4">
          <div className="image w-48 h-48 rounded-full overflow-clip border-2 border-[#7c7c7c2e]">
            <img src={minister2} alt="" className="minister" />
          </div>
          <div className="textarea hover:underline cursor-pointer">
            <p className="name text-center font-bold text-[20px] text-red-800">
              Mr. Jyotiraditya M. Scindia
            </p>
            <p className="designation text-center">
              Minister of Communications
            </p>
          </div>
        </article>


      <HeroBanner></HeroBanner>


        <article className="misinisters flex scale-[0.8] flex-col justify-center items-center gap-4">
          <div className="image w-48 h-48 rounded-full overflow-clip border-2 border-[#7c7c7c2e]">
            <img src={minister1} alt="" className="minister" />
          </div>
          <div className="textarea hover:underline cursor-pointer">
            <p className="name text-center font-bold text-[20px] text-red-800">
              Dr. Chandra Sekhar Pemmasani
            </p>
            <p className="designation text-center">
              Minister of State for Communications
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Ministers;
