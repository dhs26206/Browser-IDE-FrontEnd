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
                            <img className={`w-64 h-14 pl-5`} src="https://folder.ddks.tech/logo.png" alt="Logo" />
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
                                        className="block w-full rounded-md border-0 py-1.5 px-3 bg-black text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-left"

                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm  font-medium leading-6 text-white">
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
                                        className="block w-full rounded-md border-0 py-1.5 px-3 bg-black text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-left"/>
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-3'>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                                <div onClick={()=>handleGithub()}  className="w-full bg-black p-2 rounded-lg text-slate-600 flex gap-2 justify-center items-center cursor-pointer hover:bg-slate-800">
                                    SignIn With Github
                                    
                                     <span className='h-6  overflow-hidden'><svg className='h-full w-auto' viewBox="0 0 102 102" xmlns="http://www.w3.org/2000/svg"><path   d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg></span>
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
