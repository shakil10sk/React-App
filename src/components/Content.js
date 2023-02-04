import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Counter from "./Counter";
import HoverCounter from "./higerOrder/HoverCounter";
export default function Content(){
    const context = useContext(ThemeContext);
    const {theme,switchTheme} = context;
    console.log('ontent render');
    return (
        <div>
            <h1>this is a content</h1>
            <Counter>
            {(count,increamentCount) => (
               <HoverCounter 
                count={count} 
                increamentCount={increamentCount} theme={theme} 
                switchTheme={switchTheme}
                />
            )
            
            
            
            // (
            //     <HoverCounter count={count} increamentCount={increamentCount} theme={theme}/>
            // )
            }
            </Counter>
        </div>
    )
}