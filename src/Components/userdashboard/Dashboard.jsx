import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import QuestionsSolved from './QuestionsSolved';
import Rank from './Rank';
import ParticlesComponent from '../Home/nuro';
import Ranki from './Month';
import NavBar from '../NavBar';
import Cookie from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import{ url} from '../../../url'
import { dotPulse } from 'ldrs'



// Default values shown




// Default values shown

function Dashboard() {
    dotPulse.register()
    const [login,setLogin]=useState(false);
    const [userInfo,setUserInfo]=useState({email:"",name:"",bio:"",questionDetail:{easy:0,medium:0,hard:0}});
    useEffect(()=>{
        fetch(`${url}/checklogin`, {
                    method: 'GET',
                    credentials: 'include',
                })
                .then((res) => res.json())
                .then((response) => {
                    if (response.login) {
                        setLogin(true);
                    } else {
                        navigate('/login');
                    }
                })
                .catch((error) => {
                    console.error('Error checking login status:', error);
                }); 
        // setTimeout(()=>{
        //     setLogin(true);
        // },5000)
        fetch(`${url}/userinfo`,{
            method:'GET',
            credentials:'include',
        }).then(res=>{
            return res.json();
        }).then(res =>{
            console.log(res);
            setUserInfo(res.userInfo);
        }).catch(err=>{
            console.error(err);
        });
    },[]);
    const navigate=useNavigate();
    const handleLogout=()=>{
        Cookie.remove('sessionToken');
        setLogin(false);
        navigate('/');
    };
    const handledeleteUser=()=>{
        fetch(`${url}/deleteuser`,{
            method:'GET',
            credentials:'include',
        }).then(res=>{
            return res.json();
        }).then(res =>{
            if(res.status)
            {
                setLogin(false);
                setUserInfo({});
                navigate('/');
            }
        }).catch(err=>{
            console.error(err);
        });
    };






    return (
        <div className="relative min-h-screen bg-transparent">
        {/* Blur and Loading Overlay */}
        {!login && (
            <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-500 flex items-center justify-center">
                <div className="text-gray-700 text-lg font-semibold">
                <l-dot-pulse size="43"   speed="1.3"  color="black"></l-dot-pulse>
                </div>
            </div>
        )}

        {/* NavBar */}
        <div className="w-full fixed top-0 z-50 bg-transparent">
            <NavBar />
        </div>

        {/* ParticlesComponent */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <ParticlesComponent />
        </div>

        {/* Header */}
        <header className="relative bg-transparent z-10 pt-16">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <button onClick={handleLogout} className="text-red-500 hover:text-red-700">
                    Logout
                </button>
            </div>
        </header>
       

        {/* Main Content */}
        <main className="relative py-10 z-10">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Profile Overview */}
                    <div className="col-span-1">
                        <ProfileCard email={userInfo.email} bio={userInfo.bio} name={userInfo.name} />
                    </div>

                    {/* Other Components */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Questions Solved */}
                            <QuestionsSolved quesDetail={userInfo.questionDetail} />

                            {/* Rank in Branch and College */}
                            <Rank />
                            <Ranki />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <header className="relative bg-transparent z-10 pt-16">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <button onClick={handledeleteUser} className="text-red-500 hover:text-red-700">
                    Delete Account 
                </button>
            </div>
        </header>
    </div>
    );
}

export default Dashboard;


