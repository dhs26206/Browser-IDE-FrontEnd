import { useState } from "react"

const Navigation=({choices,IsOpen})=>{
    const[open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(prev=>!prev);
        IsOpen();
    }

    const handleSelect=(item)=>{
        handleOpen();
        window.open(`/${item}`, '_blank');
    }
    const divStyle = {
        background: 'rgb(16, 37, 66)',
        backgroundImage: 'linear-gradient(90deg, rgba(16,37,66,1) 6%, rgba(0,2,223,1) 28%, rgba(16,37,66,1) 100%)'
      };
    

    return(
        
    
        <div  className="bg-[#4D9DE0] flex flex-wrap items-center justify-center overflow-visible h-full">
              <div  className="flex justify-center items-center h-full pr-5 sm:show md:hidden w-full float-right ">
                    {/* <Dropdown  items={choice} clickable={true} title={'bandar'} /> */}
                <svg onClick={handleOpen} className={`${!open?'':'hidden'} h-8 w-12 cursor-pointer z-10 float-right`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                <svg onClick={handleOpen} className={`${open?'':'hidden'} h-8 w-12 cursor-pointer z-10 float-right`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
              </div>
              <div>
               {open&&(
                <div className=" z-10 relative">
                    {choices.map((item,index)=>(
                        <div key={index} onClick={() => handleSelect(item)} style={divStyle} className={`h-[17vh] w-screen cursor-pointer flex items-center text-3xl font-bold justify-center`}>
                            {item}
                        </div>
                    )
                    )}

                </div>
               )}
              </div>
            </div>
        
        
        
        
    )
}
export default Navigation;