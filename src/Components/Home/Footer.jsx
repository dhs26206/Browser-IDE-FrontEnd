


function Footer(){
    return(
        <div className=" h-full w-full">
            <div className="flex h-full w-full">
                <div className="h-full w-[20%] border-r-[1px] border-white">
                    <img className="w-[95%]" src="https://folder.ddks.live/logo.png" alt="Logo" srcset="" />
                </div>
                <div className="w-[80%] h-full flex-wrap flex">
                    <div className="w-full h-[30%] flex justify-center items-center  border-white ">
                        <div className=" text-5xl    text-white font-bold">Reach Us</div>
                    </div>
                    <div className=" w-full h-[65%] flex justify-evenly items-center">
                        <div className="h-[60%] w-[20%] flex flex-col items-center">
                            
                            <img className="h-[25%] "  src="https://folder.ddks.live/igbgremoved.png" alt="" srcset="" />
                            
                            <div className="flex flex-col h-3/4">
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Ashleel_Coders</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Dhruv</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Gaurav</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Ayush</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Manpreet</div>

                            </div>
                        </div>
                        <div className="h-[60%] w-[20%] flex flex-col justify-between items-center">
                            <img className="h-1/4 rounded-full object-cover" src="https://folder.ddks.live/downloadgithub.png" alt="" srcset="" />
                            <div className="flex flex-col h-3/4 ">
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Ashleel_Coders</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Dhruv</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Gaurav</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Ayush</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Manpreet</div>

                            </div>
                        </div>
                    </div>
                    <div className="h-[5%] pl-2 font text-sm text-[#6e6c6c]"> 
                        The Logo and Trademark used in this website are for Illustration purposes only . Ashleel Coders and its affilates does not claim this in any manner.
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer