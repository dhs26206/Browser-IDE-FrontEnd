import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";


const QuestionList=({contests})=>{
    const navigate=useNavigate();
    const handleNavigateContest=(id)=>{
        console.log(`Navigating to ${id}`);
        navigate(`/problem/${id}`)
    }
    const[contestActive,setContestActive]=useState(true)
    // console.log("component rendered")


    useEffect(()=>{
    let difference=Math.max(new Date(contests.end_time).getTime()  -Date.now(),0);
    if (difference==0){
        setContestActive(false)
    }
    },[])
    
    return(
        <div  className="w-full h-full md:pb-10">
            <div className="flex flex-wrap gap-8 border-b-2 border-slate-600">
            {contests.questions.map((item,index)=>{
                    
                    return (<div  key={index} className="px-6 flex w-full h-36 flex-wrap rounded-2xl  border-2 bg-[url(https://images.unsplash.com/photo-1622793139910-e261be0b30a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3)] border-gray-700 hover:border-4">
                        <div className="w-full h-[10%] italic text-sm text-slate-500"> Score : {item.score} </div>
                        <div className="w-full h-2">  </div>
                        <div className="w-1/2 flex flex-wrap justify-end h-[90%]">
                           <div className="w-full text-lg font-bold text-slate-200"> {item.question_title}</div>
                           <div className="w-full font-light text-slate-400">Difficulty :{item.difficulty}</div>
                           <div className=""></div>
                        </div>
                        <div className="w-1/2 flex justify-end h-[90%] items-center">
                            <div>
                                <button onClick={()=>handleNavigateContest(item.id)} className={`rounded-md px-7 py-4 text-white ${!contestActive? 'bg-gray-400 cursor-not-allowed': 'bg-blue-500 hover:bg-blue-700'} `}>
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