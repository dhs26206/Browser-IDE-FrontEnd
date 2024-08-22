import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import NavBar from "../NavBar";
import QuestionList from "./QuestionList";
import ContestDetails from "./Contest-Details";
//import contests from "../../JSON/contest.json"
import {url} from "../../../url"
const  ContestExpand=()=>{
    const{q}=useParams();
    const[contests,setContests]=useState();
    useEffect(()=>{
        fetch(`${url}/contest/${q}`,{
            method:`GET`,
            credentials:"include"
        }).then(res=> res.json()).then(response =>{
            console.log(response);
            if(response.status)
            {
                setContests(response.data);
            }
            else{
                //alert(`plz reload the page!!`);
            }
            console.log(response.data);
        })
    },[])
    return (
        <div className=" h-screen w-screen overflow-scroll bg-[#102542] ">
            <div className="w-full h-[10%]">
                <NavBar/>
            </div>
            <div className="w-full h-[35%]">
                <div className="w-full h-[90%]">
                    
                        {
                            contests ? <ContestDetails {...contests}/>:<div>loading ...</div>
                        }
                    
                
                </div>
            </div>
            <div className="w-full h-[55%] flex justify-center overflow-scroll">
            <div className="w-full md:w-[50%] ">
                {
                    contests ? <QuestionList contests={contests}/> :<div>loading ...</div>
                }
                
            </div>
            </div>

        </div>
    )
}

export default ContestExpand;