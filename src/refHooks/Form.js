import { useEffect, useRef } from "react";
import Input from "./Input";

function Form(){
    const inputRefs = useRef(null);

    useEffect(()=>{
        inputRefs.current.focus()
    },[]);

    return (
        <div>
            <p>
                <Input ref={inputRefs} type="text" placeholder="Enter Something" />
            </p>
        </div>
    )
}
export default Form;