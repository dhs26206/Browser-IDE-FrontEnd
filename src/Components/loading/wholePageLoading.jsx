import React, { useEffect, useState } from 'react';
import { dotPulse } from 'ldrs'
const wholePageLoading=({loading})=>{
    dotPulse.register()
    return(
        <>
        {/* Blur and Loading Overlay */}
        {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-500 flex items-center justify-center">
                <div className="text-gray-700 text-lg font-semibold z-51">
                <l-dot-pulse size="100"   speed="1.3"  color="red"></l-dot-pulse>
                </div>
            </div>
        )}
        </>
    )
}

export default wholePageLoading