

function Contribute() {
    const repo = () => {
        window.location.href = "https://aws1.ddks.live";
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full text-center mb-8">
                <div className="text-2xl md:text-5xl">
                    Ever Seen This Cat Before?
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center">
                <div className="md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
                    <div className="flex justify-center items-center" style={{ backgroundColor: "white", borderRadius: "50%" }}>
                        <img 
                            onClick={repo} 
                            className="cursor-pointer w-48 h-48 rounded-full object-cover" 
                            src="https://cdn.ddks.live/cdn/githublogov2.png"  
                            alt="Repo" 
                        />
                    </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                    <div className="font-bold text-3xl">
                        Well! That's Great
                    </div>
                    <div className="font-bold text-2xl">
                        You Can Contribute,
                    </div>
                    <div className="font-semibold">
                        Just Click the Cat and She will show you the Way* !!
                    </div>
                    <div className="w-full mt-4 font-thin text-xs">
                        *By Clicking the Icon, You agree to the Terms and Conditions of github.com and its Privacy Policy. <br />
                        Note: If the link is not accessible, Kindly Contact Us using any of the References Below.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contribute;
