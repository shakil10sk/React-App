import React from 'react';
import ThemeContext from '../src/context/ThemeContext';
import Counter from './components/Counter';
import ClickCounter from './components/higerOrder/ClickCounter';
import Section from './components/Section';
export default class App extends React.Component{

  state = {
    theme: 'blue'
  }
  render(){
    const {theme} = this.state;
    return (
      <div>
        <Counter>
          {
          (count,increamentCount) => (
            <ClickCounter count={count} increamentCount={increamentCount}/>
            )}
        </Counter>
        <ThemeContext.Provider value={{ theme:theme }}>
          <Section />
        </ThemeContext.Provider>
       
      </div>
    );
  }
}
