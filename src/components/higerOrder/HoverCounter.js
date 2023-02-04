import React from "react";
export default function HoverCounter({count,increamentCount,theme,switchTheme}){

    const style = theme === 'dark' ? {backgroundColor:'#000000',color:'#ffffff'} : null;
        return (
            <div>
               <h1 onMouseOver={increamentCount}  style={style}>Hoverd {count} time</h1>
               <button type="button" onClick={switchTheme}> Change Theme</button>
            </div>
        );
    

}

