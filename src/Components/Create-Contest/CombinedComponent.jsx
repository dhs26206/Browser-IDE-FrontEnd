import CreateContest from "./CreateContest"
import { ContestForm } from "./ContestForm"

import { ManageContest } from "./Manage-Contest"


export  const CombinedComponent=({state})=>{
    return(
        <>
      {state === "create" && <ContestForm />}
      {state === "manage" && <ManageContest />}
    </>
        
    )
}