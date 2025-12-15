import CharacterCounter from "./components/CharacterCounter/CharacterCounter";
import "./App.css";
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Character Counter App</h1>

      <CharacterCounter
        minWords={10}
        maxWords={100}
        targetReadingTime={1}
      />
    </div>
  );
}

export default App;
