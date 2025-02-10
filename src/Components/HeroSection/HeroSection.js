import { jsx as _jsx } from "react/jsx-runtime";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
function HeroSection({ setLoading }) {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo(".bgPic", { opacity: 0, y: 100, scale: 1.5 }, { opacity: 1, y: 0, duration: 3, scale: 1.5, ease: "power3.inOut" }).to(`.bgPic`, { duration: 3, y: 0, scale: 1, ease: "power4.inOut" });
    }, [setLoading]);
    return (_jsx("div", { style: {
            width: "100dvw",
            height: "100dvh",
            backgroundImage: "url('./VIDEO.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }, className: "bgPic fixed top-0 left-0 z-30", children: _jsx("div", { style: {
                width: "100dvw",
                height: "100dvh",
                backgroundImage: "url('./TEXTURE 2.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            } }) }));
}
export default HeroSection;
