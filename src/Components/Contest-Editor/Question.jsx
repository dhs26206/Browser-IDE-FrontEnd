import Example from "./Example";

const Question=({quesTitle,difficulty,description,inputFormat,outputFormat})=>{
    return(
        <div className="w-full h-screen bg-slate-900 overflow-scroll scrollbar-thumb">
            <div className="border-b-2 border-slate-500 p-5 mx-4">
                <div className=" font-extrabold text-xl">
                    {quesTitle}
                </div>
                <div className="flex justify-start gap-3 pt-4">
                    <span className=" text-fuchsia-400">{difficulty}</span>
                    <span className="text-[#95D9C3]">Accuracy :49.88%</span>
                    <span className="text-[#D1AC00]">Submission:16</span>
                    <span className="text-[#C05746]">Max Score:10</span>
                </div>
            </div>
            <div id="description" className="text-white border-b-2 border-slate-500 p-5 mx-5 text-justify" >
            {description}
            </div>
            <div className="border-b-2 border-slate-500 p-5 mx-5 text-white">
               INPUT FORMAT: <br />{inputFormat} 
            </div>
            <div className="border-b-2 border-slate-500 p-5 mx-5 text-white">
                    OUTPUT FORMAT: <br/> {outputFormat}
            </div>
                

            <div className="w-full flex flex-wrap gap-6 mt-5">
                <div className="w-full"><Example/></div> 
                <div className="w-full"><Example/></div>  

            </div>

        </div>
    )
}

export default Question;