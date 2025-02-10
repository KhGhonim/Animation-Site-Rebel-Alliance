import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
function TextSections() {
    useGSAP(() => {
        const tl1 = gsap.timeline();
        const tl2 = gsap.timeline();
        const tl3 = gsap.timeline();
        const tl4 = gsap.timeline();
        const tl5 = gsap.timeline();
        const tl6 = gsap.timeline();
        const tl7 = gsap.timeline();
        const screenWidth = window.innerWidth;
        const movement = screenWidth * 0.24;
        tl1
            .from("#CircleToPentagon1", {
            x: -30,
            width: "0.5rem",
            height: "0.5rem",
            borderRadius: "50%",
        })
            .to("#CircleToPentagon1", {
            x: 500,
            duration: 1.8,
            ease: "power3.inOut",
        })
            .to("#CircleToPentagon1", {
            x: 0,
            delay: 1.3,
            width: "1.50rem",
            height: "1.50rem",
            duration: 2,
            ease: "power3.inOut",
            borderRadius: "0%",
        });
        tl2
            .from("#CircleToPentagon2", {
            x: 30,
            width: "0.5rem",
            height: "0.5rem",
            borderRadius: "50%",
        })
            .to("#CircleToPentagon2", {
            x: -500,
            duration: 1.8,
            ease: "power3.inOut",
        })
            .to("#CircleToPentagon2", {
            x: 0,
            delay: 1.3,
            width: "1.50rem",
            height: "1.50rem",
            duration: 2,
            ease: "power3.inOut",
            borderRadius: "0%",
        });
        tl3.fromTo("#first", {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power3.inOut",
            delay: 4.4,
        });
        tl4
            .fromTo("#second", {
            scale: 0,
            opacity: 0,
        }, {
            scale: 1,
            duration: 1,
            opacity: 1,
            color: "transparent",
            webkitTextStroke: "0.5px #ffffff",
            ease: "power3.inOut",
            delay: 3.8,
        })
            .to("#second", {
            scale: 1.5,
            duration: 2.8,
            opacity: 1,
            color: "#00ffff",
            webkitTextStroke: "0px #00ffff",
            ease: "power3.inOut",
        });
        tl5
            .to("#third", {
            x: movement,
            duration: 2,
            ease: "power3.inOut",
        })
            .to("#third", { duration: 2 })
            .to("#third", {
            x: 0,
            duration: 2,
            ease: "power3.inOut",
        });
        tl6
            .to("#fourth", {
            x: -movement,
            duration: 2,
            ease: "power3.inOut",
        })
            .to("#fourth", { duration: 2 })
            .to("#fourth", {
            x: 0,
            duration: 2,
            ease: "power3.inOut",
        });
        tl7.fromTo(".boxes div", {
            opacity: 0,
            x: 200,
        }, {
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power3.inOut",
            delay: 4.4,
            stagger: 0.3,
        });
    });
    return (_jsxs("div", { className: "flex w-full h-full z-30 absolute inset-0 justify-center items-center px-10", children: [_jsx("div", { id: "CircleToPentagon1", className: "w-5 h-5 rounded-full border-4 border-[#18FFFF]" }), _jsxs("div", { className: "flex-1 flex flex-col text-center pt-14 ", children: [_jsx("h1", { id: "first", className: "text-lg text-[#18FFFF] tracking-wider font-bold", children: "The Rebel Alliance" }), _jsx("h1", { id: "second", className: "text-5xl font-extrabold tracking-widest", children: "Stand Aganist The Evil" }), _jsxs("div", { className: "flex justify-between gap-2 pt-10 w-8/12 mx-auto", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx("h1", { id: "third", className: " tracking-wide text-lg", children: "& Restore" }), _jsxs("div", { className: "flex gap-2 boxes", children: [_jsx("div", { className: "h-5 w-24 border rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md" }), _jsx("div", { className: "h-5 w-16  border rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md" }), _jsx("div", { className: "h-5 w-12  border rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md" })] })] }), _jsx("h1", { id: "fourth", className: " tracking-wide text-lg", children: "the Republic" })] })] }), _jsx("div", { id: "CircleToPentagon2", className: "w-5 h-5 rounded-full border-4 border-[#18FFFF]" }), " "] }));
}
export default TextSections;
