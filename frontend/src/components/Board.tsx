import { useState } from "react";
import "../styles/board.scss";
import Tile from "./Tile";

type Props = {
  files: string[];
  ranks: string[];
};
interface Piece {
  image: string;
  name: string;
  x: number;
  y: number;
}

const Chessboard = ({ ranks, files }: Props) => {
  const [boardSide, setBoardSide] = useState(false);

  //setting the initial pieces
  const pieces: Piece[] = [];

  // black pawns
  for (let i = 0; i < 8; i++) {
    pieces.push({
      image: "assets/bP.png",
      name: "black pawn",
      y: 6,
      x: i,
    });
  }

  //white pawns
  for (let i = 0; i < 8; i++) {
    pieces.push({
      image: "assets/wP.png",
      name: "white pawn",
      y: 1,
      x: i,
    });
  }

  // flib board function
  const flip = () => {
    setBoardSide(!boardSide);
  };

  let board = [];
  for (let i = 0; i < ranks.length; i++) {
    for (let j = files.length - 1; j >= 0; j--) {
      const number = i + j;
      let image;
      let pieceName;

      pieces.forEach((piece) => {
        if (piece.x === j && piece.y === i) {
          image = piece.image;
          pieceName = piece.name;
        }
      });

      board.push(<Tile number={number} image={image} pieceName={pieceName} />);
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
          {boardSide ? board : board.reverse()}
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
