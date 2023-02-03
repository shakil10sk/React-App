import React from "react";
import WithCounter from "../composition/HOC/withCounter";
const HoverCounter = (props) => {
    const {count,increamentCount} = props;
        return (
            <div>
                <h1 onMouseOver={increamentCount} >Clicked {count} time</h1>
                </div>
        );
}

export default WithCounter(HoverCounter);