interface Piece {
  image: string;
  name: string;
  x: number;
  y: number;
}

const initialSetup = () => {
  //this creates a 2 dimentional array
  //.fill(null is necessary in order to map over the array)
  const pieces: Piece[][] = Array(8)
    .fill(null)
    .map(() => Array(8).fill(null));

  const colours = ["b", "w"];
  //don't spell knight with a K, it makes the program think the piece is a king
  const names = [
    "Rook",
    "Night",
    "Bishop",
    "Queen",
    "King",
    "Bishop",
    "Night",
    "Rook",
  ];

  for (let colour of colours) {
    const rank = colour === "b" ? 7 : 0;
    const pawnRank = colour === "b" ? 6 : 1;

    //looping through the pieces
    for (let i = 0; i < 8; i++) {
      //pawns
      pieces[pawnRank][i] = {
        image: `assets/${colour}P.png`,
        name: `${colour} pawn`,
        y: pawnRank,
        x: i,
      };

      //other pieces
      pieces[rank][i] = {
        image: `assets/${colour}${names[i].charAt(0)}.png`,
        name: `${colour} ${names[i]}`,
        y: rank,
        x: i,
      };
    }
  }
  return pieces;
};
export default initialSetup;
