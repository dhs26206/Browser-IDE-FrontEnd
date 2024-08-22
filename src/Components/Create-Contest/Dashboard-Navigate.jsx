import { useNavigate } from "react-router-dom"

export const Navigate=({toggleState})=>{
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate("/User");
    }
    return(
        <div className="h-full w-full bg-[#182d67] flex justify-center">
            <div className="w-[80%] h-full bg-inherit ">
                <div id="NavbarType " className="h-[30%] w-full flex items-center ">
                    <div className="font-semibold text-3xl">DashBoard</div>
                </div>
                <div className="w-full h-[70%] flex flex-wrap justify-between">
                    <div className="w-full h-1/3 ">
                        <div className="w-full h-[30%] ">
                            <div className=" font-bold text-xl ">Manage Contest</div>
                        </div>
                        <div className="w-full h-[70%]">
                                <div onClick={()=>toggleState("create")} className="hello cursor-pointer hover:underline text-[#b2aaaa] hover:text-white">Create Contest</div>
                                <div onClick={()=>toggleState("manage")} className="hello cursor-pointer hover:underline text-[#b2aaaa] hover:text-white">Manage Contest</div>
                                <div className="hello cursor-pointer hover:underline text-[#b2aaaa] hover:text-white">Contest Result</div>
                        </div>
                            
                    </div>
                    <div className="w-full h-1/3 ">
                        <div className="w-full h-[30%] ">
                            <div className="font-bold text-xl ">Manage Account</div>
                        </div>
                        <div className="w-full h-[70%]">
                                <div className="hello cursor-pointer hover:underline text-[#b2aaaa] hover:text-white"> </div>
                                <div onClick={()=>handleNavigate()} className="hello cursor-pointer hover:underline text-[#b2aaaa] hover:text-white">Manage Account</div>
                                <div className="hello cursor-pointer hover:underline text-[#b2aaaa] hover:text-white">Log Out</div>
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}