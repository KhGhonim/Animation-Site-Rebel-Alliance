import { useState } from "react";
import "./App.css";
import AlphabaticLoader from "./Components/AlphabaticLoader/AlphabaticLoader";
import Loader from "./Components/Loader/Loader";
import Footer from "./Components/FooterSection/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import MiddleSections from "./Components/MiddleSections/MiddleSections";
import Navbar from "./Components/Navbar/Navbar";
import { gsap } from "gsap";

function App() {
  const [showAlphabaticLoader, setShowAlphabaticLoader] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [Photo, setPhoto] = useState("/Rebel_Alliance_loader.svg");

  return (
    <div className="w-full h-dvh overflow-hidden permanent-marker-regular bg-black text-white">
      {showContent && (
        <>
          <Navbar />
          <HeroSection setLoading={setShowContent} />
          <MiddleSections />
          <Footer />
        </>
      )}

      {/* Loader with transition */}
      {showLoader && (
        <Loader
          onUpdate={(progress) => {
            if (progress >= 95 && !showContent) setShowContent(true);
          }}
          onComplete={() => {
            setPhoto("/Rebel_Alliance_middle.svg");
            gsap.to("#LoaderContainer", {
              opacity: 0,
              duration: 1,
              ease: "power2.inOut",
              onComplete: () => setShowLoader(false),
            });
          }}
          Photo={Photo}
        />
      )}

      {/* Initial loader with transition */}
      {showAlphabaticLoader && (
        <AlphabaticLoader
          onUpdate={(progress) => {
            if (progress >= 99 && !showLoader) {
              setShowLoader(true);
            }
          }}
          onComplete={() => {
            setShowAlphabaticLoader(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
