import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Counter from "./Counter";
import HoverCounter from "./higerOrder/HoverCounter";
export default class Content extends React.Component{
    render(){
        const {theme,switchTheme} = this.context;
        return (
            <div>
                <h1>this is a content</h1>
                <Counter>
                {(count,increamentCount) => (
                    <HoverCounter 
                    count={count} 
                    increamentCount={increamentCount}
                    theme={theme} 
                    switchTheme={switchTheme}
                    />
                )
                }
                
                </Counter>
            </div>
        )
    }
}

Content.contextType = ThemeContext;