import Ques from "./../../JSON/listQuestion.json"
export const QuestionList=()=>{
    return(
        <div className="py-4 h-screen w-screen items-center ">
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
                            <button className=" border-2 hover:bg-inherit hover:delay-300 bg-yellow-500 hover:text-yellow-300 hover:border-yellow-400" type="button">Select</button>

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

