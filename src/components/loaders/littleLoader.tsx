import { FC } from "react";
import styled, { css, keyframes } from "styled-components";

type LoaderProps = {
  position?: "absolute" | "fixed";
};
const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const LoaderWrapper = styled.div<LoaderProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
    width: 50px;
    height: 50px;

    & > div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 34px;
      height: 34px;
      margin: 8px;
      border: 4px solid #fff;
      border-radius: 50%;
      animation: ${ldsRing} 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }
    & > div:nth-child(1) {
      animation-delay: -0.25s;
    }
    & > div:nth-child(2) {
      animation-delay: -0.1s;
    }
    & > div:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
export const LittleLoader: FC<LoaderProps> = ({ position }) => {
  return (
    <LoaderWrapper position={position}>
      <div>
        <div />
        <div />
        <div />
        <div />
      </div>
    </LoaderWrapper>
  );
};
