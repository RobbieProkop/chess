import Chessboard from "./components/Board";
import "./styles/app.scss";

function App() {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <div className="App">
      <h1>ChessDevs</h1>
      <Chessboard ranks={ranks} files={files} />
    </div>
  );
}

export default App;
