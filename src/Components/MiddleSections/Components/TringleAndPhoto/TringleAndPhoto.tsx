import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

function TringleAndPhoto() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline({ defaults: { delay: 3, duration: 2 } });
      const tl2 = gsap.timeline({ defaults: { delay: 3, duration: 2.5 } });
      tl1.from("#trianglePic", { y: 120, opacity: 0 }).to("#trianglePic", {
        y: 0,
        opacity: 1,
      });
      tl2
        .from("#Selfmade_by_NICF", { x: -1500, opacity: 0 })
        .to("#Selfmade_by_NICF", {
          x: 0,
          opacity: 1,
        });
    });
    return () => ctx.revert();
  });
  return (
    <>
      <div className=" w-full z-30">
        <svg
          id="trianglePic"
          className="w-10 h-10 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
        </svg>

        <div
          id="Selfmade_by_NICF"
          className=" w-28  absolute top-[38%] right-[5%] md:right-[10%] lg:right-[20%] transform -translate-x-1/4 -translate-y-1/2"
        >
          <img
            className="w-full h-full object-cover"
            src="/Selfmade_by_NICF-Nettie.svg"
            alt="Selfmade_by_NICF"
          />
        </div>
      </div>
    </>
  );
}

export default TringleAndPhoto;
