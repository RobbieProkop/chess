import "../styles/tile.scss";

interface Props {
  number: number;
  image?: string;
  pieceName?: string;
}

const Tile = ({ number, image, pieceName }: Props) => {
  return (
    <div className={number % 2 ? "square light" : "square dark"}>
      {image && <img src={image} alt={pieceName} className="piece" />}
    </div>
  );
};
export default Tile;
