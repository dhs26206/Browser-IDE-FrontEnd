import { useState } from "react";
import Dropdown from "./DropDown";

export const ContestForm = () => {
  const Type = ["Public", "Private(accessed through link)"];
  const [Contest_Type, set_Contest_Type] = useState("Public");
  const handleType = (item) => {
    set_Contest_Type(item);
  };
  const Security = ["Strict", "Moderate", "Mild(User Allowed to Tab Change)"];
  const [Security_State, set_Security_State] = useState("Public");
  const handleSecurity = (item) => {
    set_Security_State(item);
  };
  const handleQuestionChoose = () => {
    let url = "/QChoose/gwbgswt";
    const features =
      "width=800,height=600,top=100,left=100,location=no,menubar=no,toolbar=no,location=no,status=no,resizable=no";
    window.open(url, "_blank", features);
  };

  return (
    <div className="pl-5 h-full w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-x-scroll font-sans">
      <div className="w-full h-1/5 text-5xl flex items-center font-extrabold tracking-wide">
        Create Contest
      </div>
      <div className="w-full h-5/6 pl-5 flex flex-col gap-8 overflow-x-scroll">
        <div className="w-1/2 h-1/5">
          <div className="w-full h-1/2 text-3xl font-bold">Contest's Name:</div>
          <div className="w-full h-1/2">
            <input
              className="w-4/5 h-[70%] rounded-lg text-gray-300 bg-gray-800 border-2 border-gray-700 placeholder:pl-4 placeholder:text-gray-500 placeholder:text-sm focus:outline-none focus:border-purple-500"
              placeholder="Enter Contest Name"
              type="text"
            />
          </div>
        </div>
        <div className="w-1/2 h-1/5">
          <div className="w-full h-1/2 text-3xl font-bold">
            Contest Type (Public/Private):
          </div>
          <div className="w-full h-[35%]">
            <Dropdown title={"Public"} items={Type} onSelect={handleType} clickable={false} />
          </div>
        </div>
        <div className="w-1/2 h-1/5">
          <div className="w-full h-1/2 text-2xl font-bold">Contest Start Timings</div>
          <div className="w-full h-1/2">
            <label htmlFor="Start-Time" className="text-gray-400">
              Select
            </label>
            <input
              type="datetime-local"
              name="Start-Time"
              id="Start-Time"
              className="ml-3 text-gray-300 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
        <div className="w-1/2 h-1/5">
          <div className="w-full h-1/2 text-2xl font-bold">Contest End Timings</div>
          <div className="w-full h-1/2">
            <label htmlFor="End-Time" className="text-gray-400">
              Select
            </label>
            <input
              type="datetime-local"
              name="End-Time"
              id="End-Time"
              className="ml-3 text-gray-300 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
        <div className="w-1/2 h-1/5">
          <div className="w-full h-1/2 text-3xl font-bold">Contest Security:</div>
          <div className="w-full h-[35%]">
            <Dropdown title={"Strict"} items={Security} onSelect={handleSecurity} clickable={false} />
          </div>
        </div>
        <div>
          <button
            onClick={() => handleQuestionChoose()}
            className="bg-purple-600 text-white border-2 border-purple-700 rounded-lg px-6 py-2 hover:bg-purple-500 hover:shadow-lg transition duration-300 font-medium"
            type="button"
          >
            Choose Question
          </button>
        </div>
      </div>
    </div>
  );
};
