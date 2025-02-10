import TringleAndPhoto from "./Components/TringleAndPhoto/TringleAndPhoto";
import TextSections from "./Components/TextSections/TextSections";
import Rebilion from "./Components/Rebilion/Rebilion";

function MiddleSections() {
  return (
    <div className=" flex flex-col w-full h-full relative">
      <TringleAndPhoto />
      <TextSections />
      <Rebilion />
    </div>
  );
}

export default MiddleSections;
