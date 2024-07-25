import { useState } from "react";
import Editor from "@monaco-editor/react";
import NavBarLang from "./NavBarLang";
const Editor1 = () => {
    const [code, setCode] = useState("def funct(arr,n):\n\t#Enter Code Here And return Integer");
    const handleChange = (value, event) => {
        setCode(value);
        // console.log(value);
    };
    const [lang,setLang]=useState("python")
    const [theme,setTheme]=useState("vs-dark")
    const Language=(item)=>{
        // console.log(item)
        setLang(item)
    }
    const Theme=(item)=>{
        // console.log(item)
        setTheme(item)
    }
    
    return (
        <div className="w-full h-full flex flex-wrap ">
        <div className="w-full h-[7%]"><NavBarLang Language={Language} Theme={Theme} /> </div>
            <div className="z-0 w-full h-[93%]  ">
            <Editor
            height="100%"
            language={lang}
            defaultLanguage={lang}
            onChange={handleChange}
            theme={theme}
            defaultValue="def funct(arr,n):
                #Enter Code Here And return Integer"
            />
            </div>
        </div>
    );
    }

export default Editor1;