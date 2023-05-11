import "../styles/tile.scss";

interface Props {
  number: number;
  image?: string;
  pieceName?: string;
}

const Tile = ({ number, image, pieceName }: Props) => {
  return (
    <div className={number % 2 ? "square dark" : "square light"}>
      {image && <img src={image} alt={pieceName} />}
    </div>
  );
};
export default Tile;
