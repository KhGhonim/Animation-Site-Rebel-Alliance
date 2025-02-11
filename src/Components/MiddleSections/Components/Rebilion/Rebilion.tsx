import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

function Rebilion() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const tl = gsap.timeline();
      gsap.set("#Rebilion", { width: "12rem" });
      mm.add("(min-width: 1024px)", () => {
        tl.from("#Rebilion", {
          y: 500,
          backgroundColor: "#ffffff",
          color: "#000000",
          textAlign: "center",
          width: "12rem",
          duration: 2.5,
          ease: "power2.inOut",
        })
          .to("#Rebilion", {
            ease: "power3.in",
            y: 0,
            duration: 1,
            width: "12rem",
          })
          .to("#Rebilion", {
            delay: 0.8,
            x: -300,
            duration: 2,
            ease: "power2.inOut",
            width: "280px",
            backgroundColor: "#000000",
            color: "#18FFFF",
            textAlign: "left",
            onStart: () => {
              if (tl.progress() * 100 <= 80) {
                gsap.to("#plus", {
                  opacity: 1,
                  duration: 1,
                  ease: "power2.in",
                });
              }
            },
          });
      });

      mm.add("(max-width: 1023px)", () => {
        // Animation for smaller screens (tablets & mobile)
        tl.from("#Rebilion", {
          y: 300,
          backgroundColor: "#ff0000",
          color: "#ffffff",
          width: "10rem",
          duration: 2,
          ease: "power1.out",
        }).to("#Rebilion", {
          delay: 1.2,
          x: -150,
          duration: 2,
          ease: "power2.inOut",
          width: "280px",
          backgroundColor: "#000000",
          color: "#18FFFF",
          textAlign: "left",
          onStart: () => {
            if (tl.progress() * 100 <= 80) {
              gsap.to("#plus", {
                opacity: 1,
                duration: 1,
                ease: "power2.in",
              });
            }
          },
        });
      });
    });

    return () => ctx.revert();
  });

  return (
    <div
      id="Rebilion"
      className={`bg-[#18FFFF] flex justify-between absolute bottom-[15%] left-[40%] lg:left-[40%] z-30 items-center cursor-pointer rounded-tl-xl rounded-br-xl rounded-bl-md rounded-tr-md p-3 text-black`}
    >
      <h1 className="text-xs">Join the Rebilion</h1>
      <p id="plus" className="font-bold opacity-0">
        +
      </p>
    </div>
  );
}

export default Rebilion;
