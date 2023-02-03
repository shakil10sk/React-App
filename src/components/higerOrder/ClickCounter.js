import React from "react";
import WithCounter from "../composition/HOC/withCounter";
const ClickCounter = (props) => {
    const {count,increamentCount} = props;
        return (
            <div>
                <button type="button" onClick={increamentCount} >Clicked {count} time</button>
                </div>
        );
}

export default WithCounter(ClickCounter);