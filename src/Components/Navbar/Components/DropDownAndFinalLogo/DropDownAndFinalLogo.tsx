import DropDown from "./DropDown";
import FinalLogo from "./FinalLogo";


function DropDownAndFinalLogo() {

  return (
    <div className="flex flex-row w-4/6 justify-center items-center relative ">
      <DropDown
        title="Affiliations"
        dropDownItems={[
          "Rebel Pilots",
          "Rebel Troops",
          "Rebel Pathfinders",
          "Alliance High Command",
        ]}
        Classes={"absolute left-1/4 "}
      />
      <DropDown
        title="Species"
        dropDownItems={["Ewok", "Sullustan", "Wookiee"]}
        Classes={"absolute left-0"}
      />
      <FinalLogo />
      <DropDown
        title="Weapons"
        dropDownItems={[
          "ION Cananon",
          "T-65 X-wing",
          "TIE Fighter",
          "A280 Blaster Rifle",
        ]}
        Classes={"absolute right-1/4"}
      />
    </div>
  );
}

export default DropDownAndFinalLogo;
