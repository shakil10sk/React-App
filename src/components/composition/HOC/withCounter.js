import React from "react";

const WithCounter = (OriginalComponent) => {
    class NewComponent extends React.Component{

        state = {
            count: 0,
        }
        increamentCount = () =>{
            this.setState((prevState)=> ({
                count: prevState.count + 1
            }));
        }
        render(){
            const {count} = this.state;
            return  <OriginalComponent count={count} increamentCount={this.increamentCount}/>
        }

    }
    return NewComponent;
}


export default WithCounter;