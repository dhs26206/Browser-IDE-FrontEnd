import ContestNavBar from "../Contest-Editor/ContestNavBar";
const Account=()=>{
    return(
        <div className="h-full w-full ">
            <div className="w-full h-[15%]">
                <ContestNavBar/>
            </div>
            <div className="pl-2 w-full h-[85%] bg-[#182d67]">
                <div className="h-[5%]"></div>
                <div className="w-full h-1/2 flex justify-between">
                    <div className="w-[30%] h-full ">
                        <div className=" w-full h-1/5 font-semibold text-2xl flex items-center justify-center border-2 border-slate-700"> Teri Photo</div>
                        <div className="w-full h-4/5 flex justify-center items-center"><div className="rounded-full aspect-square h-[80%] border-2 border-white"><img className="h-full w-full object-cover rounded-full" src="https://cdn.ddks.live/cdn/avatar-2.png" alt="Profile" /></div></div>
                    </div>
                    <div className="w-[69%] h-full ">
                        <div className=" w-full h-1/5 font-semibold text-2xl flex items-center justify-center border-2 border-slate-700"> Teri Details</div>
                        <div className="w-full h-4/5  border-slate-700">
                          <div className="w-full h-[20%] items-center text-5xl"> Manak Singh <span className="text-3xl"> (@manak82)</span> </div>
                        </div>

                        

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Account;