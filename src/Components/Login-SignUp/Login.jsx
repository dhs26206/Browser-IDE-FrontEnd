import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'; 
import giphy from './giphy.webp'
import {url} from '../../../url'
import ParticlesComponent from '../Home/nuro';
function Log() {
    const [formData,setFormData]=useState({username:"",password:""});
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`${url}/checklogin`,{
            method:`GET`,
            credentials:"include"
        }).then(res=> res.json()).then(response =>{
            if(response.login)
            {
                alert(`already loged in!!`);
                navigate('/');
            }
        })
    },[]);
    const handleSignupRedirect = () => {
        navigate('/signup');
    };
    const handleChange=(e)=>{
        //console.log(`hi`);
        const {name,value}=e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
          }));
          //console.log(formData);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        fetch(`http://localhost:3000/login`,{
            body:JSON.stringify(formData),
            method:`POST`,
            credentials:"include",
            headers:{"Content-Type":"application/json"}
        }).then(res=> res.json()).then(response =>{
            console.log(response)
            if(response.status)
            {
                navigate('/');
            }
            else{
                alert(`incorrect username or password`);
            }
        })
    }
    return (
        <div className='h-screen w-screen flex justify-center items-center bg-no-repeat bg-cover ' >
            <ParticlesComponent/>
            <div className=''>
            <div className="flex  justify-center px-6 py-12 lg:px-8 bg-white bg-opacity-10 backdrop-blur-md self-center my-36">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-12 w-auto"
                                src="https://cdn.ddks.live/cdn/logo.png"
                                alt="Your Company"
                            />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="/submit-form" method="POST">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-white"
                                    >
                                        User Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={formData.username} onChange={handleChange}
                                            id="username"
                                            name="username"
                                            type="username"
                                            autoComplete="username"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium leading-6 text-white"
                                        >
                                            Password
                                        </label>
                                        <div className="text-sm">
                                            <a
                                                href="https://example.com/forgot-password"
                                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            value={formData.password} onChange={handleChange}
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={handleSubmit}
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Not a member?
                                <button
                                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                                    onClick={handleSignupRedirect}
                                >
                                    Join Now!!
                                </button>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Log;
