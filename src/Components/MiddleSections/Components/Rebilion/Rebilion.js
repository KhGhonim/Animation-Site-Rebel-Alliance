import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
function Rebilion() {
    const Ref = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(Ref.current, {
            y: 500,
            backgroundColor: "#ffffff",
            color: "#000000",
            textAlign: "center",
            width: "188px",
        })
            .to(Ref.current, {
            duration: 2.5,
            ease: "power3.in",
            y: 0,
            delay: 1,
        })
            .to(Ref.current, {
            delay: 0.8,
            x: -300,
            duration: 2,
            ease: "power2.inOut",
            width: "280px",
            backgroundColor: "#000000",
            color: "#18FFFF",
            textAlign: "left",
            onStart: () => {
                gsap.to("#plus", {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.in",
                });
            },
        });
    }, { scope: Ref });
    return (_jsxs("div", { ref: Ref, id: "Rebilion", className: `bg-[#18FFFF] flex justify-between absolute bottom-[15%] left-[40%] w-72 z-30 items-center cursor-pointer  rounded-tl-xl rounded-br-xl rounded-bl-md rounded-tr-md p-3 text-black`, children: [_jsx("h1", { className: "text-xs", children: "Join the Rebilion" }), _jsx("p", { id: "plus", className: "font-bold opacity-0", children: "+" })] }));
}
export default Rebilion;
