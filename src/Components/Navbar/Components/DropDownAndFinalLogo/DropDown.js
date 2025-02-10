import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(useGSAP);
function DropDown({ title, dropDownItems, Classes }) {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from("#dropDown", { x: 50 })
            .to("#dropDown", { duration: 3 })
            .to("#dropDown", { x: 0, duration: 1.5, ease: "power3.in" })
            .to("#dropDownList li", {
            opacity: 1,
            ease: "power2.in",
            duration: 1,
        }, "-=0.8");
    });
    return (_jsxs("div", { id: "dropDown", className: `${Classes} top-0 hidden lg:flex lg:flex-col`, children: [_jsxs("h1", { className: "text-sm font-bold mb-3", children: [title, " /"] }), _jsx("ul", { id: "dropDownList", className: "flex  flex-col items-start justify-center gap-2", children: dropDownItems.map((item, i) => (_jsx("li", { className: "text-xs font-extralight opacity-0 hover:scale-110 hover:font-bold transition-all duration-200 ease-in cursor-pointer", children: item }, i))) })] }));
}
export default DropDown;
