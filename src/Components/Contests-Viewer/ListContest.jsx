import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import list1 from '../../JSON/listContest.json';

const ListContest=({list})=>{
    // console.log(list)
    const navigate=useNavigate();
    const handleNavigateContest=(id)=>{
        navigate(`/contest/${id}`)
    }
    const [now, setNow] = useState(Date.now());
    // console.log('Imported JSON data in ParentComponent:', list1); // Log the data to check import
        useEffect(() => {
          const timer = setInterval(() => {
            setNow(Date.now());
          }, 1000);}) // Check every second
    const DateTime= ({date})=> {
        // console.log(date)
        let options = { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        let datePart = date.toLocaleString('en-IN', { ...options, hour: undefined, minute: undefined, hour12: undefined });
        let timePart = date.toLocaleString('en-IN', { ...options, year: undefined, month: undefined, day: undefined });
        // console.log(datePart+" "+timePart)
        return[datePart,timePart ]
    }
    return(
        <div className="w-full h-full">
            <div className="flex flex-wrap gap-8 border-b-2  border-slate-600">
                {list.map((item,index)=>{
                    const isContestActive = now >= item.contest_start && now <= item.contest_end;
                    const isContestEnded = now > item.contest_end;
                    return (<div id={item.contest_id} key={index} className="px-6 flex w-full h-36 flex-wrap  border-2  border-gray-700 hover:border-4">
                        <div className="w-full h-[10%] italic text-sm text-slate-500"> Organised by {item.organizer}</div>
                        <div className="w-full h-2"></div>
                        <div className="w-1/2 flex flex-wrap justify-end h-[90%]">
                           <div className="w-full text-lg font-bold text-slate-200"> {item.contest_name}</div>
                           <div className="w-full font-light text-slate-400">Starts At {DateTime({date: new Date(item.contest_start)})[0]} { DateTime({date: new Date(item.contest_start)})[1]}</div>
                           <div className=""></div>
                        </div>
                        <div className="w-1/2 flex justify-end h-[90%] items-center">
                            <div>
                                <button onClick={()=>handleNavigateContest(item.contest_id)} className={`rounded-md px-7 py-4 text-white ${isContestEnded || !isContestActive? 'bg-gray-400 cursor-not-allowed': 'bg-blue-500 hover:bg-blue-700'} `}>
                                    Participate Now</button>
                            </div>
                        </div>

                    </div>
                )})}
            </div>

        </div>
    )
}

export default ListContest;