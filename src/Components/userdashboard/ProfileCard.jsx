import React from 'react';

function ProfileCard() {
    return (
        <div className="bg-white bg-opacity-5  backdrop-blur-sm  rounded-lg p-6 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-5000">
            <div className="flex items-center">
                <img className="h-16 w-16 rounded-full" src="https://folder.ddks.live/cdn/team-img2.png" alt="User Profile" />
                <div className="ml-4">
                    <h2 className="text-xl font-bold">John Doe</h2>
                    <p className="text-gray-600">john.doe@example.com</p>
                    <p className="text-gray-600">Short Bio</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
