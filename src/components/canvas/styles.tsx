import styled from "styled-components";

const CanvasWrapper = styled.div`
  grid-area: canvas;
  background: #ffffff;
  border-right: 2px solid #000;
  padding: 5px 5px 2px 5px;
  & > canvas {
    background: #ffffff;
    border: 1px solid #b7b7b7;
    border-radius: 5px;
  }
`;

export { CanvasWrapper };
