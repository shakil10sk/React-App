import { useEffect, useState } from "react";

export default function FunctionComponent(){
    const [count,setCounter] = useState(0);
    const [date,setDate] = useState(new Date());
    const tick = () => {
        console.log('clock ticking');
        setDate(new Date())
    }
    const addClick = () => {
        setCounter((prevCounter) => prevCounter + 1);
    }
    useEffect(()=>{
        console.log('Updateing Document Title');
        document.title = `Clicked ${count} times`;
    },[count])

    useEffect(()=>{

        console.log('Starting Timer');
       const interval = setInterval(tick,1000);
        // this return work as class componentWillUnmount()
        return () => {
console.log('component unmount');
clearInterval(interval)
        }
    },[])

    return(
        <div>
            <p>Time : {date.toLocaleTimeString()}</p>  
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    );
}