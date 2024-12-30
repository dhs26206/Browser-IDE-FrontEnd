import { useEffect, useState } from "react";
import { ContestForm } from "./ContestForm";
import ContestNavBar from "./ContestNavBar";
import { Navigate } from "./Dashboard-Navigate";
import { CombinedComponent } from "./CombinedComponent";
import { useNavigate } from "react-router-dom";
import { url } from "../../../url";

function CreateContest() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(true);

    useEffect(() => {
        fetch(`${url}/checklogin`, {
            method: 'GET',
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.login) {
                    setIsLoggedIn(true);
                } else {
                    navigate('/login');
                }
            })
            .catch((error) => {
                console.error('Error checking login status:', error);
                navigate('/login');
            });
    }, []);

    const [state, setState] = useState("manage");
    const handleState = (e) => {
        setState(e);
    };

    return (
        <div className="w-full h-full bg-[#131216]">
            {/* Navbar */}
            <div className="w-full h-[15%]">
                <ContestNavBar />
            </div>

            {/* Main Content */}
            <div className="flex w-full h-[85%]">
                {/* Navigation Panel */}
                {isNavOpen && (
                    <div className="w-1/5 h-full transition-all duration-300">
                        <Navigate toggleState={handleState} />
                    </div>
                )}

                {/* Resizable Combined Component */}
                <div className={`h-full transition-all duration-300 ${isNavOpen ? "w-4/5" : "w-full"}`}>
                    
                    <CombinedComponent state={state} setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
                </div>
            </div>
        </div>
    );
}

export default CreateContest;
