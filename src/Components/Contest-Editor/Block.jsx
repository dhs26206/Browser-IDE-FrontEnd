import 'animate.css';
import { data } from 'jquery';
import { useState } from 'react';
import Loading from '../loading/index'




const Block=({hideBlockButton,submitData,setSubmitData,output,compilation,toggleCompilation,compilationLoading})=>{
    const [animate,setAnimate]=useState(true);
    const[input,setInput]=useState("");
    
    function handleBlock(){
        setAnimate(false);
        setTimeout(()=>{
            hideBlockButton();
            setAnimate(true); 

        },1000);  
    }
    console.log(submitData);
    function handleCompilation(e){
        console.log(e);
        toggleCompilation(e);
    }
    const handleChange=(event)=>{
        //setInput(event.target.value);
        setSubmitData({...submitData,input:event.target.value});
    }
    return(
        <div className={`overflow-y-scroll h-[95%] w-[95%] animate__animated ${animate?"animate__bounceInUp":"animate__bounceOutDown"}  rounded-t-3xl bg-blue-800`}>

            <div className='w-full bg-blue-950 h-[10%] flex justify-between'>
                <span className='h-full text-3xl pl-5 flex justify-center items-center'>Hell</span>
                <span onClick={()=>handleBlock()} className='h-full w-[8%] flex items-center hover:bg-red-600 '><svg className='w-full h-[80%]' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></span>

            </div>
            <div className='w-full bg-yellow-500 h-[15%] flex items-end'>
                <div className='h-[50%] w-full flex gap-5'>
                    <div className='w-[5%]'></div>
                    <div onClick={()=>handleCompilation(true)} className={`w-1/5 h-full flex items-center justify-center rounded-t-xl text-md  bg-blue-800 ${!compilation?"bg-pink-800":""}`} >Compilation Result</div>
                    <div onClick={()=>handleCompilation(false)} className={`w-1/5 h-full flex items-center justify-center rounded-t-xl text-md   ${compilation?"bg-pink-800":"bg-blue-800"}`}>Custom Input</div>
                </div>
            </div>
            {!compilation&&(<>
                <div className='pl-8 pt-10 w-full h-[40%] flex items-center' name="Input">
                    <div className='w-[90%] h-full'>
                        <div className='w-full pb-1 text-lg'>Input</div>
                        <textarea className="bg-gray-800 pl-1 w-4/5 h-3/4 rounded-lg text-[#aba0a0]  border-2 border-gray-600 placeholder:pl-4 placeholder:text-[#646363] placeholder:text-sm  text-left overflow-x-auto" placeholder="" type="text" name="input" onChange={handleChange}/>
                    </div>
                </div>
                <div className='pl-8 pt-10 w-full h-[25%] flex items-center' name="Input">
                    <div className='w-[90%] h-full'>
                        <div className='w-full pb-1 text-lg'>Sample Input/Input Format</div>
                        
                    </div>
                </div>
            </>)}
            {compilation&&(<>
                <div className='pl-8 pt-10 w-full h-[25%] flex items-center' name="Input">
                    <div className='w-[90%] h-full'>
                        <div className='w-full pb-1 text-lg '>Input</div>
                        <div className="w-74 h-24 overflow-y-scroll rounded-lg border border-gray-300 p-2 whitespace-pre-wrap bg-black ">{compilationLoading ? <Loading/> : output.input}</div>
                    </div>
                </div>
                <div className='pl-8 pt-10 w-full h-[25%] flex items-center' name="Input">
                    <div className='w-[90%] h-full'>
                        <div className='w-full pb-1 text-lg'>Your Output</div>
                        <div className="w-74 h-24 overflow-y-scroll rounded-lg border border-gray-300 p-2 whitespace-pre-wrap bg-black">{compilationLoading ? <Loading/> : output.output.status ? output.output.op : "error please submit again !!"}</div>
                    </div>
                </div>
                <div className='pl-8 pt-10 w-full h-[25%] flex items-center' name="Input">
                    <div className='w-[90%] h-full'>
                        <div className='w-full pb-1 text-lg'>Expected Output</div>
                        
                    </div>
                </div>
            </>)}
            

        </div>
    )
}

export default Block;