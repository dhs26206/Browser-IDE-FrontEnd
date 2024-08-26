import { useState } from "react"
import Dropdown from "./DropDown"




export const ContestForm=()=>{
    const Type=["Public","Private(accesed through link)"]
    const [Contest_Type,set_Contest_Type] =useState('Public');
    const handleType=(item)=>{
        set_Contest_Type(item);
    }
    const Security=["Strict","Moderate","Mild(User Allowed to Tab Change)"]
    const [Security_State,set_Security_State] =useState('Public');
    const handleSecurity=(item)=>{
        set_Security_State(item);
    }
    const handleQuestionChoose = () => {
        let url = "/QChoose/gwbgswt";
        const features = 'width=800,height=600,top=100,left=100,location=no,menubar=no,toolbar=no,location=no,status=no,resizable=no';
        window.open(url, '_blank', features);
    }
    
    return(
        <div className="pl-5 h-full w-full bg-blue-950 overflow-x-scroll">
            <div className="w-full h-1/5 text-5xl flex items-center ">
                Create Contest
            </div>
            <div className="w-full h-5/6 pl-5 flex flex-col gap-5 overflow-x-scroll">
                <div className="w-1/2 h-1/5 ">
                    <div className="w-full h-1/2 text-3xl">Contest's Name:</div>
                    <div className="w-full h-1/2">
                        <input className="w-4/5 h-[70%] rounded-sm text-[#aba0a0] bg-black border-2 border-gray-600 placeholder:pl-4 placeholder:text-[#646363] placeholder:text-sm" placeholder="Enter Contest Name" type="text" />
                        
                    </div>
                </div>
                <div className="w-1/2 h-1/5 ">
                    <div className="w-full h-1/2 text-3xl">Contest Type(Public Private) :</div>
                    <div className="w-full h-[35%]">
                        {/* <input className="w-4/5 h-[70%] rounded-sm text-[#aba0a0] bg-black border-2 border-gray-600 placeholder:pl-4 placeholder:text-[#646363] placeholder:text-sm" placeholder="Enter Contest Name" type="text" /> */}
                        <Dropdown title={'Public'} items={Type} onSelect={handleType} clickable={false}/>
                    </div>
                </div>
                <div className="w-1/2 h-1/5 ">
                    <div className="w-full h-1/2 text-2xl">Contest Start Timings</div>
                    <div className="w-full h-1/2">
                        <label htmlFor="Start-Time"> Select  </label>
                        <input type="datetime-local" name="Start-Time" id="Start-Time" />
                        
                    </div>
                </div>
                <div className="w-1/2 h-1/5 ">
                    <div className="w-full h-1/2 text-2xl">Contest End Timings</div>
                    <div className="w-full h-1/2">
                        <label htmlFor="End-Time"> Select  </label>
                        <input type="datetime-local" name="End-Time" id="End-Time" />   
                    </div>
                </div>
                <div className="w-1/2 h-1/5 ">
                    <div className="w-full h-1/2 text-3xl">Contest Security :</div>
                    <div className="w-full h-[35%]">
                        {/* <input className="w-4/5 h-[70%] rounded-sm text-[#aba0a0] bg-black border-2 border-gray-600 placeholder:pl-4 placeholder:text-[#646363] placeholder:text-sm" placeholder="Enter Contest Name" type="text" /> */}
                        <Dropdown title={'Strict'} items={Security} onSelect={handleSecurity} clickable={false}/>
                    </div>
                </div>
                <div>
                    <button onClick={()=>handleQuestionChoose()} className="bg-orange-700 text-white border-2 border-black hover:bg-orange-600" type="button">Choose Question</button>
                </div>

                
            </div>
        </div>
    )
}