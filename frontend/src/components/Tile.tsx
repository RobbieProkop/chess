import "../styles/tile.scss";

interface Props {
  number: number;
  image?: string;
  pieceName?: string;
}

const Tile = ({ number, image, pieceName }: Props) => {
  return (
    <div className={number % 2 ? "square light" : "square dark"}>
      {image && (
        <div
          className="piece"
          style={{ background: `url(${image}) no-repeat center/cover` }}
        ></div>
      )}
      {/* {image && <img src={image} alt={pieceName} className="piece" />} */}
    </div>
  );
};
export default Tile;
