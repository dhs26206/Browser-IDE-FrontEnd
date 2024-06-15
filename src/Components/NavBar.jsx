import { useState } from "react";

import Navigation from "./Navigation";
const NavBar=()=>{
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
        <div className="h-[12%] min-h-16 w-screen flex items-center">
            <div className="w-screen h-full items-center flex  md:justify-center">
            <div style={divStyle} className="w-screen h-full items-center flex justify-between">
                <img className={`  w-64 h-14 pl-5`} src="logo.png" alt="" />
                <div className="text-white flex h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>Practice</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>
                <div className="text-white flex h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>LeaderBoard</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>
                <div className="text-white flex h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>About</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>
                <div className="text-white flex h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>ContactUs</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>
                {/* <div className="text-white flex h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>Login</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div> */}
                <div className="h-14 flex items-center rounded-md hidden sm:hidden md:flex cursor-pointer text-white ]" >
                    <button className="flex  bg-[rgba(0,2,223,1)] mr-5 gap-1 hover:bg-[#03F7EB]"><span>Log In</span> <span className="w-5 h-6"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span> </button>
                </div>
                {/* <div>LeaderBoard</div>
                <div>About</div>
                <div>Contact Us</div>
                <div>Login</div> */}
                
            </div>
            <Navigation choices={choice} IsOpen={handlleClick}/>
            </div>
        </div>
    )
}

export default NavBar;