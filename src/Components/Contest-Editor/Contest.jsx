// import { Editor } from "@monaco-editor/react"
import { useState } from "react";
import ContestNavBar from "./ContestNavBar"
import Editor1 from "./Editor"
import Question from "./Question"


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
  
    return (
      <div className="w-screen h-screen">
        <ContestNavBar />
        <div className="w-full h-full flex-wrap sm:w-full md:flex-nowrap flex container">
          <div className="h-full" style={{ width: `${leftWidth}%` }}>
            <Question />
          </div>
          <div
            className="w-1 bg-slate-500 cursor-ew-resize"
            onMouseDown={handleMouseDown}
          ></div>
          <div className="h-full flex-grow0" style={{ width: `${100-leftWidth}%` }} >
            <Editor1 />
          </div>
        </div>
      </div>
    );
  };


export default Contest