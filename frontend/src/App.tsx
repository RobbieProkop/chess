import Chessboard from "./components/Board";

function App() {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="App">
      <Chessboard ranks={ranks} files={files} />
    </div>
  );
}

export default App;
