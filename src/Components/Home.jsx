import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Home=()=>{
    const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dev');
  };
    return(
        <div className="h-screen">
         <NavBar/>
        
        <div className="bg-[#102542] w-screen h-[88%]">
            <div className="flex justify-center items-center w-full h-full">
                    <div className="flex flex-wrap gap-5 ">
                        <div className="w-full font-bold px-4 text-3xl md:p-0 md:text-5xl  text-[#F7F0F5] text-center italic  " >                
                            The journey of a thousand lines of code begins with a<br></br> single problem.
                        </div>
                        <div className="text-center h-min w-full italic ">
                            Because We Don't want More Drama in our Life
                        </div>
                        <div className="flex justify-center w-full h-min gap-10 mt-5">
                            <div className="md:w-52">
                            <button className="bg-[#4D9DE0] w-full  font-bold rounded-md border-1 border-white hover:bg-inherit">Sign Up</button>
                            </div>
                            <div className="md:w-52">
                            <button onClick={handleNavigate} className="bg-[#f3ca40] w-full  font-bold rounded-md border-1 border-white hover:bg-inherit">See Contests</button>
                            </div>
                        </div>
                        <div className="flex justify-center text-center w-full mt-10 gap-2 ">
                        <img src="128px-Love_Heart_SVG.svg.png" alt="" className=" h-3 w-3 mt-2" />
                           <div> Proudly Made In NITJ ,for NITJ</div>
                        </div>

                    </div>
            </div>

        </div>
        </div>
    )
}

export default Home;