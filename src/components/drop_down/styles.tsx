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
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 5px;
    width: 50px;
    text-align: center;
    padding: 5px;
    color: ${({ theme }) => theme.colors.white};
  }

  ${(p) =>
    p.isOpen &&
    css`
      & > div:last-child {
        position: absolute;
        background-color: ${({ theme }) => theme.colors.black};
        border-radius: 5px;
        padding: 10px;
        color: ${({ theme }) => theme.colors.white};
        right: 0;
        top: 0;
        border: 1px solid black;
        animation: ${dropDownAnimation} 0.5s forwards;
      }
    `}
`;

export { DropDownContainer };
