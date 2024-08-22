import NavBar from "../NavBar";
// import List from "./ListContest";
//import list from  '../../JSON/listContest.json'
import ListContest from "./ListContest";
import Dino from "./Dino";
import SolarSystemAnimation from "../Home/SolarSystemAnimation";
import { useEffect, useState } from "react";
import {url} from "../../../url"
const ContestLayout=()=>{
    // console.log('Imported JSON data in ParentComponent:', list); // Log the data to check import
    // let obj={background:{color:{value:"#000000"}}}
    const [loading,setLoading]=useState(false);
    const[list,setList]=useState([]);
    useEffect(()=>{
        fetch(`${url}/contestlist`,{
            method:`GET`,
            credentials:"include"
        }).then(res=> res.json()).then(response =>{
            if(response.status)
            {
                setList(response.data);
                console.log(list);
                setLoading(true);
            }
            else{
                //alert(`plz reload the page!!`);
            }
            //console.log(response);
        })
    },[])
    return(
        <div className="w-screen flex flex-wrap h-screen bg-transparent">
            <div className="w-screen h-[10%] backdrop-blur-lg ">
                <NavBar/>
            </div>
            <div className="absolute -z-10 bg-black">
            <SolarSystemAnimation  />
           </div>
            <div className="w-full h-[35%]">
                <Dino/>
            </div>
            <div className="w-full h-[55%] overflow-scroll element flex flex-wrap md:flex-nowrap justify-center">
                <div className="w-full md:w-[25%]"></div>
                <div className="w-full md:w-[50%]">
                    {
                        loading? <ListContest list={list} />:<div> loading!!!</div>
                    }
                    
                </div>
                <div className="w-full md:w-[25%]"></div>
            </div>
        </div>
    )
}

export default ContestLayout;