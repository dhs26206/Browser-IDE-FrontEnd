import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import QuestionList from "./QuestionList";
import ContestDetails from "./Contest-Details";
import contests from "../../JSON/contest.json"
const  ContestExpand=()=>{
    return (
        <div className=" h-screen w-screen overflow-scroll bg-[#102542] ">
            <div className="w-full h-[10%]">
                <NavBar/>
            </div>
            <div className="w-full h-[35%]">
                <div className="w-full h-[90%]">
                <ContestDetails {...contests}/>
                </div>
            </div>
            <div className="w-full h-[55%] flex justify-center overflow-scroll">
            <div className="w-full md:w-[50%] ">
                <QuestionList contests={contests}/>
            </div>
            </div>

        </div>
    )
}

export default ContestExpand;