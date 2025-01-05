import React, { useState } from "react";

export const Navigate = ({ toggleState }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative h-full w-full bg-[#04070f] flex justify-center items-center">
      {/* Button to toggle navigation */}
      {/* <button
        onClick={handleToggle}
        className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-500 transition duration-300 shadow-lg focus:outline-none"
      >
        {isVisible ? "Close Menu" : "Open Menu"}
      </button> */}

      {/* Navigation panel */}
      <div
        className={`absolute top-0 left-0 h-full w-full bg-[#04070f] text-white transform transition-transform duration-500 ease-in-out shadow-lg 
          ${isVisible ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full w-full flex justify-center">
          <div className="w-[80%] h-full bg-inherit ">
            <div id="NavbarType" className="h-[30%] w-full flex items-center ">
              <div className="font-semibold text-3xl">DashBoard</div>
            </div>

            <div className="w-full h-[70%] flex flex-wrap justify-between">
              <div className="w-full h-1/3">
                <div className="w-full h-[30%]">
                  <div className="font-bold text-xl">Manage Contest</div>
                </div>
                <div className="w-full h-[70%]">
                  <div
                    onClick={() => toggleState("create")}
                    className="cursor-pointer hover:underline text-[#b2aaaa] hover:text-white transition-colors duration-300"
                  >
                    Create Contest
                  </div>
                  <div
                    onClick={() => toggleState("manage")}
                    className="cursor-pointer hover:underline text-[#b2aaaa] hover:text-white transition-colors duration-300"
                  >
                    Manage Contest
                  </div>
                  <div className="cursor-pointer hover:underline text-[#b2aaaa] hover:text-white transition-colors duration-300">
                    Contest Result
                  </div>
                </div>
              </div>

              {/* <div className="w-full h-1/3">
                <div className="w-full h-[30%]">
                  <div className="font-bold text-xl">Manage Account</div>
                </div>
                <div className="w-full h-[70%]">
                  <div className="cursor-pointer hover:underline text-[#b2aaaa] hover:text-white transition-colors duration-300">
                    Manage Account
                  </div>
                  <div className="cursor-pointer hover:underline text-[#b2aaaa] hover:text-white transition-colors duration-300">
                    Log Out
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
