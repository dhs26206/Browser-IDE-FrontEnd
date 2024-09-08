import React, { useCallback, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Add Link here
import logo from './logo.png'; 
import giphy from './giphy.webp';
import { url } from '../../../url';
import ParticlesComponent from '../Home/nuro';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "", email: "" });

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }
    const handleGithub= useCallback(()=>{
        
        const clientID = 'Ov23liRrBdzWSwEQIauD'; 
        const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=repo,user`
        window.location.href(githubAuthUrl);
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
                        name="username"
                        placeholder="Full Name" 
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
                            <img className='w-4 h-4' src="https://folder.ddks.live/downloadgithub.png" alt="logo" />
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


