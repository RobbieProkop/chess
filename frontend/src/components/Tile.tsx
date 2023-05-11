interface Props {
  i: number;
  j: number;
  ranks: number[];
  files: string[];
}

const Tile = ({ i, j, files, ranks }: Props) => {
  return (
    <div className={(i + j) % 2 ? "square dark" : "square light"}>
      <span className="ranks"></span>
      <span className="files"></span>
    </div>
  );
};
export default Tile;
