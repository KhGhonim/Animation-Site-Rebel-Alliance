import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

export default function Logo() {
  const [logoSrc, setLogoSrc] = useState("Rectangle black.svg");
  const [vectorSrc, setVectorSrc] = useState("Vector Blue.svg");
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#LogoPic",
      {
        opacity: 0,
        y: window.innerHeight - 100,
      },
      {
        opacity: 1,
        duration: 2,
        y: window.innerHeight / 2,
        ease: "power3.out",
      }
    )
      .to("#LogoPic", { duration: 1.8 })
      .to("#LogoPic", {
        duration: 2,
        y: 0,
        ease: "power4.inOut",
        onStart: () => {
          gsap.to("#LogoPic img", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              setLogoSrc("Rectangle 17.svg");
              setVectorSrc("Vector.svg");

              gsap.to("#LogoPic img", {
                opacity: 1,
                duration: 0.5,
              });
            },
          });
        },
      });
  });

  return (
    <div className="relative w-1/6 ">
      <div id="LogoPic" className="relative w-[45px] h-[45px] ">
        <Link to="/">
          <img
            src={logoSrc}
            alt="logo"
            className="w-full h-full transition-opacity"
          />
          <img
            src={vectorSrc}
            alt="logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25px] h-[25px] transition-opacity"
          />
        </Link>
      </div>
    </div>
  );
}
