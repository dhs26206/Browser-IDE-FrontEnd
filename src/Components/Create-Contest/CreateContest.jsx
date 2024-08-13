import { ContestForm } from "./ContestForm";
import ContestNavBar from "./ContestNavBar";
import { Navigate } from "./Dashboard-Navigate";


function CreateContest(){
    return(
        <div className="w-full h-full bg-[#9594b7]">
            <div className="w-full h-[15%]">
                <ContestNavBar/>
            </div>
            <div className="flex w-full h-[85%]">
                <div className="w-1/5 h-full" >
                <Navigate/>
                </div>
                <div className="w-4/5 h-full">
                <ContestForm/>
                </div>
            </div>
        </div>
    )
}



export default CreateContest;