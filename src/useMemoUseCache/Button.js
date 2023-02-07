import React from "react";

function Button({handleClick,children}){
    console.log(`Rendaring Button ${children}`);
    return(
        <p>
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </p>
    );
}

export default React.memo(Button);