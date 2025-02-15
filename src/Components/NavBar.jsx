import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../../url";
// import Cookies from 'js-cookie';
const NavBar = ({setlogin}) => {
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
    const handleLogout=async()=>{

        // console.log(document.cookie);
        // console.log(Cookies.get('sessionToken'));
        // Cookies.remove('sessionToken');
        // console.log(`logged out !!`);
        fetch(`${url}/logout`, {
            method: 'GET',
            credentials: 'include',
        })
        .then((res) => res.json())
        .then((response) => {
            if (response.status) {
                setIsLoggedIn(false);
                setlogin(false);
                // setIsLoggedIn(true); // User is logged in
            } else {
                // setIsLoggedIn(false); // User is not logged in
                alert(`error in logging out plz try again`);
            }
        })
        .catch((error) => {
            console.error('Error checking login status:', error);
        });
    }
    const choice = ["Practice", "LeaderBoard", "About", "ContactUs"];

    return (
        <div className="h-full min-h-16 w-screen flex items-center bg-inherit">
            <div className="w-screen h-full items-center flex md:justify-center">
                <div className="w-screen h-full items-center flex justify-between">
                    <Link to="/">
                        <img className="w-64 h-14 pl-5" src="https://folder.ddks.tech/logo.png" alt="Logo" />
                    </Link>

                    <div className="text-white h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>Practice</span></div>
                    <div className="text-white h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>Contact Us</span></div>
                    <div className="text-white h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span>About</span></div>
                    <div className="text-white h-14 items-center hidden sm:hidden md:flex cursor-pointer"><span><Link to="/userdashboard">User</Link></span></div>

                    {/* Conditionally render the "Login" button */}
                    {!isLoggedIn ?(
                        <div className="h-14 items-center rounded-md hidden sm:hidden md:flex cursor-pointer text-white">
                            <button onClick={handleNavigateLogin} className="flex bg-inherit border-solid border-2 border-sky-500 mr-5 gap-1 hover:bg-[#03F7EB] ">
                                <span>Log In</span>
                                <span className="w-5 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                                </span>
                            </button>
                        </div>
                    ):
                    (
                        <div className="h-14 items-center rounded-md hidden sm:hidden md:flex cursor-pointer text-white">
                            <button onClick={handleLogout} className="flex bg-inherit border-solid border-2 border-sky-500 mr-5 gap-1 hover:bg-[#03F7EB] ">
                                <span>Log Out</span>
                                <span className="w-5 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                                </span>
                            </button>
                        </div>
                    )
                    }
                </div>
                <Navigation choices={choice} IsOpen={handleClick} />
            </div>
        </div>
    );
}

export default NavBar;
