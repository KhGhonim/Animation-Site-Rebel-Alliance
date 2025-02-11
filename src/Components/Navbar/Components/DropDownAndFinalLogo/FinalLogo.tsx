import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

interface FinalLogoProps {
  setLoading: (value: boolean) => void;
}
function FinalLogo({ setLoading }: FinalLogoProps) {
  const [Photo, setPhoto] = useState(`/Rebel_Alliance_middle.svg`);
  const Ref = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(Ref.current, {
      y: window.innerHeight / 2 - 70,
      opacity: 0.3,
      scale: 1,
      delay: 1,
    })
      .to(Ref.current, { duration: 1.8 })
      .to(Ref.current, {
        opacity: 0.5,
        duration: 0.7,
        ease: "power4.inOut",
      })
      .to(Ref.current, {
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
  }, [setLoading]);
  return (
    <div>
      <img ref={Ref} id="FinalLogoPic" src={Photo} alt="logo" />
    </div>
  );
}

export default FinalLogo;
