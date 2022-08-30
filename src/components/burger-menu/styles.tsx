import styled, { css, keyframes } from "styled-components";

type Props = {
  isOpen: boolean;
};

const BurgerWrapper = styled.div``;

const Burger = styled.div<Props>`
  width: 25px;
  height: 25px;
  position: relative;
  z-index: 4;
  cursor: pointer;

  &::before,
  ::after,
  & > span {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(p) => (p.isOpen ? "#000" : "#fff")};
    transition: all 0.3s;
  }

  &::after {
    top: 16px;
  }
  & > span {
    top: 8px;
  }

  ${(p) =>
    p.isOpen &&
    css`
      & > span {
        transform: scaleY(0);
      }
      &::before {
        left: 2px;
        top: 1px;
        transform-origin: top left;
        transform: rotate(45deg);
      }
      &::after {
        top: 18px;
        left: 2px;
        transform-origin: 0% 100%;
        transform: rotate(-45deg);
      }
    `}
`;

const animationMenu = keyframes`
  0%{
    transform: translateX(-100%)
  }
  100%{
    transform: translateX(0);
  }
`;
const NavigationMenu = styled.nav<Props>`
  width: 100%;
  padding-top: 50px;
  position: absolute;
  transform: translateX(-100%)
    ${(p) =>
      p.isOpen &&
      css`
        animation: ${animationMenu} 0.5s forwards;
      `};
  min-height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  background-color: #ffffff;

  & > ul > li {
    text-align: center;
    padding: 15px;
    position: relative;
    border-bottom: 1px solid #000000a9;

    & > a {
      color: Gold;
      font-size: 20px;
      font-weight: 400;
    }
  }
`;

export { Burger, BurgerWrapper, NavigationMenu };
