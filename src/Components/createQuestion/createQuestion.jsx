import React, { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {url} from '../../../url'
const CreateQuestion = () => {
  const navigate=useNavigate();
  const {q}=useParams();
  const contestId=q;
  // console.log(q);
  const [formData, setFormData] = useState({
    quesTitle: '',
    quesText: '',
    difficulty: 'Easy',
    description: '',
    score: 0,
    testIp: '',
    testOp: '',
    inputFormat: '',
    outputFormat: '',
    correctCode: '',
    contestId
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
    if (
      !formData.quesTitle ||
      !formData.quesText ||
      !formData.difficulty ||
      !formData.description ||
      !formData.score ||
      !formData.inputFormat ||
      !formData.outputFormat ||
      !formData.correctCode || 
      !formData.testIp ||
      !formData.testOp 
    ) {
      setMessage('Please fill in all required fields.');
      return;
    }

    try {
        console.log(`send`)
      const response = await fetch(`${url}/createquestion`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      console.log(`fetch request done`);
      if (response.ok) {
        setMessage('Question created successfully!');
        // setFormData({
        //   quesTitle: '',
        //   quesText: '',
        //   difficulty: 'Easy',
        //   description: '',
        //   score: 0,
        //   testIp: '',
        //   testOp: '',
        //   inputFormat: '',
        //   outputFormat: '',
        //   correctCode: '',
        // });
        navigate(`/managecontest/${contestId}`);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Failed to create question.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-blue-400 mb-8 animate-bounce">
          Create a New Question
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Question Title */}
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <label className="block text-sm font-medium mb-1">Question Title</label>
            <input
              type="text"
              name="quesTitle"
              value={formData.quesTitle}
              onChange={handleChange}
              placeholder="Enter question title"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-300"
              required
            />
          </div>

          {/* Question Text */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <label className="block text-sm font-medium mb-1">Question Text</label>
            <textarea
              name="quesText"
              value={formData.quesText}
              onChange={handleChange}
              placeholder="Enter question text"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-300"
              required
            ></textarea>
          </div>

          {/* Difficulty */}
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <label className="block text-sm font-medium mb-1">Difficulty</label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-300"
              required
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Description */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-300"
              required
            ></textarea>
          </div>

          {/* Score */}
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <label className="block text-sm font-medium mb-1">Score</label>
            <input
              type="number"
              name="score"
              value={formData.score}
              onChange={handleChange}
              placeholder="Enter score"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-300"
              required
            />
          </div>

          {/* Input Format */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <label className="block text-sm font-medium mb-1">Input Format</label>
            <textarea
              name="inputFormat"
              value={formData.inputFormat}
              onChange={handleChange}
              placeholder="Describe the input format"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-300"
              required
            ></textarea>
          </div>

          {/* Output Format */}
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <label className="block text-sm font-medium mb-1">Output Format</label>
            <textarea
              name="outputFormat"
              value={formData.outputFormat}
              onChange={handleChange}
              placeholder="Describe the output format"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-300"
              required
            ></textarea>
          </div>

          {/* Correct Code */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 col-span-2">
            <label className="block text-sm font-medium mb-1">Correct Code</label>
            <textarea
              name="correctCode"
              value={formData.correctCode}
              onChange={handleChange}
              placeholder="Enter the correct solution code"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-300"
              required
            ></textarea>
          </div>

          {/* Test Input */}
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <label className="block text-sm font-medium mb-1">Test Input </label>
            <textarea
              name="testIp"
              value={formData.testIp}
              onChange={handleChange}
              placeholder="Enter test input"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-300"
            ></textarea>
          </div>

          {/* Test Output */}
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <label className="block text-sm font-medium mb-1">Test Output</label>
            <textarea
              name="testOp"
              value={formData.testOp}
              onChange={handleChange}
              placeholder="Enter test output"
              className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-gray-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="w-1/2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white py-3 rounded-lg shadow-lg transform hover:scale-110"
            >
              Create Question
            </button>
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-sm mt-4 col-span-2">
              {message.includes('successfully') ? (
                <span className="text-green-400">{message}</span>
              ) : (
                <span className="text-red-400">{message}</span>
              )}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateQuestion;
