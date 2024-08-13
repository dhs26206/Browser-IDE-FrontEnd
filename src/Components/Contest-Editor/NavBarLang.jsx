import { useState } from "react";
import Dropdown from "./DropDown";

const NavBarLang = ({Language,Theme}) => {
    const [defaultLanguage, setDefaultLanguage] = useState("python");
    const [theme, setTheme] = useState("vs-dark");
    let language=['python','javascript','cpp','java'];
    let themeChoice=['vs-dark','light']
    const handleLanguageSelect=(item)=>{
        setDefaultLanguage(item)
        Language(item)
    }
    const handleThemeSelect=(item)=>{
        setTheme(item);
        Theme(item)
    }
    return(
        <div className="flex justify-between w-full h-full z-10 bg-slate-900">
            <div className="text-white"></div>
            <div>
            <Dropdown title={defaultLanguage} items={language} onSelect={handleLanguageSelect} />
            </div>
            <div>
            <Dropdown title={theme} items={themeChoice} onSelect={handleThemeSelect} />
            </div>
        </div>
    )
}

export default NavBarLang;
