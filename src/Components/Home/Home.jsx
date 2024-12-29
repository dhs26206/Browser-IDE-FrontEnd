import SolarSystemAnimation from "./SolarSystemAnimation";
import NavBar from "../NavBar";
import Whatwedo from "./what-we-do";
import Keyfeatures from "./key-features";
import Team from "./Team";
import Contribute from "./Contribute";
import Footer from "./Footer";
import ParticlesComponent from "./nuro";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { url } from "../../../url";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let onetime=false;
  useEffect(() => {
    // Check if the user is already logged in
    const tel=()=>{fetch("https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-760717bf-8d87-41e7-ad6d-783ae14d56f9/requests/Telemetry");
      onetime=true;
    }
    if(!onetime) tel();
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
    })
    .catch((error) => {
      console.error('Error checking login status:', error);
    });
  }, []);

  const handleNavigate = () => {
    navigate('/contestList');
  };

  const handleNavigateSignUp = () => {
    navigate('/signup');
  };
  const handleNavigateCreateContest=()=>{
    navigate('/createcontest');
  }

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
          <div className="md:ml-5 font-bold px-4 text-3xl md:p-0 md:text-5xl text-[#F7F0F5] italic">
            The journey of a thousand lines of code begins with a
            <br />
            single problem.
          </div>
          <div className="ml-5 italic mt-2">
            Because We Don't want More Drama in our Life
          </div>
          
          <div className="flex justify-center gap-10 mt-5">
            {!isLoggedIn && (
              <button
                onClick={handleNavigateSignUp}
                className="bg-transparent border-2 border-[#4D9DE0] text-[#4D9DE0] w-52 font-bold rounded-md hover:bg-[#4D9DE0] hover:text-white"
              >
                Sign Up
              </button>
            )}
            <button
              onClick={handleNavigate}
              className="bg-transparent border-2 border-[#f3ca40] text-[#f3ca40] w-52 font-bold rounded-md hover:bg-[#f3ca40] hover:text-white"
            >
              See Contests
            </button>
            <button
              onClick={handleNavigateCreateContest}
              className="bg-transparent border-2 border-[#f3ca40] text-[#f3ca40] w-52 font-bold rounded-md hover:bg-[#f3ca40] hover:text-white"
            >
              Create Contest
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <img
              src="128px-Love_Heart_SVG.svg.png"
              alt=""
              className="h-3 w-3"
            />
            <div>Only God knows who made this website, and how is it still functional :/ </div>
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
          <div className="h-[100vh] bg-transparent z-20 relative bottom-40">
            <Team />
          </div>
          <div className="h-[100vh] bg-transparent z-20 relative top-5 p-32">
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

 
