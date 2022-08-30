import styled, { css } from "styled-components";

const StyledToolbar = styled.div`
  grid-area: toolbar;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 2px solid #000;

  & > div:last-child {
    & > button:first-child {
      transform: rotate(180deg);
    }
  }
  & > div {
    display: flex;
    gap: 10px;
    & > input {
      margin-top: 5px;
    }
  }
`;

type ToolButtonProps = {
  img: string;
  active?: boolean;
};

const ToolButton = styled.button<ToolButtonProps>`
  display: inline-block;
  padding: 5px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  background: none;
  border-radius: 5px;
  border: 2px solid #ffffff;

  ${(p) =>
    p.active &&
    css`
      border: 2px solid #000;
    `};

  ${(p) =>
    p.img &&
    css`
      background-image: url(${p.img});
      background-size: 30px 30px;
      background-position: center center;
      background-repeat: no-repeat;
    `}
`;

const LeaveButton = styled.button`
  width: 100px;
  background-color: #165bb4;
  color: #fff;
  cursor: pointer;
  padding: 5px;
  appearance: none;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: #006eff;
    color: #fff;
  }
  &:focus {
    ${(p) => p.theme.shadows.buttonFocus}
  }
`;

export { ToolButton, StyledToolbar, LeaveButton };
