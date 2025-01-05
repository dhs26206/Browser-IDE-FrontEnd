
import { ContestForm } from "./ContestForm"

import { ManageContest } from "./Manage-Contest"


export  const CombinedComponent=({state,setIsNavOpen,isNavOpen,setState})=>{
  const handleClick=()=>{
    setIsNavOpen(!isNavOpen);
  }
    return(
        <>
        
        <button onClick={handleClick}>{isNavOpen ? "X":"="}</button>
      {state === "create" && <ContestForm setState={setState}  />}
      {state === "manage" && <ManageContest />}
    </>
        
    )
}