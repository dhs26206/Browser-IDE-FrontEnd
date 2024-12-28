import React from 'react';

function ProfileCard({name,email,bio}) {

    return (
        <div className="bg-white bg-opacity-5  backdrop-blur-sm  rounded-lg p-6 transition duration-200 hover:scale-105">
            <div className="flex items-center">
                <img className="h-16 w-16 rounded-full" src="https://folder.ddks.tech/team-img2.png" alt="User Profile" />
                <div className="ml-4">
                    <h2 className="text-xl font-bold">{name ? name : "YOUR NAME"}</h2>
                    <p className="text-gray-600">{email ? email : "youemail.com"}</p>
                    <p className="text-gray-600">{bio ? bio :"Your BIO "}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
