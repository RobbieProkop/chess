import "../styles/tile.scss";

interface Props {
  number: number;
  image?: string;
  pieceName?: string;
  x: number;
  y: number;
}

const Tile = ({ number, image, pieceName, y, x }: Props) => {
  return (
    <div className={number % 2 ? "square light" : "square dark"}>
      y:{y} x:{x}
      {/* {image && <img src={image} alt={pieceName} />} */}
    </div>
  );
};
export default Tile;
