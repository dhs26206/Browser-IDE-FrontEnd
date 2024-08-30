import { useState } from "react";

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
      const choice=["Manage Contests","Documentation",,"Support/Help"]
    return(
        <div className="w-full   bg-slate-900">
            
            <div id="OnlyLogo " className="flex  w-full  justify-evenly border-b-8 border-slate-500">
                <div className="w-1/3 flex gap-3 items-center justify-start  ">
                    {/* <div className="text-white  h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>Manage Contests</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div> */}
                    {/* <div className="text-white  h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>Documentation</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div> */}
                    {/* <div className="text-white  h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>Support/Help</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div> */}
                    {/* <div className="text-white  h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>ContactUs</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>     */}
                </div>
                <div className="flex justify-center w-1/5 h-1/7">
                <img src={'https://folder.ddks.live/cdn/logo.png'} alt="" className="w-full h-full " />
                </div>
                <div className=" w-1/3 flex items-center justify-end">
                <svg className="w-12 h-12 pr-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                <svg className="w-14 h-14 pr-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                
                </div>
            
            
            </div>
        </div>
    )
}

export default ContestNavBar;