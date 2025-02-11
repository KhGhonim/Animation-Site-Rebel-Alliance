import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

function FinalLogo() {
  const [Photo, setPhoto] = useState(`/Rebel_Alliance_middle.svg`);
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 4, ease: "power4.inOut" },
    });
    tl.from("#FinalLogoPic", {
      y: window.innerHeight / 2 - 70,
      opacity: 0.3,
      scale: 1,
      delay: 1,
      duration: 1.8,
    }).to("#FinalLogoPic", {
      onUpdate: () => {
        const progress = tl.progress();
        if (progress > 0.2) {
          setPhoto("/Rebel_Alliance_final.svg");
        }
      },
      delay: 1,
      y: 0,
      scale: 0.8,
      opacity: 1,
      duration: 3,
      ease: "power4.inOut",
    });
  });
  return (
    <>
      <img id="FinalLogoPic" src={Photo} alt="logo" />
    </>
  );
}

export default FinalLogo;
