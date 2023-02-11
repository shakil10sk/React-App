import { useContext } from "react"
import { counterContext } from "../App";

export default function ComponentA (){
const countContext = useContext(counterContext);
    return (
        <div>
            <p>Component A</p>
            <button type="button" onClick={()=>countContext.countDispatch('increment')}>increment</button>
            <button type="button" onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
        </div>
    )
}