import { useCallback, useState } from "react";
import Button from "./useMemoUseCache/Button";
import ShowCount from "./useMemoUseCache/ShowCount";
import Title from "./useMemoUseCache/Title";

function App(){
  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount)=>prevCount + 1);
  },[]);
  const incrementByFive = useCallback(() => {
    setCount2((prevCount)=>prevCount + 5);
  },[]);

  return (
    <div className="app">
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={incrementByOne}>InCrement By One</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment By Five</Button>

    </div>
  )
}

export default App;