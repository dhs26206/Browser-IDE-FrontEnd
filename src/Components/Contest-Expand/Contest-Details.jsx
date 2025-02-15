import { useEffect, useState } from "react"


const ContestDetails=({contest_id,total_questions,max_score,start_time,end_time})=>{
    // console.log(contest_id)
    const[timeLeft,setTimeLeft]=useState(getLeft(end_time));
    const[user_score,set_user_score]=useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getLeft(end_time));
        }, 1000);

        return () => clearInterval(interval);
    }, [end_time]);
    function getLeft(end_time){
        let difference=Math.max(new Date(end_time).getTime()  -Date.now(),0);
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((difference % (1000 * 60)) / 1000);
       return {days,hours,minutes,seconds};
    }
    let {days,hours,minutes,seconds}=getLeft(end_time);
    return(
        <div className="w-full h-full z-0 relative">
            <div className="w-full h-full bg-[url(https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0)] bg-cover blur-sm bg-center bg-no-repeat  rounded-lg filter -z-10 absolute "></div>
            <div className="w-full h-full flex flex-wrap justify-normal items-center z-10 absolute">
                <div className="w-1/2 h-1/2  font-bold text-2xl font-mono pl-2 text-[#b0acac] "><span>Contest ID :</span> {contest_id}</div>
                <div className="w-1/2 h-1/2 font-bold text-2xl font-mono text-[#b0acac]"><span>Total Questions :</span>{total_questions}</div>
                <div className="w-1/2 h-1/2 font-bold text-2xl font-mono pl-2 text-[#b0acac]"><span>Score :</span>{user_score}/{max_score} </div>
                <div className="w-1/2 h-1/2 font-bold text-2xl font-mono text-[#b0acac]"> <span>Time Left :</span>{days}d {hours}h {minutes}m {seconds}s  </div>
                
            </div>
        </div>
    )
}

export default ContestDetails