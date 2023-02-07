import React from "react";
function Title(){
    console.log('rendaring Title');
    return <h2>use Callback  Hook Tutiral</h2>;
}


export default React.memo(Title);