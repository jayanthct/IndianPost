import React from "react";
import logo from "./Assets/indianpost.svg";
import india from "./Assets/india.png";
import g20 from "./Assets/G20.png";
import amrit from "./Assets/amrit.png";
import Marquee from "../Marquee/Marquee";

function NavBar() {
  return (
    <>
      <Marquee></Marquee>
      <nav className="navbar w-full px-[16px] bg-white z-20 lg:px-[4%] flex justify-between mt-4 items-center">
        <div className="logsection w-48">
          <img src={logo} alt="" className="logo w-full" />
        </div>
        <div className="rightside flex justify-center items-center gap-8">
          <div className="logsection w-36">
            <img src={amrit} alt="" className="amrit w-full" />
          </div>
          <div className="logsection w-28">
            <img src={g20} alt="" className="g20 w-full" />
          </div>
          <div className="logsection w-28">
            <img src={india} alt="" className="india w-full" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
