import React, { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import {url} from '../../../url'
import { dotPulse } from 'ldrs'
import ContestDetails from '../Contest-Expand/Contest-Details';
dotPulse.register()



const ManageContest = () => {
  const navigate=useNavigate();
  
  
  
  const {q} =useParams();
  const [newQuestion, setNewQuestion] = useState('');
  const [newModerator, setNewModerator] = useState('');
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [visibility, setVisibility] = useState();
  const [refresh,setRefresh]=useState(false);
  const [contestDetails,setContestDetails]=useState({contestName:"",contestStartDate:"",contestEndDate:"",contestModerator:[],contestAccess:"Private",contestQues:[]});
  const [loading,setLoading]=useState(true);
  const contestInfo = {
    name: contestDetails.contestName,
    startTime: contestDetails.contestStartDate,
    endTime: contestDetails.contestEndDate,
    moderators: contestDetails.contestModerator,
    visibility: contestDetails.contestAccess, // Default visibility status
    questions: contestDetails.contestQues,
  };
  const [questions, setQuestions] = useState(contestInfo.questions || contestInfo.questions);
      useEffect(()=>{
          fetch(`${url}/managecontest/${q}`, {
              method: 'GET',
              credentials: 'include',
          })
              .then((res) => res.json())
              .then((response) => {
                  if (response.status) {
                    console.log(response.data);
                      setContestDetails(response.data);
                      setStartTime(response.data.contestStartDate);
                      setEndTime(response.data.contestEndDate);
                      setVisibility(response.data.contestAccess);
                      setLoading(false);
                  } else {
                      console.log(`error in contest list.fetch`);
                  }
              })
              .catch((error) => {
                  console.error('Error checking login status:', error);
                  // navigate('/login');
              });
      },[refresh]);
  // Sample contest info (replace this with data from an API)
  // State to manage changes
  // Handle adding a new question
  const handleAddQuestion = () => {
    navigate(`/managecontest/${q}/createquestion`);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    let updateInfo={
      contestStartDate:startTime,
      contestEndDate:endTime,
      visibility
    }

    console.log(updateInfo);
    setLoading(true);
      fetch(`${url}/managecontest/${q}`, {
        method: 'POST',
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(updateInfo)
    })
        .then((res) => res.json())
        .then((response) => {
            if (response.status) {
              console.log(response.data);
                // setContestDetails(response.data);
                setRefresh(!refresh);
                setLoading(false);
                setContestDetails(response.data);
              } else {
                console.log(`error in contest list.fetch`);
              }
        })
        .catch((error) => {
            console.error('Error checking login status:', error);
            // navigate('/login');
        });


  }
  // Handle adding a new moderator
  const handleAddModerator = () => {
    if (newModerator.trim()) {
      setLoading(true);
      fetch(`${url}/managecontest/${q}/addmoderator`, {
        method: 'POST',
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({name:newModerator.trim()})
    })
        .then((res) => res.json())
        .then((response) => {
            if (response.status) {
              console.log(response.data);
                // setContestDetails(response.data);
                setRefresh(!refresh);
                setLoading(false);
              } else {
                console.log(`error in contest list.fetch`);
              }
            })
            .catch((error) => {
              console.error('Error checking login status:', error);
              // navigate('/login');
            });
    }
  };

  // Handle contest time changes
  const handleTimeChange = () => {
    if (new Date(startTime) < new Date(endTime)) {
      console.log('Updated start and end time:', startTime, endTime);
    } else {
      alert('Start time must be before end time');
    }
  };

  // Handle toggling visibility
  const toggleVisibility = () => {
    const newVisibility = visibility === 'Public' ? 'Private' : 'Public';
    setVisibility(newVisibility);
    console.log('Updated visibility:', newVisibility); // Replace this with backend update logic
  };

  // Mock function for selecting existing questions
  const handleSelectExistingQuestions = () => {
    alert('Feature to choose from existing questions is under development!');
  };

  return (
    <div className="p-6 space-y-6 bg-black min-h-screen text-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-100 border-b pb-4 border-gray-700">
        Manage Contest
      </h2>
      {/*loading effect !!!*/ }


      {loading ?  <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-500 flex items-center justify-center">
                <div className="text-gray-700 text-lg font-semibold">
                <l-dot-pulse size="43"   speed="1.3"  color="black"></l-dot-pulse>
                </div>
            </div>:
            <></>
            }





      {/* Contest Essentials */}
      <div className="space-y-2 bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Contest Details</h3>
        <p><span className="font-medium">Contest Name:</span> {contestDetails.contestName}</p>
        <p><span className="font-medium">Start Time:</span> {new Date(contestDetails.contestStartDate).toLocaleString()}</p>
        <p><span className="font-medium">End Time:</span> {new Date(contestDetails.contestEndDate).toLocaleString()}</p>
        <p><span className="font-medium">Moderators:</span> {contestDetails.contestModerator.join(', ')}</p>
        <p><span className="font-medium">Visibility:</span> {contestDetails.contestAccess}</p>
      </div>

      {/* Editable Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 rounded-lg shadow-md space-y-4"
      >
        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Edit Contest Details</h3>

        {/* Questions Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Manage Questions</h3>
          <div className="space-y-3">
            <ul className="space-y-2">
              {contestDetails.contestQues.map((question, index) => (
                <li key={index} className="text-sm bg-gray-900 p-2 rounded-md">
                  {index + 1}. {question.quesTitle}
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Enter new question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="p-2 w-full bg-gray-900 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500"
            />
            <div className="flex space-x-4">
              <button
                onClick={handleAddQuestion}
                type="button"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow"
              >
                Create New Question
              </button>
              <button
                onClick={handleSelectExistingQuestions}
                type="button"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow"
              >
                Choose from Existing
              </button>
            </div>
          </div>
        </div>
        {/* Time Inputs */}
        <div>
          <label className="block text-sm font-medium mb-1">Start Time</label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="p-2 w-full bg-gray-900 border border-gray-700 rounded-md text-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End Time</label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="p-2 w-full bg-gray-900 border border-gray-700 rounded-md text-gray-300"
          />
        </div>


        {/* Visibility Toggle */}
        <div className="mt-4">
          <button
            type="button"
            onClick={toggleVisibility}
            className={`px-4 py-2 rounded-md shadow text-white ${
              visibility === 'Public' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            Set as {visibility === 'Public' ? 'Private' : 'Public'}
          </button>
        </div>


        {/* Save Changes */}
        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow w-full"
        >
          Save Changes
        </button>
      </form>
        {/* Add New Moderator */}
        <div>
          <label className="block text-sm font-medium mb-1">Add Moderator</label>
          <input
            type="email"
            placeholder="Enter moderator email"
            value={newModerator}
            onChange={(e) => setNewModerator(e.target.value)}
            className="p-2 w-full bg-gray-900 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500"
          />
          <button
            onClick={handleAddModerator}
            className="mt-3 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md shadow"
          >
            Add Moderator
          </button>
        </div>
    </div>
  );
};

export default ManageContest;
