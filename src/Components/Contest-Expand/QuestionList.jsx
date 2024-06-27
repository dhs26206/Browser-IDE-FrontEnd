import { useState,useNavigate } from "react"

const QuestionList=({contests})=>{
    const navigate=useNavigate();
    const handleNavigateContest=(id)=>{
        navigate(`/question/${id}`)
    }
    const[contestActive,setContestActive]=useState(true)
    return(
        <div  className="w-full h-full md:pb-10">
            <div className="flex flex-wrap gap-8 border-b-2  border-slate-600">
            {contests.contests[0].questions.map((item,index)=>{
                    
                    return (<div  key={index} className="px-6 flex w-full h-36 flex-wrap  border-2  border-gray-700 hover:border-4">
                        <div className="w-full h-[10%] italic text-sm text-slate-500"> Score : {item.score} </div>
                        <div className="w-full h-2">  </div>
                        <div className="w-1/2 flex flex-wrap justify-end h-[90%]">
                           <div className="w-full text-lg font-bold text-slate-200"> {item.question_title}</div>
                           <div className="w-full font-light text-slate-400">Difficulty :{item.difficulty}</div>
                           <div className=""></div>
                        </div>
                        <div className="w-1/2 flex justify-end h-[90%] items-center">
                            <div>
                                <button onClick={handleNavigateContest(item.id)} className={`rounded-md px-7 py-4 text-white ${!contestActive? 'bg-gray-400 cursor-not-allowed': 'bg-blue-500 hover:bg-blue-700'} `}>
                                    Solve</button>
                            </div>
                        </div>

                    </div>
                )})}
            </div>
        </div>
    )
}
export default QuestionList