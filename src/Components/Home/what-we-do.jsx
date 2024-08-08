

function Whatwedo(){
    return(
        <div className="w-full h-full">
            <div className="flex flex-wrap items-center justify-center w-full h-full">
                <div className="w-full md:w-1/2 text-white  pl-5">
                <div className="text-4xl md:text-8xl pl-2 md:pl-5  flex md:items-center h-[25%]" ><span>What we Do ?</span></div>
                <div className=" md:text-2xl text-justify md:pr-0 pr-5">We provide nerds the platform to contest and Learn !!  The thing which differentiates from other platform is its Flexibility in making contest , You Either make questions aur Pick from our catalog and tell us your test cases and driver code then, see the contest Happen ! </div>
                 </div>

                <div className="w-full md:w-1/2  text-pink-900 flex items-center justify-center">
                <img className="w-[80%] h-[80%]" src="https://cdn.ddks.live/cdn/banda2.png"  alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Whatwedo;