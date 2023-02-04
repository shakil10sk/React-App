import ThemeContext from '../context/ThemeContext';
import Counter from "./Counter";
import HoverCounter from "./higerOrder/HoverCounter";
export default function Content(){
    return (
        <div>
            <h1>this is a content</h1>
            <Counter>
            {(count,increamentCount) => {
                return <ThemeContext.Consumer>{({theme}) => <HoverCounter count={count} increamentCount={increamentCount} theme={theme}/>}</ThemeContext.Consumer>
            }
            
            
            
            // (
            //     <HoverCounter count={count} increamentCount={increamentCount} theme={theme}/>
            // )
            }
            </Counter>
        </div>
    )
}