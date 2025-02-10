import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
function Loader({ onComplete, onUpdate, Photo }) {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to("#LoaderPic", {
            duration: 2,
            delay: 1,
            scale: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.to("#LoaderPic", {
                    opacity: 0.5,
                    duration: 1,
                    ease: "power2.out",
                });
            },
        }).to("#LoaderCircle", {
            duration: 2.5,
            scale: 40,
            ease: "power2.inOut",
            backgroundColor: "#d1d5db",
            opacity: 0,
            onUpdate: () => {
                const currentProgress = tl.progress() * 100;
                onUpdate(currentProgress);
            },
            onComplete,
        }, "-=1.5");
    });
    return (_jsxs("div", { style: {
            width: "100dvw",
            height: "100dvh",
            backgroundImage: "url('./TEXTURE 2.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }, id: "LoaderContainer", className: "w-dvw h-dvh z-40 flex justify-center items-center  bg-[#ffffff] relative overflow-hidden", children: [_jsx("div", { id: "LoaderCircle", className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px]   rounded-full" }), _jsx("img", { id: "LoaderPic", src: Photo, alt: "logo", className: "w-[200px] h-[200px] transform transition-all" })] }));
}
export default Loader;
