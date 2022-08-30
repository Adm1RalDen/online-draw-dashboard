import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ChildrenWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: #0000006f;
  height: 100vh;
  z-index: 9999;
  backdrop-filter: blur(3px);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  children?: ReactNode;
};
export const Portal = ({ children = null }: Props) => {
  return createPortal(
    <ChildrenWrapper>{children}</ChildrenWrapper>,
    document.getElementById("modal") as HTMLDivElement
  );
};
