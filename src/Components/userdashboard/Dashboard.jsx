import React from 'react';
import ProfileCard from './ProfileCard';
import QuestionsSolved from './QuestionsSolved';
import Rank from './Rank';
import ParticlesComponent from '../Home/nuro';
import Ranki from './Month';
import NavBar from '../NavBar';

function Dashboard() {
    return (
        <div className="relative min-h-screen bg-transparent">
            {/* NavBar */}
            <div className="w-full fixed top-0 z-50 bg-transparent">
                <NavBar />
            </div>

            {/* ParticlesComponent */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <ParticlesComponent />
            </div>

            {/* Header */}
            <header className="relative bg-transparent z-10 pt-16"> {/* Added padding-top to avoid overlap */}
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    
                    <button className="text-red-500 hover:text-red-700">Logout</button>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative py-10 z-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Profile Overview */}
                        <div className="col-span-1">
                            <ProfileCard />
                        </div>

                        {/* Other Components */}
                        <div className="col-span-2 md:col-span-2 lg:col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Questions Solved */}
                                <QuestionsSolved />

                                {/* Rank in Branch and College */}
                                <Rank />
                                <Ranki />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;


