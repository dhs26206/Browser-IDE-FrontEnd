import React, { useState } from "react";
import {Dropdown} from "./DropDown"; // Assuming Dropdown is a custom component
import {url} from "../../../url"
export const ContestForm = () => {
  const [contestName, setContestName] = useState("");
  const [contestType, setContestType] = useState("Public");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [securityLevel, setSecurityLevel] = useState("Strict");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contestData = {
      contestName:contestName,
      contestAccess:contestType,
      contestStartDate:startTime,
      contestEndDate:endTime,
    };
    fetch(`${url}/createcontest`, {
                        method: 'POST',
                        credentials: 'include',
                        headers: { "Content-Type": "application/json" },
                        body:JSON.stringify(contestData)
                    })
                    .then((res) => res.json())
                    .then((response) => {
                        if (response.status) {
                            alert(`contest created!! please go to manage section`);
                        } else {
                            alert(`some error occured and the form could not be creadted plz resubmit`);
                        }
                    })
                    .catch((error) => {
                        console.error('Error checking login status:', error);
                        alert(`some error occured and the form could not be creadted plz resubmit`);
                    }); 
    console.log("Contest Created:", contestData);
    // Add logic to handle the form submission
  };

  return (
    <div className="px-8 py-10 h-full w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans overflow-scroll">
      <h1 className="text-4xl font-extrabold tracking-wide mb-10 text-center text-purple-400">Create Contest</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
        {/* Contest Name */}
        <div>
          <label htmlFor="contestName" className="block text-xl font-semibold mb-2 text-purple-300">
            Contest Name:
          </label>
          <input
            id="contestName"
            type="text"
            placeholder="Enter Contest Name"
            value={contestName}
            onChange={(e) => setContestName(e.target.value)}
            className="w-full px-4 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500"
          />
        </div>

        {/* Contest Type */}
        <div>
          <label htmlFor="contestType" className="block text-xl font-semibold mb-2 text-purple-300">
            Contest Type (Public/Private):
          </label>
          <Dropdown
            title={contestType}
            items={["Public", "Private"]}
            onSelect={setContestType}
            clickable={false}
          />
        </div>

        {/* Contest Start Timings */}
        <div>
          <label htmlFor="startTime" className="block text-xl font-semibold mb-2 text-purple-300">
            Contest Start Timings:
          </label>
          <input
            id="startTime"
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full px-4 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Contest End Timings */}
        <div>
          <label htmlFor="endTime" className="block text-xl font-semibold mb-2 text-purple-300">
            Contest End Timings:
          </label>
          <input
            id="endTime"
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full px-4 py-2 text-gray-300 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Contest Security */}
        <div>
          <label htmlFor="securityLevel" className="block text-xl font-semibold mb-2 text-purple-300">
            Contest Security:
          </label>
          <Dropdown
            title={securityLevel}
            items={["Strict", "Moderate", "Lenient"]}
            onSelect={setSecurityLevel}
            clickable={false}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white border border-purple-700 rounded-md px-6 py-3 hover:bg-purple-500 hover:shadow-lg transition duration-300 font-medium text-lg"
          >
            Create Contest
          </button>
        </div>
      </form>
    </div>
  );
};

// export default CreateContestForm;
