import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

function TextSections() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
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
          duration: 1.78,
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
          duration: 1.78,
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

      tl3.fromTo(
        "#first",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.inOut",
          delay: 4.4,
        }
      );

      tl4
        .fromTo(
          "#second",
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            duration: 1,
            opacity: 1,
            color: "transparent",
            webkitTextStroke: "0.5px #ffffff",
            ease: "power3.inOut",
            delay: 3.8,
          }
        )
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

      tl7.fromTo(
        ".boxes div",
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power3.inOut",
          delay: 4.4,
          stagger: 0.3,
        }
      );
    });

    return () => ctx.revert();
  });
  return (
    <div className="flex w-full h-full z-30 absolute inset-0 justify-center items-center px-10">
      <div
        id="CircleToPentagon1"
        className="w-5 h-5 hidden md:block rounded-full border-4 border-[#18FFFF]"
      ></div>
      <div className="flex-1 flex flex-col text-center pt-14 ">
        <h1
          id="first"
          className="text-xs sm:text-sm md:text-base lg:text-lg text-[#18FFFF] tracking-wider font-bold"
        >
          The Rebel Alliance
        </h1>
        <h1
          id="second"
          className="text-sm md:text-2xl lg:text-5xl font-extrabold tracking-widest"
        >
          Stand Aganist The Evil
        </h1>
        <div className="flex justify-between gap-2 pt-10 w-full lg:w-8/12  mx-auto">
          <div className="flex gap-2">
            <h1 id="third" className=" tracking-wide text-sm md:text-base lg:text-lg">
              & Restore
            </h1>
            <div className="flex gap-2 boxes">
              <div className="h-5 w-24 border rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md"></div>
              <div className="h-5 w-16  border rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md"></div>
              <div className="h-5 w-12  border rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md"></div>
            </div>
          </div>
          <h1 id="fourth" className=" tracking-wide text-sm md:text-base lg:text-lg">
            the Republic
          </h1>
        </div>
      </div>
      <div
        id="CircleToPentagon2"
        className="w-5 h-5 hidden md:block rounded-full border-4 border-[#18FFFF]"
      ></div>{" "}
    </div>
  );
}

export default TextSections;
