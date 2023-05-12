import { useState } from "react";
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
    y: 5,
  },
];

const Chessboard = ({ ranks, files }: Props) => {
  const [boardSide, setBoardSide] = useState(false);
  const flip = () => {
    setBoardSide(!boardSide);
  };

  let board = [];
  for (let j = files.length - 1; j >= 0; j--) {
    for (let i = 0; i < ranks.length; i++) {
      const number = i + j;
      let image;
      let pieceName;

      pieces.forEach((piece) => {
        if (piece.x === j && piece.y === i) {
          image = piece.image;
          pieceName = piece.name;
        }
      });

      board.push(
        <Tile number={number} image={image} pieceName={pieceName} y={i} x={j} />
      );
    }
  }
  return (
    <>
      <button className="btn btn-primary" onClick={flip}>
        flip board
      </button>
      <div className="board-container">
        <div className={boardSide ? "ranks reverse" : "ranks"}>
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
          <div className={boardSide ? "files reverse" : "files"}>
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
    </>
  );
};
export default Chessboard;
