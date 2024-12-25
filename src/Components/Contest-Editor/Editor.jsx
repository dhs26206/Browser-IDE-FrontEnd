import { useState } from "react";
import Editor from "@monaco-editor/react";
import NavBarLang from "./NavBarLang";
const Editor1 = ({submitData,setSubmitData}) => {
    //const [code, setCode] = useState("def funct(arr,n):\n\t#Enter Code Here And return Integer");
    const handleChange = (value,event) => {
        setSubmitData((predata)=>({...predata,code:value}));
        console.log(value);
         console.log(submitData);
    };
    const [lang,setLang]=useState("java")
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
        <div className="w-full h-[7%]"><NavBarLang setSubmitData={setSubmitData} Theme={Theme} /> </div>
            <div className="z-0 w-full h-[93%]  ">
            <Editor
            height="100%"
            language={lang}
            defaultLanguage={lang}
            onChange={handleChange}
            theme={theme}
            defaultValue={`public class Main {
    public static void main(String[] args) {
        // Print a simple message
        System.out.println("Hello, World!");
    }
}
`}
            />
            </div>
        </div>
    );
    }

export default Editor1;