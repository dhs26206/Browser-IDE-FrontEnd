import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { url } from '../../../url';

async function sendCode(code){
    let payload={code:code};
    try{
        const resp=await fetch(`${url}/signup/verify`,{
            body: JSON.stringify(payload),
            method:'POST',
            headers: { "Content-Type": "application/json" }
        })
        const data = await resp.json();
        return data.status;
    }catch(error){
        return false;
    }
    
}


const CallVerify=()=>{
    const { search } = useLocation();
    const navigate = useNavigate();
    useEffect(async ()=>{
        const handleVerification=async ()=>{
            const queryParams = new URLSearchParams(search);
            const code = queryParams.get('code');
            console.log("Got the code"+code);
            let response=await sendCode(code);
            await new Promise(resolve => setTimeout(resolve, 2000));
            if(response==true) {}
            else {
                console.error("Error Verifying");
            }
            navigate('/');
        }
        await handleVerification()
    },[search,navigate])
    return(
        <div className="w-full h-full flex justify-center items-center bg-blue-900 text-5xl font-semibold">
            Verifying !!
        </div>
    )
    
}

export default CallVerify;