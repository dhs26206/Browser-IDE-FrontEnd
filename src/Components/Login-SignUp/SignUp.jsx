import React, { useCallback, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Add Link here
import logo from './logo.png'; 
import giphy from './giphy.webp';
import { url } from '../../../url';
import ParticlesComponent from '../Home/nuro';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "", email: "" ,name:""});

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))},[setFormData]);
    
    const handleGithub= (()=>{
        
        const clientID = 'Ov23liRrBdzWSwEQIauD'; 
        const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=repo,user`
        window.location.href=githubAuthUrl;
    })

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(formData);
        fetch(`${url}/signup`, {
            body: JSON.stringify(formData),
            method: `POST`,
            credentials: "include",
            headers: { "Content-Type": "application/json" }
        }).then(res => res.json()).then(response => {
            console.log(response);
            if (response.status) {
                navigate('/');
            } else {
                alert(`username is present !!!`);
            }
        });
    }

    const handleCheck = () => {
        fetch(`${url}/checklogin`, {
            method: `GET`,
            credentials: "include"
        }).then(res => res.json()).then(response => { console.log(response) });
    }

    return (
        <div className="bg-grey-lighter min-h-screen w-screen flex flex-col bg-opacity-10 backdrop-blur-md bg-cover bg-no-repeat" style={{ backgroundImage: `url(${giphy})` }}>
            <ParticlesComponent />
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white bg-opacity-10 backdrop-blur-md px-6 py-8 rounded shadow-md text-white w-full">
                <Link to="/">
               <img className={`w-64 h-14 pl-5`} src="https://folder.ddks.live/logo.png" alt="Logo" />
            </Link>

                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 "
                        name="name"
                        placeholder="Full Name" 
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 "
                        name="username"
                        placeholder="Username" 
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" 
                    />
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={handleSubmit}
                    >Create Account</button>
                    <div onClick={()=>handleGithub()}  className="w-full bg-black p-2 rounded-lg text-slate-600 flex gap-2 justify-center cursor-pointer hover:bg-slate-800">
                             SignUp With Github
                             <span className='h-6  overflow-hidden'><svg className='h-full w-auto' viewBox="0 0 102 102" xmlns="http://www.w3.org/2000/svg"><path   d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg></span>
                            </div>
                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="https://images.pexels.com/photos/21300485/pexels-photo-21300485.jpeg?cs=srgb&dl=pexels-ravi-roshan-2875998-21300485.jpg&fm=jpg&w=4000&h=6000" target='__blank'>
                        <br/> Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="https://images.pexels.com/photos/3119977/pexels-photo-3119977.jpeg?cs=srgb&dl=pexels-kelly-1179532-3119977.jpg&fm=jpg&w=5760&h=3840" target='__blank'>
                        &nbsp; Privacy Policy
                        </a>.
                    </div>
                </div>
                <div className="text-grey-dark mt-6 z-10">
                    Already have an account? 
                    <button
                        className="no-underline border-b border-blue text-blue"
                        onClick={handleLoginRedirect}
                    >
                        &nbsp;Log in
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;


