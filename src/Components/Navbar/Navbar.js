import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ChooseYourSideMenu from "./Components/ChooseYourSideMenu/ChooseYourSideMenu";
import DropDownAndFinalLogo from "./Components/DropDownAndFinalLogo/DropDownAndFinalLogo";
import Logo from "./Components/Logo/Logo";
function Navbar({ setLoading }) {
    return (_jsxs("div", { className: "absolute top-0 left-0 w-full flex items-center  px-8 py-4 z-40", children: [_jsx(Logo, {}), _jsx(DropDownAndFinalLogo, { setLoading: setLoading }), _jsx(ChooseYourSideMenu, {})] }));
}
export default Navbar;
