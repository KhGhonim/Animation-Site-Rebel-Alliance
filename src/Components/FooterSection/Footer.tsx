import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

function Footer() {
  useGSAP(() => {
    const tl1 = gsap.timeline({
      defaults: { duration: 4, ease: "power4.inOut" },
    });
    const tl2 = gsap.timeline({
      defaults: { duration: 6, ease: "power4.inOut" },
    });
    const tl3 = gsap.timeline({
      defaults: { duration: 5, ease: "power4.inOut", stagger: 0.5 },
    });
    tl1.from("#line", { x: "1000%", backgroundColor: "#18FFFF" }).to("#line", {
      x: 0,
      backgroundColor: "#ffffff",
    });

    tl2.from("#title", { y: -300, opacity: 0 }).to("#title", {
      y: 0,
      opacity: 1,
      delay: 3,
    });

    tl3.from("#logos img", { x: 300, opacity: 0 }).to("#logos img", {
      x: 0,
      opacity: 1,
      delay: 3,
    });
  });
  return (
    <div className="flex justify-between items-center absolute bottom-0 z-30 w-full overflow-hidden">
      <div id="line" className="w-56 bg-white h-14 rounded-tr-xl"></div>
      <div className="pl-14" id="title">
        <h1 className="text-2xl pl-10 font-bold">Rebel</h1>
      </div>
      <div id="logos" className="flex gap-3 mr-8">
        <img
          src={"/lucas film.svg"}
          alt="logo"
          className="w-full h-full object-cover"
        />
        <img
          src={"/Calque_1.svg"}
          alt="logo"
          className="w-full h-full object-cover"
        />
        <img
          src={"/ubisoft-logo 1.svg"}
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Footer;
