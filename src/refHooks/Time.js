import { useEffect, useRef, useState } from "react";

export default function Time(){
    const [date,SetDate] = useState(new Date());
    const intervalRef = useRef();

    const tick = () => {
        SetDate(new Date());
    };

    useEffect(()=>{

        intervalRef.current = setInterval(tick,1000);

        return () => {
            clearInterval(intervalRef.current);
        }
    },[]);

    return (
        <div>
            <p> Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={()=>clearInterval(intervalRef.current)}>Clear Clock</button>
            </p>
        </div>
    )
}