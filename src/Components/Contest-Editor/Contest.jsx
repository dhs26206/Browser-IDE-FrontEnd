// import { Editor } from "@monaco-editor/react"
import { useState } from "react";
import ContestNavBar from "./ContestNavBar"
import Editor1 from "./Editor"
import Question from "./Question"
import { SubmitCompile } from "./Submit-Compile";
import Block from "./Block";
import 'animate.css';
const Contest = () => {
    const [leftWidth, setLeftWidth] = useState(42);
    const[output,setOutput]=useState("");
    const [hit, setHit]=useState(false);
    const handleHit=()=>{
      setHit(true);
      
    }
    const hideBlock=()=>{
      setHit(false);
    }
  
    const handleMouseDown = (e) => {
      e.preventDefault();
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
  
    const handleMouseMove = (e) => {
      e.preventDefault();
      const containerWidth = document.querySelector('.container').offsetWidth;
      const newLeftWidth = (e.clientX / containerWidth) * 100;
      if (newLeftWidth < 33) {
        setLeftWidth(33);
      } else if (newLeftWidth > 66) {
        setLeftWidth(66);
      } else {
        setLeftWidth(newLeftWidth);
      }
    };
  
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    const curUrl=window.location.href.split("/");
    const[submitData,setSubmitData]=useState({code:"",input:"",lang:"java",userid:"ash123",quesId:curUrl[curUrl.length-1]});
    return (
      <div className="w-screen h-screen">
        <div className="w-full h-1/5"><ContestNavBar /></div>
        <div className="w-full h-4/5  sm:w-full flex-wrap gap-5 md:gap-0 md:flex-nowrap flex container ">
          <div className="h-[80%] md:h-full overflow-y-scroll " style={{ width: window.innerWidth >= 1024 ? `${leftWidth}%`:'100%' }}>
            <Question />
          </div>
          <div
            className="w-1 hidden md:flex bg-slate-500 cursor-ew-resize"
            onMouseDown={handleMouseDown}
          ></div>
          <div className="h-[80%] md:h-full flex-grow0 relative  overflow-auto" style={{ width: window.innerWidth >= 1024 ? `calc(100% - ${leftWidth}% )` : '100%' }} >
          <div className="relative w-full h-[94%]">
              <div className="absolute inset-0 z-0">
                <Editor1 setSubmitData={setSubmitData} submitData={submitData}/>
              </div>
              <div className={`absolute inset-0 z-10 flex justify-center items-center ${hit ? "" : "animate__animated animate__bounceInDown hidden"}`}>
                <Block hideBlockButton={hideBlock} setSubmitData={setSubmitData} submitData={submitData} output={output}/>
              </div>
          </div>
              <div className="w-full h-[6%] z-20 sticky bottom-0 "> <SubmitCompile isClicked={handleHit} submitData={submitData} setOutput={setOutput} /> </div>
          </div>
          
        </div>
      </div>
    );
  };


export default Contest