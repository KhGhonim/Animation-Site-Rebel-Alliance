import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "w-full h-dvh overflow-hidden permanent-marker-regular bg-black text-white", children: [showContent && (_jsxs(_Fragment, { children: [_jsx(Navbar, { setLoading: setShowContent }), _jsx(HeroSection, { setLoading: setShowContent }), _jsx(MiddleSections, {}), _jsx(Footer, {})] })), showLoader && (_jsx(Loader, { onUpdate: (progress) => {
                    if (progress >= 95 && !showContent)
                        setShowContent(true);
                }, onComplete: () => {
                    setPhoto("/Rebel_Alliance_middle.svg");
                    gsap.to("#LoaderContainer", {
                        opacity: 0,
                        duration: 1,
                        ease: "power2.inOut",
                        onComplete: () => setShowLoader(false),
                    });
                }, Photo: Photo })), showAlphabaticLoader && (_jsx(AlphabaticLoader, { onUpdate: (progress) => {
                    if (progress >= 99 && !showLoader) {
                        setShowLoader(true);
                    }
                }, onComplete: () => {
                    setShowAlphabaticLoader(false);
                } }))] }));
}
export default App;
