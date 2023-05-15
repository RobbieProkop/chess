interface Piece {
  image: string;
  name: string;
  x: number;
  y: number;
}

let activePiece: HTMLElement | null = null;

export const grabPiece = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setGridX: React.Dispatch<React.SetStateAction<number>>,
  setGridY: React.Dispatch<React.SetStateAction<number>>,
  boardRef: React.RefObject<HTMLDivElement>,
  gridX: number,
  gridY: number
) => {
  const element = e.target as HTMLElement;
  if (!element.classList.contains("piece")) return;
  const chessboard = boardRef.current;
  if (!chessboard) return;
  const chessboardRect = chessboard.getBoundingClientRect();
  element.style.position = "absolute";

  setGridX(Math.floor((e.clientX - chessboardRect.left - 20) / 100));
  setGridY(Math.floor(8 - (e.clientY - chessboardRect.top - 20) / 100));
  console.log("grixxxxx", gridX);
  console.log("griYyyyy", gridY);

  if (gridX < 0) setGridX(0);
  if (gridY < 0) setGridY(0);
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
  boardRef: React.RefObject<HTMLDivElement>,
  gridX: number,
  gridY: number
) => {
  const chessboard = boardRef.current;
  if (!chessboard) return;

  const chessboardRect = chessboard.getBoundingClientRect();
  console.log("chessboardRect", chessboardRect);
  // const x = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
  // const y = Math.floor(8 - (e.clientY - chessboard.offsetTop) / 100);
  let x = Math.floor(e.clientX / 100);
  let y = Math.floor(8 - (e.clientY - chessboard.offsetTop) / 100);
  if (x < 0) x = 0;
  if (x > 7) x = 7;
  if (y < 0) y = 0;
  if (y > 7) y = 7;

  console.log("e X", e.clientX);
  console.log("e Y", e.clientY);

  console.log("off left", chessboard.offsetLeft);
  console.log("off top", chessboard.offsetTop);

  console.log("x", x);
  console.log("y", y);

  if (activePiece) {
    activePiece.style.left = `${x * 100 - 5}px`;
    activePiece.style.top = `${(9 - y) * 100 - 30}px`;

    activePiece = null;
  }
  setPieces((pieces) => {
    //pieces is the board squares
    console.log("grix", gridX);
    console.log("griY", gridY);
    return pieces.map((piece) => {
      return piece.map((p) => {
        if (!p) return p;
        if (p.x === gridX && p.y === gridY) {
          return { ...p, x: x, y: 9 - y };
        }
        return p;
      });
    });
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
