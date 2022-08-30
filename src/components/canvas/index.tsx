import { useContext } from "react";
import { PaintContext } from "../../context/paintContext";
import { CanvasWrapper } from "./styles";

export const Canvas = () => {
  const { canvasRef, handleSnapshot } = useContext(PaintContext);

  return (
    <CanvasWrapper>
      <canvas onMouseUp={handleSnapshot} ref={canvasRef}></canvas>
    </CanvasWrapper>
  );
};
