import React, { useState } from 'react';

const ManageContest = () => {
  // Sample contest info (replace this with data from an API)
  const contestInfo = {
    name: 'CodeRush 2024',
    startTime: '2024-12-31T10:00:00',
    endTime: '2024-12-31T12:00:00',
    moderators: ['john@example.com', 'jane@example.com'],
    visibility: 'Private', // Default visibility status
    questions: ['What is 2 + 2?', 'Explain polymorphism in OOP.'],
  };

  // State to manage changes
  const [questions, setQuestions] = useState(contestInfo.questions || []);
  const [newQuestion, setNewQuestion] = useState('');
  const [newModerator, setNewModerator] = useState('');
  const [startTime, setStartTime] = useState(contestInfo.startTime);
  const [endTime, setEndTime] = useState(contestInfo.endTime);
  const [visibility, setVisibility] = useState(contestInfo.visibility);

  // Handle adding a new question
  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion]);
      setNewQuestion('');
    }
  };

  // Handle adding a new moderator
  const handleAddModerator = () => {
    if (newModerator.trim()) {
      contestInfo.moderators.push(newModerator); // Replace this with backend update logic
      setNewModerator('');
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

      {/* Contest Essentials */}
      <div className="space-y-2 bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Contest Details</h3>
        <p><span className="font-medium">Contest Name:</span> {contestInfo.name}</p>
        <p><span className="font-medium">Start Time:</span> {new Date(contestInfo.startTime).toLocaleString()}</p>
        <p><span className="font-medium">End Time:</span> {new Date(contestInfo.endTime).toLocaleString()}</p>
        <p><span className="font-medium">Moderators:</span> {contestInfo.moderators.join(', ')}</p>
        <p><span className="font-medium">Visibility:</span> {visibility}</p>
      </div>

      {/* Editable Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleTimeChange();
        }}
        className="bg-gray-800 p-4 rounded-lg shadow-md space-y-4"
      >
        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Edit Contest Details</h3>

        {/* Questions Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Manage Questions</h3>
          <div className="space-y-3">
            <ul className="space-y-2">
              {questions.map((question, index) => (
                <li key={index} className="text-sm bg-gray-900 p-2 rounded-md">
                  {index + 1}. {question}
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
