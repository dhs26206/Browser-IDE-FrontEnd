


function Footer(){
    return(
        <div className=" h-full w-full">
            <div className="flex">
                <div className="h-full w-[20%] border-r-2 border-white">
                    <img className="w-full" src="https://d3oknbjxzqnj9i.cloudfront.net/cdn/logo.png" alt="Logo" srcset="" />
                </div>
                <div className="w-[80%] h-full flex-wrap flex">
                    <div className="w-full h-[30%] items-center border-2 border-white">
                        <div className=" text-5xl h-full w-full text-white font-bold">Reach Us</div>
                    </div>
                    <div className=" w-full h-[70%] flex justify-between">
                        <div className="h-full w-[20%] flex-col items-center">
                            <img className="h-1/2 w-fit" src="https://d3oknbjxzqnj9i.cloudfront.net/cdn/iglogo.png" alt="" srcset="" />
                            <div className="flex flex-col h-1/2">
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Ashleel_Coders</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Dhruv</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Gaurav</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Ayush</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Manpreet</div>

                            </div>
                        </div>
                        <div className="h-full w-[20%] flex-col justify-between items-center">
                            <img className="h-1/2" src="https://d3oknbjxzqnj9i.cloudfront.net/cdn/githublogov2.png" alt="" srcset="" />
                            <div className="flex flex-col h-1/2 ">
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Ashleel_Coders</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Dhruv</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Gaurav</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Ayush</div>
                                <div className=" text-center cursor-pointer hover:text-blue-400 text-blue-800 hover:underline" onClick={()=>{window.location.href="https://example.com"}}>Manpreet</div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer