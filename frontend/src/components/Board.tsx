import "../styles/board.scss";
import Tile from "./Tile";
import bP from "../assets/bP.png";

type Props = {
  files: string[];
  ranks: number[];
};

const Chessboard = ({ ranks, files }: Props) => {
  let board = [];
  for (let j = 0; j < ranks.length; j++) {
    for (let i = 0; i < files.length; i++) {
      const number = i + j;
      board.push(<Tile number={number} piece="assets/bP.png" />);
    }
  }
  return (
    <div className="board-container">
      <div className="ranks">
        {ranks.map((rank) => {
          return <span className="rank">{rank}</span>;
        })}
      </div>
      <div className="chessboard">
        {board}
        <div className="files">
          {files.map((file) => {
            return <span className="file">{file}</span>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Chessboard;
