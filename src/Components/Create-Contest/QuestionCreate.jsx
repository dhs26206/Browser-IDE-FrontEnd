import { useState } from "react";
import{ Dropdown} from "./DropDown";


const QuestionCreate=()=>{
    const typeoption=["Easy","Medium","Hard"];
    const TimeOption=["O(1)","O(logN)","O(NlogN)","O(N)","O(N2)","More"];
    const SpaceOption=["O(1)","O(logN)","O(NlogN)","O(N)","O(N2)","More"];
    const UseOption=["Private(Only Used my Me)","Public(Can be Accessed by anyone)"];
    const [type,setType]=useState("Easy");
    const [time,setTime]=useState("O(1)");
    const [Space,setSpace]=useState("O(1)");
    const [visible,setVisible]=useState("Private(Only Used my Me)");
    const storeType=(e)=>{
        setType(e);
    }
    const storeTime=(e)=>{
        setTime(e);
    }
    const storeSpace=(e)=>{
        setSpace(e);
    }
    const storeVisible=(e)=>{
        setVisible(e);
    }
    
    const handleinfo=()=>{
        console.log("Me Clocked");
        let url="/dev2"
        const features = 'width=800,height=600,top=100,left=100,menubar=no,toolbar=no,location=no,status=no';
        window.open(url, '_blank', features)
    }
    return (
        <div className="bg-blue-950 h-full w-full">
            <div className="w-full h-[10%] flex justify-center items-center text-3xl font-bold border-b-4 border-white"> Create Question </div>
            
            <div className="w-full h-[90%]  pt-10  pl-8 overflow-x-scroll">
                <div className="w-full h-[15%]">
                    <div className="w-full text-xl ">Question Name</div>
                    <div className="w-1/2"><input className="bg-gray-800 w-4/5 h-[70%] rounded-sm text-[#aba0a0]  border-2 border-gray-600 placeholder:pl-4 placeholder:text-[#646363] placeholder:text-sm" placeholder="Enter Short Name of Problem" type="text" /></div>
                </div>
                <div className="w-full h-[40%]">
                    <div className="w-full h-[20%] text-xl ">Question Description</div>
                    <div className="w-[60%] h-[80%] "><textarea className="bg-gray-800 w-4/5 h-full rounded-lg text-[#aba0a0]  border-2 border-gray-600 placeholder:pl-4 placeholder:text-[#646363] placeholder:text-sm  text-left overflow-x-auto" placeholder="Enter Short Name of Problem" type="text" />
                    </div>
                    
                </div>
                <div className="w-full h-[15%]">
                    <div className="w-full text-xl ">Question Type</div>
                    <div className="w-1/4">
                    <Dropdown title={'Easy'} items={typeoption} onSelect={storeType} clickable={false}/>
                    </div>
                </div>
                <div className="w-full h-[15%]">
                    <div className="w-full text-xl ">Expected Time Complexity :</div>
                    <div className="w-1/4">
                    <Dropdown title={'O(1)'} items={TimeOption} onSelect={storeTime} clickable={false}/>
                    </div>
                </div>
                <div className="w-full h-[15%]">
                    <div className="w-full text-xl ">Expected Space Complexity :</div>
                    <div className="w-1/4">
                    <Dropdown title={'O(1)'} items={SpaceOption} onSelect={storeSpace} clickable={false}/>
                    </div>
                </div>
                <div className="w-full h-[15%]">
                    <div className="w-full text-xl ">Question Usability:</div>
                    <div className="w-1/4">
                    <Dropdown title={'Private(Only Used my Me)'} items={UseOption} onSelect={storeVisible} clickable={false}/>
                    </div>
                </div>
                {}
                <div className="w-full h-[15%]">
                    <div className="w-full text-xl ">TestCase File(in .txt) <span onClick={()=>handleinfo()} className=" text-sm text-sky-600 hover:text-purple-600 cursor-pointer hover:underline"> format?</span></div>
                    <div className="w-1/4">
                    {/* <Dropdown title={'O(1)'} items={SpaceOption} onSelect={storeType} clickable={false}/> */}
                    <input type="file" name="testcase" id="testcase" accept=".txt" />
                    </div>
                </div>
                <div className="w-full h-[15%]">
                    <button className="bg-red-600 ">Upload</button>
                </div>
                
                
                
              
            </div>
        </div>
    )
}

export default QuestionCreate;