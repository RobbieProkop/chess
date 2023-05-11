import "../styles/tile.scss";

interface Props {
  number: number;
  piece?: string;
}

const Tile = ({ number, piece }: Props) => {
  return (
    <div className={number % 2 ? "square dark" : "square light"}>
      <img src={piece} alt="chess piece" />
    </div>
  );
};
export default Tile;
