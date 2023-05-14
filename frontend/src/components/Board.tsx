import { useRef, useState } from "react";
import "../styles/board.scss";
import Tile from "./Tile";
import initialSetup from "../helpers/initialSetup";
import { grabPiece, dragPiece, dropPiece } from "../helpers/movePiece";

type Props = {
  files: string[];
  ranks: string[];
};

const Chessboard = ({ ranks, files }: Props) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const [boardSide, setBoardSide] = useState(false);
  const [pieces, setPieces] = useState(initialSetup());

  // flib board function
  const flip = () => {
    setBoardSide(!boardSide);
  };

  let board = [];
  for (let i = 0; i < ranks.length; i++) {
    for (let j = files.length - 1; j >= 0; j--) {
      const number = i + j;
      let image, pieceName;
      const piece = pieces[i][j];

      if (piece) {
        image = piece.image;
        pieceName = piece.name;
      }

      board.push(
        <Tile
          key={`${i}, ${j}`}
          number={number}
          image={image}
          pieceName={pieceName}
        />
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
        <div>
          <div
            className="chessboard"
            onMouseDown={(e) => grabPiece(e)}
            onMouseMove={(e) => dragPiece(e, boardRef)}
            onMouseUp={(e) => dropPiece(e, setPieces, boardRef)}
            ref={boardRef}
          >
            {boardSide ? board : board.reverse()}
          </div>
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
