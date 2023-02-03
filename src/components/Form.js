import React from "react";

export default class Form extends React.Component{
    state = {
        title:'Javascript',
        text:'this is a text areas text',
        selectLibary:'React',
        isAwesome: true,
    }
    handleChange = (e) => {
        console.log(e.target.type);
        console.log(e.target.value);
        if(e.target.type === 'text'){
            this.setState({
                title : e.target.value
            })
        }else if(e.target.type === 'textarea'){
            this.setState({
                text : e.target.value
            })
        }else if(e.target.type === 'select-one'){
            this.setState({
                selectLibary : e.target.value
            })
        }else if(e.target.type === 'checkbox'){
            this.setState({
                isAwesome : e.target.checked
            })
        }
        
    }
    submitHandler = (e) => {
        const {title,text,selectLibary,isAwesome} = this.state;
        e.preventDefault();
        
        console.log(this.state);
        console.log('Form Data is : - ', title,text,selectLibary,isAwesome);
    }
    render(){
        const {title,text,selectLibary,isAwesome} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Enter Some Text" value={title} onChange={this.handleChange} />
                    <br />
                    <br />
                    <textarea value={text} onChange={this.handleChange}></textarea>
                    <br />
                    <br />
                    <select value={selectLibary} onChange={this.handleChange}>
                        <option value="Jquery">Jquery</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}