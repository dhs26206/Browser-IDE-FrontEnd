import { useState } from "react"


export const SubmitCompile=()=>{
    const [hit ,sethit]=useState(false);
    const handleClick=(event)=>{
        sethit(true);
        setTimeout(() => { sethit(false); }, 3000);
    }
    
    return(
        <div className="h-full w-full flex justify-end bg-[#1e1e1e] shadow-lg border-t-[1px] border-[#373636] rounded-t-md ">
            <div className="h-full w-1/3 flex justify-evenly items-center">
                <div className="w-1/2 h-4/6  rounded-md text-sm">
                    <button onClick={()=>handleClick()} className={`w-full h-full bg-gray-700 flex items-center justify-center  ${hit?'cursor-default bg-gray-900':'cursor-pointer'} `} type="button">Compile & Run</button>
                </div>
                <div className="w-1/3 h-4/6  rounded-md">
                    <button onClick={()=>handleClick()} className={`w-full h-full bg-red-700  flex items-center justify-center  ${hit?'cursor-default bg-red-950':'cursor-pointer'}  `} type="button">Submit</button>
                </div>
            </div>
        </div>
    )
}