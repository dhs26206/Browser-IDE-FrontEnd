import React from 'react';
import BarChart from './rankingchart';
function Rank() {
    return (
        <div className="bg-white bg-opacity-5  backdrop-blur-sm  rounded-lg p-6 hover:bg-gradient-to-r from-gray-900 via-gray-800 to-black">
            <h3 className="text-lg font-bold mb-4">Rank</h3>
            <ul>
                <li className="flex justify-between text-slate-300">
                    <span>Rank in Branch:</span> <span>5</span>
                </li>
                <li className="flex justify-between text-slate-600">
                    <span>Rank in College:</span> <span>10</span>
                </li>
                <BarChart/>
            </ul>
        </div>
    );
}

export default Rank;
