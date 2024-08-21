// import { Editor } from "@monaco-editor/react"
import { useState } from "react";
import ContestNavBar from "./ContestNavBar"
import Editor1 from "./Editor"
import Question from "./Question"
import { SubmitCompile } from "./Submit-Compile";


const Contest = () => {
    const [leftWidth, setLeftWidth] = useState(42);
  
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
  



    const[submitData,setSubmitData]=useState({code:"",input:"",lang:"java",userid:"ash123"});
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
          <div className="h-[80%] md:h-full flex-grow0   overflow-auto" style={{ width: window.innerWidth >= 1024 ? `calc(100% - ${leftWidth}% )` : '100%' }} >
              <div className="w-full h-[94%]  "> <Editor1 setSubmitData={setSubmitData} submitData={submitData}/></div>
              <div className="w-full h-[6%]  sticky bottom-0 "> <SubmitCompile submitData={submitData}/> </div>
          </div>
          
        </div>
      </div>
    );
  };


export default Contest