import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { url } from "../../../url";

const Practice=()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [questions,setquestions]=useState([])
    //   let onetime=false;
      useEffect(() => {
        // Check if the user is already logged in
        // const tel=()=>{fetch("https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-760717bf-8d87-41e7-ad6d-783ae14d56f9/requests/Telemetry");
        //   onetime=true;
        // }
        // if(!onetime) tel();
        // setLoading(true);
        fetch(`${url}/practice`,{
            method: 'GET',
        }).then((res)=>res.json())
        .then((response)=>{
            setquestions(response)
        }).catch((error) => {
            console.error('Error checking login status:', error);
        });


        fetch(`${url}/checklogin`, {
          method: 'GET',
          credentials: 'include',
        })
        .then((res) => res.json())
        .then((response) => {
          if (response.login) {
            setIsLoggedIn(true); // User is logged in
          } else {
            setIsLoggedIn(false); // User is not logged in
          }
        //   setLoading(false);
        })
        .catch((error) => {
          console.error('Error checking login status:', error);
        //   setLoading(false);
        });
      }, []);

    return(
        <div className="w-screen h-screen bg-black">
            <div className="w-full h-[12%] bg-slate-900 bg-transparent z-40">
     
                <NavBar setlogin={setIsLoggedIn}/>
            </div>
            <div className="w-[90%] h-[80%] grid ">
                {questions.map((item,index)=>{
                    
                    return (<div  key={index} className="px-6 flex w-[27rem] h-36 flex-wrap rounded-2xl  border-2 bg-[url(https://images.unsplash.com/photo-1622793139910-e261be0b30a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3)] border-gray-700 hover:border-4">
                        <div className="w-full h-[10%] italic text-sm text-slate-500"> Score : {item.score} </div>
                        <div className="w-full h-2">  </div>
                        <div className="w-1/2 flex flex-wrap justify-end h-[90%]">
                           <div className="w-full text-lg font-bold text-slate-200"> {item.question_title}</div>
                           <div className="w-full font-light text-slate-400">Difficulty :{item.difficulty}</div>
                           <div className=""></div>
                        </div>
                        <div className="w-1/2 flex justify-end h-[90%] items-center">
                            <div>
                                <button onClick={()=>handleNavigateContest(item.id)} className={`rounded-md px-7 py-4 text-white ${false? 'bg-gray-400 cursor-not-allowed': 'bg-blue-500 hover:bg-blue-700'} `}>
                                    Solve</button>
                            </div>
                        </div>

                    </div>
                )})}
            </div>

        </div>
    )
}

export default Practice;