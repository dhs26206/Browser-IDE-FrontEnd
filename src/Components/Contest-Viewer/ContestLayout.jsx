import NavBar from "../NavBar";
// import List from "./ListContest";
import list from  '../../JSON/listContest.json'
import ListContest from "./ListContest";
import Dino from "./Dino";
const ContestLayout=()=>{
    // console.log('Imported JSON data in ParentComponent:', list); // Log the data to check import
    return(
        <div className="w-screen flex flex-wrap h-screen bg-[#102542]">
            <div className="w-screen h-[15%] ">
                <NavBar/>
            </div>
            <div className="w-full h-[30%]">
                <Dino/>
            </div>
            <div className="w-full h-[55%] overflow-scroll flex flex-wrap md:flex-nowrap justify-center">
                <div className="w-full md:w-[25%]"></div>
                <div className="w-full md:w-[50%]">
                    <ListContest list={list}/>
                </div>
                <div className="w-full md:w-[25%]"></div>
            </div>
        </div>
    )
}

export default ContestLayout;