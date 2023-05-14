interface Piece {
  image: string;
  name: string;
  x: number;
  y: number;
}

let activePiece: HTMLElement | null = null;

export const grabPiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const element = e.target as HTMLElement;
  if (!element.classList.contains("piece")) return;

  element.style.position = "absolute";
  //offset is half of the image size (in this case the image size is 80, so the offset is 40)
  const x = e.clientX - 40;
  const y = e.clientY - 40;
  // element.style.transform = `translate(${x}px,${y}px)`;
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;

  activePiece = element;
};

export const dragPiece = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  boardRef: React.RefObject<HTMLDivElement>
) => {
  const chessboard = boardRef.current;
  if (!chessboard || !activePiece || !activePiece.classList.contains("piece"))
    return;
  const minX = chessboard.offsetLeft - 15;
  const minY = chessboard.offsetTop - 10;
  const maxX = chessboard.offsetLeft + chessboard.clientWidth - 70;
  const maxY = chessboard.offsetTop + chessboard.clientHeight - 70;
  const x = e.clientX - 40;
  const y = e.clientY - 40;

  activePiece.style.left =
    x < minX ? `${minX}px` : x > maxX ? `${maxX}px` : `${x}px`;
  activePiece.style.top =
    y < minY ? `${minY}px` : y > maxY ? `${maxY}px` : `${y}px`;

  return e.target;
};

export const dropPiece = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setPieces: React.Dispatch<React.SetStateAction<Piece[][]>>,
  boardRef: React.RefObject<HTMLDivElement>
) => {
  const chessboard = boardRef.current;
  if (!chessboard) return;
  const x = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
  const y = Math.floor(8 - (e.clientY - chessboard.offsetTop) / 100);

  console.log("x,y", x, y);
  if (activePiece) {
    activePiece = null;
  }
  setPieces((pieces) => {
    const result = pieces.map((piece) => {
      // console.log("piece", piece);
      // if (piece.x === 1 && piece.y === 0) {
      //   piece.x = x;
      //   piece.y = y;
      // }
      return piece;
    });
    return result;
  });

  // const element = e.target as HTMLElement;
  // if (!element.classList.contains("piece")) return;

  // //calculate the square that the piece will  be dropped onto
  // const squareSize = 100;
  // const x = Math.floor(e.clientX / squareSize);
  // const y = Math.floor(e.clientY / squareSize);

  // // if(isValidMove(x.y)) {
  // //   setPieces(oldPieces => {

  // //   })
  // // }

  // element.style.position = "relative";
  // element.style.left = `${x}px`;
  // element.style.top = `${y}px`;

  // return e.target;
};
