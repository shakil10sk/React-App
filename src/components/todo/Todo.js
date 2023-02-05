import { useState } from "react";

function Todo(){

    const [todo,setTodo] = useState('');
    const [warning,setWarning] = useState('');

   const handleInput = (e)=>{
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js') ? 'you need Javascript skill to complete this task. Do you have it? ': null;
        setTodo(inputValue);
        setWarning(updatedWarning);
    }
    
    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" id="" value={todo} onChange={handleInput} cols="30" rows="10"></textarea>
            </p>
            <hr />
            <h2>{warning || 'Good Luck'}</h2>
        </div>
    );

}

export default Todo;