import Example from "./Example";

const Question=({data})=>{
    const toCamelCase = str => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
    return(
        <div className="w-full h-screen bg-slate-900 overflow-scroll scrollbar-thumb">
            <div className="border-b-2 border-slate-500 p-5 mx-4">
                <div className=" font-extrabold text-xl">
                    {data.quesTitle}
                </div>
                <div className="flex justify-start gap-3 pt-4">
                    <span className=" bg-fuchsia-400 text-white px-3 py-1 rounded-md">{toCamelCase(data.difficulty)}</span>
                    <span className="text-[#95D9C3]">Accuracy: {data.acceptedSubmission/data.totalSubmission*100}</span>
                    <span className="text-[#D1AC00]">Submission: {data.totalSubmission}</span>
                    <span className="text-[#C05746]">Max Score: {data.score}</span>
                </div>
            </div>
            <div id="description" className="text-white border-b-2 border-slate-500 p-5 mx-5 text-justify" >
            {data.quesText}
            </div>
            <div className="border-b-2 border-slate-500 p-5 mx-5 text-white">
               INPUT FORMAT: <br />{data.inputFormat} 
            </div>
            <div className="border-b-2 border-slate-500 p-5 mx-5 text-white">
                    OUTPUT FORMAT: <br/> {data.outputFormat}
            </div>
                

            <div className="w-full flex flex-wrap gap-6 mt-5">
                <div className="w-full"><Example data={data}/></div> 
                {/* <div className="w-full"><Example/></div>   */}

            </div>

        </div>
    )
}

export default Question;