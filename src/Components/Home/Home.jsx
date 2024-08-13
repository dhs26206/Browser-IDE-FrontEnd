import SolarSystemAnimation from "./SolarSystemAnimation";
import NavBar from "../NavBar";
import Whatwedo from "./what-we-do";
import Keyfeatures from "./key-features";
import Team from "./Team";
import Contribute from "./Contribute";
import Footer from "./Footer";
import ParticlesComponent from "./nuro";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  const handleNavigate = () => {
    navigate('/contestList');
  };

  const handleNavigateSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="relative h-screen w-screen overflow-y-auto">
      
      <div className="absolute z-10">
        <SolarSystemAnimation />
      </div>

      
      <div className="relative flex flex-col">
        {/* NavBar */}
        <div className="w-full h-[12%] bg-transparent z-40">
          <NavBar />
        </div>

        {/* Hero Section */}
        <div className="w-full h-screen bg-transparent flex flex-col items-left justify-center text-left z-30">
          <div className="font-bold px-4 text-3xl md:p-0 md:text-5xl text-[#F7F0F5] italic">
            The journey of a thousand lines of code begins with a
            <br />
            single problem.
          </div>
          <div className="italic mt-2">
            Because We Don't want More Drama in our Life
          </div>
          <div className="flex justify-center gap-10 mt-5">
            <button
              onClick={handleNavigateSignUp}
              className="bg-transparent border-2 border-[#4D9DE0] text-[#4D9DE0] w-52 font-bold rounded-md hover:bg-[#4D9DE0] hover:text-white"
            >
              Sign Up
            </button>
            <button
              onClick={handleNavigate}
              className="bg-transparent border-2 border-[#f3ca40] text-[#f3ca40] w-52 font-bold rounded-md hover:bg-[#f3ca40] hover:text-white"
            >
              See Contests
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <img
              src="128px-Love_Heart_SVG.svg.png"
              alt=""
              className="h-3 w-3"
            />
            <div>Proudly Made In NITJ, for NITJ</div>
          </div>
        </div>

        {/* Sections below the hero */}
        <div className="flex flex-col w-full">
          
          <div className="relative h-[100vh]">
            <div className="absolute inset-0 -z-10">
              <ParticlesComponent />
            </div>
            <div className="relative z-20 h-full flex items-center">
              <Whatwedo />
            </div>
          </div>

          <div className="h-[100vh] bg-transparent z-20">
            <Keyfeatures />
          </div>
          <div className="h-[100vh] bg-transparent z-20">
            <Team />
          </div>
          <div className="h-[100vh] bg-transparent z-20">
            <Contribute />
          </div>
          <div className="h-[100vh] bg-transparent z-20">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
        
 
