import { useEffect, useState } from "react";
import NavBar from "./Sections/NavBar/NavBar";
import Ministers from "./Sections/NavBar/Ministers";
import Footer from "./Sections/Footer/Footer";
import Sidebar from "./Sections/Menu/Menu";
import IconGrid from "./Sections/IconGrid/IconGrid";
import PriceSection from "./Sections/Payment/PriceSection";
import RazorPayModal from "./Sections/RazorPayModal/RazorPayModal";
import PageNotFound from "./PageNotFound";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isCookiePresent = document.cookie
      .split("; ")
      .some((cookie) => cookie.startsWith("formToken="));

    if (isCookiePresent) {
      alert("Match!");
    }
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Ministers></Ministers>
      <RazorPayModal isVisible={isVisible} setIsVisible={setIsVisible}></RazorPayModal>
      <main className="w-full flex justify-between items-start mt-6 pr-[4%]">
        <Sidebar />
        <section className="side flex flex-col justify-center items-center gap-12">
          <PriceSection setIsVisible={setIsVisible}></PriceSection>
          <IconGrid />
        </section>
      </main>
      {/* <PageNotFound></PageNotFound> */}
      <Footer></Footer>
    </>
  );
}

export default App;
