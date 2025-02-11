import ChooseYourSideMenu from "./Components/ChooseYourSideMenu/ChooseYourSideMenu";
import DropDownAndFinalLogo from "./Components/DropDownAndFinalLogo/DropDownAndFinalLogo";
import Logo from "./Components/Logo/Logo";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center  px-8 py-4 z-40">
      <Logo />
      <DropDownAndFinalLogo />
      <ChooseYourSideMenu />
    </div>
  );
}

export default Navbar;
