import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../../url";

const NavBar = () => {
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is already logged in
        fetch(`${url}/checklogin`, {
            method: 'GET',
            credentials: 'include',
        })
        .then((res) => res.json())
        .then((response) => {
            if (response.login) {
                setIsLoggedIn(true); // User is logged in
            } else {
                setIsLoggedIn(false); // User is not logged in
            }
        })
        .catch((error) => {
            console.error('Error checking login status:', error);
        });
    }, []);

    const handleClick = () => {
        setClick((prev) => !prev);
    };

    const handleNavigateLogin = () => {
        navigate('/login');
    };

    const choice = ["Practice", "LeaderBoard", "About", "ContactUs"];

    return (
        <div className="h-full min-h-16 w-screen flex items-center bg-inherit">
            <div className="w-screen h-full items-center flex md:justify-center">
                <div className="w-screen h-full items-center flex justify-between">
                    <Link to="/">
                        <img className="w-64 h-14 pl-5" src="https://folder.ddks.live/logo.png" alt="Logo" />
                    </Link>

                    <div className="text-white h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>Practice</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>
                    <div className="text-white h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>LeaderBoard</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>
                    <div className="text-white h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>About</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>
                    <div className="text-white h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>ContactUs</span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></div>

                    {/* Conditionally render the "Login" button */}
                    {!isLoggedIn && (
                        <div className="h-14 items-center rounded-md hidden sm:hidden md:flex cursor-pointer text-white">
                            <button onClick={handleNavigateLogin} className="flex bg-inherit border-solid border-2 border-sky-500 mr-5 gap-1 hover:bg-[#03F7EB] ">
                                <span>Log In</span>
                                <span className="w-5 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                                </span>
                            </button>
                        </div>
                    )}
                </div>
                <Navigation choices={choice} IsOpen={handleClick} />
            </div>
        </div>
    );
}

export default NavBar;
