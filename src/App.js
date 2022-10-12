import "./App.css";
import Box from "./components/Box/Box";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="board-container">
          <div className="row">
            <Box />
            <Box />
            <Box />
          </div>
          <div className="row">
            <Box />
            <Box />
            <Box />
          </div>
          <div className="row">
            <Box />
            <Box />
            <Box />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
