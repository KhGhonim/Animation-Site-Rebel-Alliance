import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(useGSAP);

interface DropDownProps {
  title: string;
  dropDownItems: string[];
  Classes: string;
}
function DropDown({ title, dropDownItems, Classes }: DropDownProps) {
useGSAP(() => {
    const tl = gsap.timeline();
  
    tl.from("#dropDown", { x: 50 })
      .to("#dropDown", { duration: 3 })
      .to("#dropDown", { x: 0, duration: 1.5, ease: "power3.in" })
      .to(
        "#dropDownList li",
        {
          opacity: 1,
          ease: "power2.in",
          duration: 1,
        },
        "-=0.8"
      );
})
  return (
    <div
      id="dropDown"
      className={`${Classes} top-0 hidden lg:flex lg:flex-col`}
    >
      <h1 className="text-sm font-bold mb-3">{title} /</h1>
      <ul
        id="dropDownList"
        className="flex  flex-col items-start justify-center gap-2"
      >
        {dropDownItems.map((item, i) => (
          <li
            className="text-xs font-extralight opacity-0 hover:scale-110 hover:font-bold transition-all duration-200 ease-in cursor-pointer"
            key={i}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
