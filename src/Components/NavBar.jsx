import { useState } from "react";
import Dropdown from "./DropDown";
const NavBar=()=>{
    const [click,setClick]=useState(false)
    const divStyle = {
        background: 'rgb(16, 37, 66)',
        backgroundImage: 'linear-gradient(90deg, rgba(16,37,66,1) 6%, rgba(0,2,223,1) 28%, rgba(16,37,66,1) 100%)'
      };
      const choice=["Practice","LeaderBoard","About","ContactUs","Login"]
    return(
        <div style={divStyle} className="w-screen h-16  flex justify-between">
                <img className="w-64 h-14 pl-5" src="logo.png" alt="" />
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
                <div className="flex items-center pr-5 sm:show md:hidden">
                    <Dropdown items={choice} clickable={true}  />
                <svg className={`${!click?'':'hidden'} h-8 w-12`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                <svg className={`${click?'':'hidden'} h-8 w-12`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
            

        </div>
    )
}

export default NavBar;