import { useState } from "react";
import Navigation from "./Navigation";
const ContestNavBar=()=>{
    const [click,setClick]=useState(false)
    const [not,setNot]=useState(false);
    const divStyle = {
        background: 'rgb(16, 37, 66)',
        backgroundImage: 'linear-gradient(90deg, rgba(16,37,66,1) 6%, rgba(0,2,223,1) 28%, rgba(16,37,66,1) 100%)'
      };
      const handlleClick=()=>{
        setClick(prev=>!prev);

      }
      const choice=["Practice","LeaderBoard","About","ContactUs","Login"]
    return(
        <div className="w-screen  bg-slate-900">
            
            <div id="OnlyLogo " className="flex  w-full  justify-evenly border-b-2 border-slate-500">
                <div className="w-1/3 flex gap-3 items-center justify-center border-r-2  border-slate-600 ">
                    <div className="text-white flex h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>Practice</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>
                    <div className="text-white flex h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>LeaderBoard</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>
                    <div className="text-white flex h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>About</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>
                    <div className="text-white flex h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>ContactUs</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>    
                </div>
                <div className="flex justify-center w-1/4 h-1/6">
                <img src="logo.png " alt="" className="w-full h-full  border-r-2 border-slate-600" />
                </div>
                <div className=" w-1/3 flex items-center justify-end">
                <svg className="w-14 h-14 pr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                
                </div>
            
            
            </div>
        </div>
    )
}

export default ContestNavBar;