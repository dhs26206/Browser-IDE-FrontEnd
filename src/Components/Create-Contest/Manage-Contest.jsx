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
                <div className="md:w-[95%] w-[90%] md:h-[60%] ">
                    <div key="gerk" className="w-full h-[10%] bg-blue-900 border-2 border-white items-center flex justify-center">
                        Yours Contest
                    </div>
                    <div className="overflow-y-scroll h-[90%] border-2 boder-white ">
                    {
                        manage.map((element,index)=>{
                            // console.log(element.contest_id)
                            return(
                                <div key={index} className={`pt-1 pl-1 w-full ${expand===index?"h-[70%]":"h-[30%]"} flex flex-col  bg-[#1d3275] hover:border-yellow-200 hover:delay-100 border-2 border-gray-800`}>
                                    <div className={`${expand===index?"h-[40%]":"h-full"} w-full `}>
                                        <div className="w-full h-3 text-sm text-[#6e6e6e]">{element.contest_id}</div>
                                        <div className="w-full h-full pt-1 flex items-center">
                                            <div className="flex justify-between w-full">
                                                <div className="text-2xl">{element.contest_name} </div>
                                                <div className="mr-2">
                                                    <button onClick={()=>handleExpand(index)} className={`${expand===index?"bg-red-600":"bg-yellow-500"}`}>{expand===index?"Close":"View Details"}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {expand===index&& <div className="w-full h-[60%]">
                                         <div className="w-full h-full flex flex-wrap justify-center ">
                                            <div className="w-[100%] border-t-2 border-[#aba5a5]"></div>
                                            <div className="w-full h-full flex flex-wrap items-center justify-center">
                                                <div className="w-[90%] flex justify-between"><span>Contest ID: {element.contest_id}</span> <span>Contest Created On : {convertTime(element.created_on)} </span></div>
                                                <div className="w-[90%] flex justify-between"><span>Start : {convertTime(element.start_time)}</span> <span>End : {convertTime(element.end_time)} </span></div>
                                                <div className="" ><span></span> </div>
                                                <div></div>
                                            </div>
                                         </div>
                                         </div>}

                                </div>
                            )
                        })
                    }
                    </div>
                </div>

            </div>
        </div>
    )
}