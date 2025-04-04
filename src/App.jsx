import React from "react";
import NavBar from "./Sections/NavBar/NavBar";
import Ministers from "./Sections/NavBar/Ministers";
import Footer from "./Sections/Footer/Footer";
import Sidebar from "./Sections/Menu/Menu";
import IconGrid from "./Sections/IconGrid/IconGrid";
import PriceSection from "./Sections/Payment/PriceSection";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Ministers></Ministers>

      <main className="w-full flex justify-between items-start mt-6 pr-[4%]">
        <Sidebar />
        <section className="side flex flex-col justify-center items-center gap-12">
          <PriceSection></PriceSection>
          <IconGrid />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
