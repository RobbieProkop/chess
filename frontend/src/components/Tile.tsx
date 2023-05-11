import "../styles/tile.scss";
import bP from "../assets/bP.png";

interface Props {
  number: number;
}

const Tile = ({ number }: Props) => {
  return (
    <div className={number % 2 ? "square dark" : "square light"}>
      <img src={bP} alt="chess piece" />
    </div>
  );
};
export default Tile;
