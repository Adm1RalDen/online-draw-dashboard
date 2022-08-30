import styled, { css, keyframes } from "styled-components";

type DropDownContainerProps = {
  isOpen: boolean;
};

const dropDownAnimation = keyframes`
  0%{
    transform: translateY(0px);
  }
  100%{
    transform: translateY(50px);
  }
`;
const DropDownContainer = styled.div<DropDownContainerProps>`
  position: relative;

  & > div:first-child {
    cursor: pointer;
    border: 1px solid white;
    background-color: black;
    border-radius: 5px;
    width: 50px;
    text-align: center;
    padding: 5px;
    color: white;
  }

  ${(p) =>
    p.isOpen &&
    css`
      & > div:last-child {
        position: absolute;
        background-color: #000000;
        border-radius: 5px;
        padding: 10px;
        color: #ffffff;
        right: 0;
        top: 0;
        border: 1px solid black;
        animation: ${dropDownAnimation} 0.5s forwards;
      }
    `}
`;

export { DropDownContainer };
