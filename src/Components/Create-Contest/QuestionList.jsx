import { useState } from "react";
import Ques from "./../../JSON/listQuestion.json"
export const QuestionList=()=>{
    const[list,updateList]=useState([]);
    const handleList=(e)=>{
        let arr = [...list]; 
        let index = arr.indexOf(e);
        if (index !== -1) {
        arr.splice(index, 1);
        }
        else arr.push(e);
        updateList(arr);
    }
    function isQuestionAdded(e){
        let index=list.indexOf(e);
        if(index===-1) return false;
        else return true;
    }
    const handleQuestionCreate=()=>{
        let url="/dev2"
        const features = 'width=1000,height=800,top=100,left=100,menubar=no,toolbar=no,location=no,status=no';
        window.open(url, '_blank', features)
    }
    
    return(
        <div className="py-4 h-screen w-screen items-center ">
            <div className="w-full border-b-2 border-t-2 mb-8 border-yellow-500 h-[15%] flex items-center justify-center text-4xl font-extrabold">Question Catalog</div>
            <div className="w-full flex justify-end pr-[10%] pb-8"> <button onClick={()=>handleQuestionCreate()} className="bg-green-500 rounded-lg " type="button">Create New Question </button></div>
            <div className="h-full w-full  flex flex-wrap items-center gap-5 overflow-y-scroll justify-center">
                {Ques.map((element,index)=>{
                    let classn = "";
                    if (element.question_difficulty === "Easy") classn = "bg-green-400";
                    else if (element.question_difficulty === "Medium") classn = "bg-yellow-500";
                    else classn = "bg-red-600";
                    return(
                        <div key={index} className="w-[90%] h-[33%] min-h-40 border-2 l border-yellow-300 flex flex-wrap justify-center  ">
                       
                        <div className="w-[90%] h-[30%]">  <span className=" font-bold text-xl">{element.question_name} </span> <span className={`${classn} px-2 rounded-full text-white `}>{element.question_difficulty}</span>  </div>
                       <div className="w-[95%] flex h-[40%]">
                            <div className="w-[90%] text-sm text-[#9c9b9b]">{element.Description}</div>
                            {/* <div className="w-[20%] h-full flex justify-end"><button className="bg-yellow-500 border-2 border-white " type="button">Select</button></div> */}
                            <button onClick={()=>{handleList(element.id)}} className={`border-2 h-1/2  hover:delay-300 ${!isQuestionAdded(element.id)?"bg-yellow-500 hover:border-yellow-400":"bg-transparent text-yellow-500   border-yellow-400 hover:delay-150"}`} type="button">{(!isQuestionAdded(element.id)?"Select":"UnSelect")}</button>

                            {/* </div> */}
                        </div>
                        <div className="h-[30%] w-full"></div>

                        
                    </div>
                    )
                })}
            </div>
            
        </div>
    )
}

