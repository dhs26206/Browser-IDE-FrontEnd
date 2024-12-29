import React from 'react';
import DoughnutChart from './bar';

function QuestionsSolved({quesDetail}) {
    return (
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 hover:bg-gradient-to-r from-gray-900 via-gray-800 to-black">
    <h3 className="text-lg font-bold mb-4">Questions Solved</h3>
    <ul>
        <li className="flex justify-between text-slate-300 ">
            <span>Easy:</span> <span>{quesDetail.easy ? quesDetail.easy :0}</span>
        </li>
        <li className="flex justify-between text-slate-400">
            <span>Medium:</span> <span>{quesDetail.medium ? quesDetail.medium :0}</span>
        </li>
        <li className="flex justify-between text-slate-500">
            <span>Hard:</span> <span>{quesDetail.hard ? quesDetail.hard :0}</span>
        </li>
        <div className="bg-transparent">
            <DoughnutChart/>
        </div>
    </ul>
</div>

    );
}

export default QuestionsSolved;
