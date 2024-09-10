import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { url } from '../../../url';
import { useEffect } from 'react';


async function getAccessToken(code){
    const payload={"token":code}
    const resp=await fetch(`${url}/github/callback`,{
        body: JSON.stringify(payload),
        method:'POST',
        headers: { "Content-Type": "application/json" }
    })
    const data = await resp.json();
    let accessToken=await data.token;
    return accessToken;
}
async function GetHerLogin(accessToken){
    
    const payload={"code":accessToken};
    const resp=await fetch(`${url}/github/login`,{
        body: JSON.stringify(payload),
        method:'POST',
        headers: { "Content-Type": "application/json" },
        credentials:'include'
    })
    
    
}
export default function CallBack(){
  const { search } = useLocation();
  const navigate=useNavigate();
    useEffect(() => {
        const handleGitHubLogin = async () => {
          try {
            // Get the access token
            
            const queryParams = new URLSearchParams(search);
            const code = queryParams.get('code');
            console.log("Got the code "+code);
            if (code) {
              let token = await getAccessToken(code);
              console.log("Token is this " + token);
    
              // Wait for 3 seconds using setTimeout
              await new Promise(resolve => setTimeout(resolve, 3000));
    
              // Proceed with the next step after the delay
              await GetHerLogin(token);
              navigate('/');
            } else {
              console.error('Authorization code not found');
            }
          } catch (error) {
            console.error('Error during GitHub login process:', error);
          }
        };
    
        handleGitHubLogin();
      }, [search, navigate]);
      
    // let token= getAccessToken(code);
    // await new Promise(resolve => setTimeout(resolve, 3000));
    // GetHerLogin(token);
    return(
        <div className='h-full w-full bg-blue-950 text-3xl flex justify-center items-center font-semibold'>
            Authenticating....

        </div>
    )
    


}