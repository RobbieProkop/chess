const Engine = () => {
  // const pieces = {
  //   empty: 0,
  //   wP: 1,
  //   wN: 2,
  //   wB: 3,
  //   wR: 4,
  //   wQ: 5,
  //   wK: 6,
  //   bP: 7,
  //   bN: 8,
  //   bB: 9,
  //   bR: 10,
  //   bQ: 11,
  //   bK: 12,
  // };

  // const boardSquares = 120;

  // const files = {
  //   fA: 0,
  //   fB: 1,
  //   fC: 2,
  //   fD: 3,
  //   fE: 4,
  //   fF: 5,
  //   fG: 6,
  //   fH: 7,
  //   fNone: 8,
  // };

  // const ranks = {
  //   r1: 0,
  //   r2: 1,
  //   r3: 2,
  //   r4: 3,
  //   r5: 4,
  //   r6: 5,
  //   r7: 6,
  //   r8: 7,
  //   rNone: 8,
  // };

  // const colours = { white: 0, black: 1, both: 2 };
  // //side ^=1 || side = side ^1;

  // const squares = {
  //   A1: 21,
  //   B1: 22,
  //   C1: 23,
  //   D1: 24,
  //   E1: 25,
  //   F1: 26,
  //   G1: 27,
  //   H1: 28,
  //   A8: 91,
  //   B8: 92,
  //   C8: 93,
  //   D8: 94,
  //   E8: 95,
  //   F8: 96,
  //   G8: 97,
  //   H8: 98,
  //   noSq: 99,
  //   offBoard: 100,
  // };

  // const filesBoard = new Array(boardSquares);
  // const ranksBoard = new Array(boardSquares);

  // //for a given file and rank, we need to return the board square
  // const fileRankToSquare = (file: number, rank: number) => {
  //   return 21 + file + rank * 10;
  // };

  // const initFilesRanksBoard = () => {
  //   let sq = squares.A1;

  //   //sets everything to offboard
  //   for (let i = 0; i < boardSquares; i++) {
  //     filesBoard[i] = squares.offBoard;
  //     ranksBoard[i] = squares.offBoard;
  //   }

  //   //loops through files and ranks, get board square, set filesBoard and ranksBoard to appropriate value
  //   for (let rank = 0; rank <= ranks.r8; rank++) {
  //     for (let file = files.fA; file <= files.fH; file++) {
  //       sq = fileRankToSquare(file, rank);
  //       filesBoard[sq] = file;
  //       ranksBoard[sq] = rank;
  //     }
  //   }
  // };
  // // initFilesRanksBoard();

  return <div>Engine</div>;
};
export default Engine;
