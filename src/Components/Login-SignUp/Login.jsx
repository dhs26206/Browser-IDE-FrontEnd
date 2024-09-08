import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from './logo.png';
import giphy from './giphy.webp';
import { url } from '../../../url';
import ParticlesComponent from '../Home/nuro';

function Log() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${url}/checklogin`, {
            method: `GET`,
            credentials: "include",
        })
        .then((res) => res.json())
        .then((response) => {
            if (response.login) {
                alert(`already logged in!!`);
                navigate('/');
            }
        });
    }, [navigate]);

    const handleSignupRedirect = useCallback(() => {
        navigate('/signup');
    }, [navigate]);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }, []);
    const handleGithub= useCallback(()=>{
        
        const clientID = 'Ov23liRrBdzWSwEQIauD'; 
        const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=repo,user`
        window.location.href=githubAuthUrl;
    })
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        fetch(`${url}/login`, {
            body: JSON.stringify(formData),
            method: `POST`,
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((response) => {
            if (response.status) {
                navigate('/');
            } else {
                alert(`Incorrect username or password`);
            }
        });
    }, [formData, navigate]);

    return (
        <div className='h-screen w-screen flex justify-center items-center bg-no-repeat bg-cover relative'>
            <ParticlesComponent /> {/* Background particles */}
            <div className='z-10 relative'> {/* Form container with higher z-index */}
                <div className="flex justify-center px-6 py-12 lg:px-8 bg-white bg-opacity-10 backdrop-blur-md self-center my-36">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <Link to="/">
                            <img className={`w-64 h-14 pl-5`} src="https://folder.ddks.live/logo.png" alt="Logo" />
                        </Link>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                            Sign in to your account
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-white"
                                >
                                    User Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={formData.username}
                                        onChange={handleChange}
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-left"

                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-white"
                                >
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={formData.password}
                                        onChange={handleChange}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-left"

                                    />
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-3'>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                                <div onClick={()=>handleGithub()}  className="w-full bg-black p-2 rounded-lg text-slate-600 flex gap-2 justify-center cursor-pointer hover:bg-slate-800">
                                    SignIn With Github
                                    <img className='w-4 h-4' src="https://folder.ddks.live/downloadgithub.png" alt="logo" />
                                </div>
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
