import gsap from "gsap";
import { useEffect, useState } from "react";

interface FinalLogoProps {
  setLoading: (value: boolean) => void;
}
function FinalLogo({ setLoading }: FinalLogoProps) {
  const [Photo, setPhoto] = useState(`/Rebel_Alliance_middle.svg`);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("#FinalLogoPic", {
      y: window.innerHeight / 2 - 70,
      opacity: 0.3,
      scale: 1,
    })
      .to("#FinalLogoPic", { duration: 1 })
      .to("#FinalLogoPic", {
        opacity: 0.5,
        duration: 0.7,
        ease: "power4.inOut",
      })
      .to("#FinalLogoPic", {
        onUpdate: () => {
          const progress = tl.progress();
          if (progress > 0.2) {
            setPhoto("/Rebel_Alliance_final.svg");
          }
        },
        delay: 1,
        y: 0,
        scale: 0.5,
        opacity: 1,
        duration: 3,
        ease: "power4.inOut",
      });
  }, [setLoading]);
  return (
    <div>
      <img id="FinalLogoPic" src={Photo} alt="logo" />
    </div>
  );
}

export default FinalLogo;
