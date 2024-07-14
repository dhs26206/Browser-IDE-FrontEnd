

function Contribute(){
    const repo=()=>{
        window.location.href="https://aws1.ddks.live"
    }



    return(
        <div className="w-full h-full">
            <div className="w-full h-full flex-col md:flex-nowrap">
                <div className="text-2xl  md:text-5xl pl-10 h-[20%] w-full flex items-center text-center  border-white">Ever Seen This Cat Before ?</div>
                <div className="w-full h-[80%] md:flex-row-reverse flex flex-col  md:flex-nowrap"> 
                    <div className="md:w-1/2 md:h-full w-full h-[50%] flex items-center">
                        <img onClick={()=>repo()} className="w-full cursor-pointer" src="https://d3oknbjxzqnj9i.cloudfront.net/cdn/githublogov2.png"  alt="Repo" srcset="" />

                    </div>
                    <div className="md:h-full h-[50%] md:w-1/2 w-full flex flex-wrap">
                        
                        <div className="flex flex-wrap items-center h-[80%] w-full ">
                            <div className="items-center w-full pl-7  md:tracking-normal"><span className=" font-bold text-3xl">Well ! Thats Great </span><br /><span className="font-bold font-2xl"> You Can Contribute ,</span><br /> <span className="font-semibold">Just Click the Cat and She will show you the Way* !!</span></div>
                            <div className="w-full md:flex hidden font-thin text-xs pl-2" > *By Clicking the Icon ,You agree to the Terms and Conditions of github.com and its Privacy Policy. <br />
                            Note: If the link is not accessible , Kindly Contact Us using any of the References Below </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contribute;