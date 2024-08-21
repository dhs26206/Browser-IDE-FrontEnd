import { useState } from "react"
import manage from  "./../../JSON/ManageContest.json"


export const ManageContest=()=>{
    const[expand,setExpand]=useState(-1);
    function handleExpand(e){
        if(expand===e) setExpand(-1);
        else setExpand(e);
    }
    function convertTime(timestamp) {
        // Create a new Date object from the timestamp
        const date = new Date(timestamp);
      
        // Format the date and time using localeString with en-US locale
        const formattedDate = date.toLocaleString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true
        });
      
        return formattedDate; 
       
      }
    return(
        <div className="h-full w-full bg-blue-950 ">
            <div className="h-full w-full flex justify-center items-center">
                <div className="md:w-[80%] w-[90%] md:h-[50vh] ">
                    <div className="h-full w-full border-2 border-white">
                        <div id="Name Teler" className="h-[20%] border-2 border-white flex justify-center items-center text-3xl font-extrabold">
                            Your Contests
                        </div>
                        <div className="h-[80%] overflow-y-scroll flex flex-wrap">
                            {manage.map((element,index)=>{
                                return(
                                    <>
                                        <div key={index} className="h-[35%] w-full border-[1px] border-gray-500 hover:border-2">
                                            <div className="w-full h-[20%] text-sm text-slate-600 "> {element.contest_id} </div>
                                            <div className="w-full h-[80%] flex justify-between">
                                                <div className="h-full pl-2 items-center flex text-2xl" >{element.contest_name}</div>
                                                <div className="h-full pr-4 items-center flex "> <button onClick={()=>handleExpand(index)} className={` w-full  hover:delay-100  border-2 hover:border-red-300 ${expand===index?"bg-red-600 hover:bg-red-400":"bg-yellow-500 hover:bg-yellow-400"} `} type="button">{expand==index?"Close":"View Details"}</button></div>

                                            </div>
                                        </div>
                                        {expand==index&&<div className="pl-2 h-[50%] w-full border-b-[1px] border-l-[1px] border-r-[1px] border-red-600 flex flex-wrap justify-around">
                                            <div className="w-full flex"> <span className="w-[50%]"> Contest ID:{element.contest_id}</span> <span className="w-[50%]"> No of Problems: {element.no_of_problems}</span></div>
                                            <div className="w-full flex"> <span className="w-[50%]"> Contest Start Time: {convertTime(element.start_time)}</span> <span className="w-[50%]"> Contest End Time: {convertTime(element.end_time)}</span></div>
                                            <div className="w-full flex"> <span className="w-[50%]"> Type: {element.type}</span> <span className="w-[50%]"> Security: {element.security}</span></div>
                                            </div>}
                                    </>
                                    
                                )
                            })}

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}