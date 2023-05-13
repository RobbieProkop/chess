export const grabPiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const element = e.target as HTMLElement;
  if (!element.classList.contains("piece")) return;

  element.style.position = "absolute";
  //offset is half of the image size (in this case the image size is 80, so the offset is 40)
  const x = e.clientX - 40;
  const y = e.clientY - 40;
  // element.style.transform = `translate(${x}px,${y}px)`;
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;

  return e.target;
};

export const dragPiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const element = e.target as HTMLElement;
  if (!element.classList.contains("piece")) return;
  const x = e.clientX - 40;
  const y = e.clientY - 40;

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
  return e.target;
};

export const dropPiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const element = e.target as HTMLElement;
  if (!element.classList.contains("piece")) return;

  //calculate the square that the piece will  be dropped onto
  const squareSize = 100;
  const x = Math.floor(e.clientX / squareSize);
  const y = Math.floor(e.clientY / squareSize);

  // if(isValidMove(x.y)) {
  //   setPieces(oldPieces => {

  //   })
  // }

  element.style.position = "relative";
  element.style.left = "0";
  element.style.top = "0";

  return e.target;
};
