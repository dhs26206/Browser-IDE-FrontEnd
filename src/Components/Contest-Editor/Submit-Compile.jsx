import { useState } from "react"
import {url} from "../../../url"


export const SubmitCompile=({isClicked,submitData,setOutput,setOutputLoading})=>{
    let polling=null;
    const [subId,setSubId]=useState("");
    const [hit ,sethit]=useState(false);
    const handleClick=(event)=>{
        setOutputLoading(true);
        sethit(true);
        setTimeout(() => { sethit(false); }, 3000);
        console.log(submitData);
        fetch(`${url}/exec`,{
            body:JSON.stringify(submitData),
            method:`POST`,
            credentials:"include",
            headers:{"Content-Type":"application/json"}
        }).then(res=> res.json()).then(response =>{
            console.log(response);
            setSubId(response.subId);
        })
        isClicked();
    }
    

    
    return(
        <div className="h-full w-full flex justify-end bg-[#1e1e1e] shadow-lg border-t-[1px] border-[#373636] rounded-b-md ">
            <div className="h-full w-[50%] flex justify-evenly items-center">
                <div className="w-1/3 h-4/6  rounded-md text-sm">
                    <button onClick={()=>handleClick()} className={`w-full h-full bg-transparent flex items-center justify-center  ${hit?'cursor-default bg-gray-900':'cursor-pointer'} `} type="button">Custom Input</button>
                </div>
                <div className="w-1/3 h-4/6  rounded-md text-sm">
                    <button onClick={()=>handleClick()} className={`w-full h-full bg-gray-700 flex items-center justify-center  ${hit?'cursor-default bg-gray-900':'cursor-pointer'} `} type="button">Compile & Run</button>
                </div>
                <div className="w-1/4 h-4/6  rounded-md">
                    <button onClick={()=>handleClick()} className={`w-full h-full bg-red-700  flex items-center justify-center  ${hit?'cursor-default bg-red-950':'cursor-pointer'}  `} type="button">Submit</button>
                </div>
            </div>
        </div>
    )
}
