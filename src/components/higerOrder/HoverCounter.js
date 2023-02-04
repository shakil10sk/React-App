import React from "react";
export default function HoverCounter({count,increamentCount,theme}){

    const style = theme === 'dark' ? {backgroundColor:'#000000',color:'#ffffff'} : {backgroundColor:theme};
        return (
            <div>
               <h1 onMouseOver={increamentCount}  style={style}>Hoverd {count} time</h1>
                </div>
        );
    

}

