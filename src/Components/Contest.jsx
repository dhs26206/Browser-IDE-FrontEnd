// import { Editor } from "@monaco-editor/react"
import ContestNavBar from "./ContestNavBar"
import Editor1 from "./Editor"
import Question from "./Question"

const Contest=()=>{
    const choice=["Practice","LeaderBoard","About","ContactUs","Login"]
    return(
        <div className="w-screen h-screen ">
            <ContestNavBar/>
            <div className="w-full flex">
                <div className="w-1/2 border-r-4 border-slate-500">
                <Question/>
                </div>
                <div className="w-1/2">
                    <Editor1/>
                </div>
            </div>
        </div>
    )
}

export default Contest