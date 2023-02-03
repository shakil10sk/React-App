import React from 'react';
import Button from './Button.js';
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      locale:'bn-BD'
    }
  }

    // we can use this outside of constructor function
    // state = {
    //     date: new Date(),
    //     locale:'bn-BD'
    // }

    componentDidMount(){

        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){

        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
      this.setState({
        locale
      })
    }

    tick(){
        this.setState({
            date: new Date()
        })

        // this.setState((state,props) => {
        //     counter: state.increment + props.decrement
        // })
    }

    

    render() {
      const {date,locale} = this.state;

      let button;
      if(locale === 'bn-BD'){
        button = (<Button change={this.handleClick} locale="en-US" />);
      }else{
        button = (<Button change={this.handleClick} locale="bn-BD" />);
      }
      
      return (
        <div>
          <h1>
            <span>Hello {this.props.children} {date.toLocaleTimeString(locale)}</span>
          </h1>
            {button}
        </div>
      );
    }  
  }

export default Clock;