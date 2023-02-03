import Brackets from "./components/composition/Brackets";
import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";

function App() {
  return (
  <Emoji>
      {({ addEmoji }) => (
        <Brackets>
        {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
        </Brackets>
      )}
  </Emoji>);
};

export default App;
