import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'; 
import giphy from './giphy.webp'
function Signup() {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="bg-grey-lighter min-h-screen w-screen flex flex-col bg-opacity-10 backdrop-blur-md bg-cover bg-no-repeat" style={{ backgroundImage: `url(${giphy})` }}>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white bg-opacity-10 backdrop-blur-md px-6 py-8 rounded shadow-md text-white w-full">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://cdn.ddks.live/cdn/logo.png"
                        alt="Your Company"
                    />
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
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
                <div className="text-grey-dark mt-6">
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

