import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../../../url';


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
    const Navigate=useNavigate();
    const payload={"code":accessToken};
    const resp=await fetch(`${url}/github/login`,{
        body: JSON.stringify(payload),
        method:'POST',
        headers: { "Content-Type": "application/json" },
        credentials:'include'
    })
    Navigate('/');
    
}
export default function CallBack(){
    useEffect(() => {
        const handleGitHubLogin = async () => {
          try {
            // Get the access token
            let token = await getAccessToken(code);
            
            // Wait for 3 seconds using setTimeout
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            // Proceed with the next step after the delay
            await GetHerLogin(token);
          } catch (error) {
            console.error('Error during GitHub login process:', error);
          }
        };
    
        handleGitHubLogin();
      }, [code]);
    const { code } = useParams();
    // let token= getAccessToken(code);
    // await new Promise(resolve => setTimeout(resolve, 3000));
    // GetHerLogin(token);
    return(
        <div className='h-full w-full bg-blue-950 text-3xl flex justify-center items-center font-semibold'>
            Authenticating....

        </div>
    )
    


}