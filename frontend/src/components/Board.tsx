import "../styles/board.scss";
import Tile from "./Tile";

type Props = {
  files: string[];
  ranks: number[];
};

interface Piece {
  image: string;
  name: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [
  {
    image: "assets/bP.png",
    name: "black pawn",
    x: 0,
    y: 1,
  },
];

const Chessboard = ({ ranks, files }: Props) => {
  let board = [];
  for (let j = 0; j < ranks.length; j++) {
    for (let i = 0; i < files.length; i++) {
      const number = i + j;
      let image;
      let pieceName;

      pieces.forEach((piece) => {
        if (piece.x === i && piece.y === j) {
          image = piece.image;
          pieceName = piece.name;
        }
      });

      board.push(<Tile number={number} image={image} pieceName={pieceName} />);
    }
  }
  return (
    <div className="board-container">
      <div className="ranks">
        {ranks.map((rank, index) => {
          return (
            <span className="rank" key={index}>
              {rank}
            </span>
          );
        })}
      </div>
      <div className="chessboard">
        {board}
        <div className="files">
          {files.map((file, index) => {
            return (
              <span className="file" key={index}>
                {file}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Chessboard;
