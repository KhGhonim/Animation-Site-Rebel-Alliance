import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DropDown from "./DropDown";
import FinalLogo from "./FinalLogo";
function DropDownAndFinalLogo({ setLoading }) {
    return (_jsxs("div", { className: "flex flex-row w-4/6 justify-center items-center relative ", children: [_jsx(DropDown, { title: "Affiliations", dropDownItems: [
                    "Rebel Pilots",
                    "Rebel Troops",
                    "Rebel Pathfinders",
                    "Alliance High Command",
                ], Classes: "absolute left-1/4 " }), _jsx(DropDown, { title: "Species", dropDownItems: ["Ewok", "Sullustan", "Wookiee"], Classes: "absolute left-0" }), _jsx(FinalLogo, { setLoading: setLoading }), _jsx(DropDown, { title: "Weapons", dropDownItems: [
                    "ION Cananon",
                    "T-65 X-wing",
                    "TIE Fighter",
                    "A280 Blaster Rifle",
                ], Classes: "absolute right-1/4" })] }));
}
export default DropDownAndFinalLogo;
