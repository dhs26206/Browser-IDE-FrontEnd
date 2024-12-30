import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import manage from "./../../JSON/ManageContest.json";
import { newtonsCradle } from 'ldrs'
import {url} from "../../../url"
newtonsCradle.register()
// Default values shown

const convertTime = (timeString) => {
  const timestamp = parseInt(timeString, 10);
  const date = new Date(timestamp);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
};

export const ManageContest = () => {
  const navigate=useNavigate();
  // const {q} =useParams();
    const [contestList,setContestList]=useState([]);
    useEffect(()=>{
        fetch(`${url}/managecontest`, {
            method: 'GET',
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.status) {
                    setContestList(response.data);
                } else {
                    console.log(`error in contest list.fetch`);
                }
            })
            .catch((error) => {
                console.error('Error checking login status:', error);
                // navigate('/login');
            });
    },[]);



  const [expand, setExpand] = useState(-1);
  // const handleEditButton=()=>{
  //   navigate(`/managecontest/${}`)
  // }
  const handleExpand = (index) => {
    setExpand(expand === index ? -1 : index);
  };

  return (
    <div className="px-8 py-10 h-full w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <h1 className="text-4xl font-extrabold tracking-wide mb-10 text-center text-blue-400">Manage Contests</h1>
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 space-y-4 overflow-y-auto h-[70vh]">
        {contestList.length!==0 ? contestList.map((contest, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-blue-500 transition duration-300"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-blue-300">
                {contest.contestName}
              </h2>
              <button
                onClick={() => handleExpand(index)}
                className={`px-4 py-2 rounded-md text-white font-medium transition duration-300 ${
                  expand === index
                    ? "bg-red-600 hover:bg-red-500"
                    : "bg-yellow-500 hover:bg-yellow-400"
                }`}
              >
                {expand === index ? "Close" : "View Details"}
              </button>
            </div>
            {expand === index && (
              <div className="mt-4 bg-gray-800 p-4 rounded-md border-t border-blue-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p className="text-gray-400">
                    <span className="font-bold text-gray-200">Contest ID:</span> {contest.contestId}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-bold text-gray-200">Problems:</span> {contest.contestQues.length}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-bold text-gray-200">Start Time:</span> {convertTime(contest.contestStartDate)}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-bold text-gray-200">End Time:</span> {convertTime(contest.contestEndDate)}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-bold text-gray-200">Type:</span> {contest.contestAccess}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-bold text-gray-200">Security:</span> {"God - level"}
                  </p>
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <button onClick={()=>{(navigate(`/managecontest/${contest.contestId}`))}} className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-md font-medium">
                    Edit Details
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium">
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        )): 
        <>
        <div className="flex justify-center items-center">
        <l-newtons-cradle size="100" speed="1.4" color="white" ></l-newtons-cradle>

        </div>
        </>}
      </div>
    </div>
  );
};

export default ManageContest;
