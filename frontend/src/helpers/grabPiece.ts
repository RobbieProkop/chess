const grabPiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const element = e.target as HTMLElement;
  if (!element.classList.contains("piece")) return;

  element.style.position = "absolute";
  //offset is half of the image size (in this case the image size is 80, so the offset is 40)
  const x = e.clientX - 40;
  const y = e.clientY - 40;
  console.log("x", x);
  console.log("y", y);
  // element.style.transform = `translate(${x}px,${y}px)`;
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;

  return e.target;
};
export default grabPiece;
