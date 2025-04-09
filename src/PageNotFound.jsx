import React, { useEffect } from "react";
import illustration from "./Sections/Assets/illustration.svg";
import NavBar from "./Sections/NavBar/NavBar";

const PageNotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href =
        "https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar />
      <p className="text-gray-600 text-center text-lg mt-4">
        Redirecting you in 3 seconds...
      </p>
      <section className="pagenotfound w-full px-[10%] flex flex-col justify-center items-center gap-4 my-2">
        <h1 className="font-bold text-[72px] text-red-800">
          Server Crashed 500
        </h1>
        <img
          src={illustration}
          alt="Server Error Illustration"
          className="illustrions w-[60%] -mt-[6%]"
        />
      </section>
      <footer></footer>
    </>
  );
};

export default PageNotFound;
