import { useState } from "react"
import manage from  "./../../JSON/ManageContest.json"

const convertTime = (timeString) => {
    // Step 1: Parse the time string
    const timestamp = parseInt(timeString, 10);
  
    // Step 2: Create a Date object
    const date = new Date(timestamp);
  
    // Step 3: Format the date
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    return date.toLocaleString('en-US', options);
  };
export const ManageContest=()=>{
    const [expand,setexpand]=useState(-1); //Index of which is expanded
    const handleExpand=(e)=>{
        // console.log(`I am Triggered ${e}`)
        if(expand===e) setexpand(-1);
        else setexpand(e);
        
    };
    // console.log(manage);
    return(
        <div className="pl-5 h-full w-full bg-blue-950  ">
            <div className="h-full w-full flex justify-center items-center">
                <div className="md:w-[95%] w-[90%] md:h-[70%] ">
                    <div key="gerk" className="w-full h-[10%] bg-blue-900 border-2 border-white items-center flex justify-center">
                        Yours Contest
                    </div>
                    <div className="overflow-y-scroll h-[90%]  boder-white ">
                    {
                        manage.map((element,index)=>{
                            // console.log(element.contest_id)
                            return(
                                <>
                                        <div key={index} className="h-[35%] w-full border-[1px] border-gray-500 hover:border-2">
                                            <div className="w-full h-[20%] text-sm text-slate-600 "> {element.contest_id} </div>
                                            <div className="w-full h-[80%] flex justify-between">
                                                <div className="h-full pl-2 items-center flex text-2xl" >{element.contest_name}</div>
                                                <div className="h-full pr-4 items-center flex "> <button onClick={()=>handleExpand(index)} className={` w-full  hover:delay-100  border-2 hover:border-red-300 ${expand===index?"bg-red-600 hover:bg-red-400":"bg-yellow-500 hover:bg-yellow-400"} `} type="button">{expand==index?"Close":"View Details"}</button></div>

                                            </div>
                                        </div>
                                        {expand==index&&<div className="pl-2 h-[55%] w-full border-b-[1px] border-l-[1px] border-r-[1px] border-red-600 flex flex-wrap justify-around">
                                            <div className="w-full h-1/4 flex"> <span className="w-[50%]"> Contest ID:{element.contest_id}</span> <span className="w-[50%]"> No of Problems: {element.no_of_problems}</span></div>
                                            <div className="w-full h-1/4 flex"> <span className="w-[50%]"> Contest Start Time: {convertTime(element.start_time)}</span> <span className="w-[50%]"> Contest End Time: {convertTime(element.end_time)}</span></div>
                                            <div className="w-full h-1/4 flex"> <span className="w-[50%]"> Type: {element.type}</span> <span className="w-[50%]"> Security: {element.security}</span></div>
                                            <div className="w-1/2"></div> <div className="w-1/2 pr-3 pb-2 h-1/4 flex justify-end gap-3"><button className="bg-green-500 hover:bg-green-400 h-full flex items-center">Edit Details</button><button className="bg-red-800 hover:bg-red-900 h-full flex items-center">Delete</button></div>
                                            </div>}
                                    </>
                            )
                        })
                    }
                    </div>
                </div>

            </div>
        </div>
    )
}