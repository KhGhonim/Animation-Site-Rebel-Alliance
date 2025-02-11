import gsap from "gsap";
import { useEffect } from "react";

function ChooseYourSideMenu() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#chooseYourSide", { x: 500, duration: 2, ease: "back.in" })
      .to("#chooseYourSide", {
        x: 0,
        duration: 1.5,
        ease: "power2.inOut",
        delay: 0.5,
      })
      .from("#chooseYourSideBox", {
        backgroundColor: "#000000",
        color: "#18FFFF",
        width: "188px",
        duration: 1.5,
      })
      .to("#chooseYourSideBox", {
        duration: 1.5,
        ease: "power2.inOut",
        width: "288px",
        backgroundColor: "#18FFFF",
        color: "#000000",
        onStart: () => {
          gsap.to("#plus", {
            opacity: 1,
            duration: 1,
            ease: "power2.in",
          });
        },
      });
  }, []);
  return (
    <div
      id="chooseYourSide"
      className="flex justify-end gap-2  relative w-1/6 "
    >
      <div
        id="chooseYourSideBox"
        className={`bg-[#18FFFF] hidden lg:flex justify-between items-center cursor-pointer -left-32 absolute w-72 rounded-tl-xl rounded-br-xl rounded-bl-md rounded-tr-md p-3 text-black`}
      >
        <h1 className="text-xs">Choose Your Side</h1>
        <p id="plus" className="font-bold opacity-0">
          +
        </p>
      </div>

      <div className="border hover:bg-[#18FFFF] hover:text-[#000000] transition-all duration-200 ease-in hover:border-none border-gray-50 rounded-xl p-3 cursor-pointer">
        <h1 className="text-sm ">Menu</h1>
      </div>
    </div>
  );
}

export default ChooseYourSideMenu;
