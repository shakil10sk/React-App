import Counter from './components/Counter';
import ClickCounter from './components/higerOrder/ClickCounter';
import HoverCounter from './components/higerOrder/HoverCounter';
function App() {
  return (
    <div>
      <Counter>
        {
        (count,increamentCount) => (
          <ClickCounter count={count} increamentCount={increamentCount}/>
          )}
      </Counter>
      <Counter>
        {
        (count,increamentCount) => (
          <HoverCounter count={count} increamentCount={increamentCount}/>
          )}
      </Counter>
    </div>
  );
};

export default App;
