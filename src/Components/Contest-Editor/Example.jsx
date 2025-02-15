

const Example=(data)=>{
    return(
        <div className="flex items-center w-full justify-center p-6">
            <div className="text-white rounded-lg bg-blue-700 p-5 w-[90%]">
                <div>Input : <span>{data.testIp}</span></div>
                <div>Output : <span>{data.testOp}</span></div>
                <div>{ data.description} </div>
            </div>
        </div>
    )
}

export default Example;