// import React from 'react';
// // import ClassComponent from './components/Hooks/ClassComponent';
// import FunctionComponent from './components/Hooks/FunctionComponent';
// export default class App extends React.Component{

//   render(){
    
//     return (
//       <div>
//         <FunctionComponent/>
//       </div>
//     );
//   }
// }


import React, { useState } from 'react';
// import ClassComponent from './components/Hooks/ClassComponent';
import FunctionComponent from './components/Hooks/FunctionComponent';
export default function App(){

  const [show,setShow] = useState(true);
    return (
      <div className='App'>
        <div>{show && <FunctionComponent/>}</div>
        <p>
          <button type='button' onClick={() => setShow((prevShow) => !prevShow)}>
            {show ? 'Hide Post' : 'Show Post'};
          </button>
        </p>
      </div>
    );
  
}
