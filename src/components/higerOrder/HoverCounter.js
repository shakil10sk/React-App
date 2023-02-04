import React from "react";
export default function HoverCounter({count,increamentCount}){
        return (
            <div>
               <h1 onMouseOver={increamentCount} >Hoverd {count} time</h1>
                </div>
        );
    

}

