

export const SubmitCompile=()=>{
    return(
        <div className="h-full w-full flex justify-end bg-teal-950">
            <div className="h-full w-1/3 flex justify-evenly items-center">
                <div className="w-1/2 h-5/6 bg-gray-700 rounded-md text-sm">
                    <button className="w-full h-full cursor-pointer" type="button">Compile&Run</button>
                </div>
                <div className="w-1/3 h-5/6 bg-green-700 rounded-md">
                    <button className="w-full h-full cursor-pointer" type="button">Submit</button>
                </div>
            </div>
        </div>
    )
}