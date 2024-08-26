import React from 'react';
import DoughnutChart from './bar';

function QuestionsSolved() {
    return (
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <h3 className="text-lg font-bold mb-4">Questions Solved</h3>
    <ul>
        <li className="flex justify-between text-slate-300 ">
            <span>Easy:</span> <span>50</span>
        </li>
        <li className="flex justify-between text-slate-400">
            <span>Medium:</span> <span>30</span>
        </li>
        <li className="flex justify-between text-slate-500">
            <span>Hard:</span> <span>20</span>
        </li>
        <div className="bg-transparent">
            <DoughnutChart/>
        </div>
    </ul>
</div>

    );
}

export default QuestionsSolved;
