import React from "react";
class Todo extends React.Component{
    state = {
        todo:'',
        warning: null,  
    }
    handleInput = (e)=>{
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'you need Javascript skill to complete this task. Do you have it? ': null;
        this.setState({
            todo : inputValue,
            warning,
        })
    }
    
    render(){
        const {todo,warning} = this.state;
        return (
            <div>
                <p>{todo}</p>
                <p>
                    <textarea name="todo" id="" value={todo} onChange={this.handleInput} cols="30" rows="10"></textarea>
                </p>
                <hr />
                <h2>{warning || 'Good Luck'}</h2>
            </div>
        );
    }
}

export default Todo;