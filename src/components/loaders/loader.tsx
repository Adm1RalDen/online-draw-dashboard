import { FC } from "react";
import styled, { css } from "styled-components";

type LoaderProps = {
  position?: "absolute" | "fixed";
  color?: "white" | "black";
};

const LoaderWrapper = styled.div<LoaderProps>`
  ${(p) =>
    p.position === "fixed" &&
    css`
      position: fixed;
    `}
  ${(p) =>
    p.position === "absolute" &&
    css`
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  & > div {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  & > div > div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: ${(p) => (p.color ? p.color : "#000")};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & > div > div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  & > div > div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & > div > div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & > div > div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
`;
export const Loader: FC<LoaderProps> = ({ position, color }) => {
  return (
    <LoaderWrapper position={position} color={color}>
      <div>
        <div />
        <div />
        <div />
        <div />
      </div>
    </LoaderWrapper>
  );
};
