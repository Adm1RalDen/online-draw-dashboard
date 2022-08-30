import styled, { css } from "styled-components";

type ButtonProps = {
  margin?: string;
  background?: string;
  color?: string;
  width?: string;
};

export const Button = styled.button<ButtonProps>`
  position: relative;
  padding: 10px;
  width: ${(p) => (p.width ? p.width : "100px")};
  ${(p) =>
    p.margin &&
    css`
      margin: ${p.margin};
    `};
  background-color: ${(p) => p.background || "#006eff"};
  color: ${(p) => p.color || "black"};
  border-radius: 5px;
  transition: all 0.3s ease-in;
  border: none;
  cursor: pointer;
  border: 2px solid #fff;

  &:disabled {
    background-color: transparent;
    cursor: no-drop;
  }

  &:hover:not([disabled]) {
    background-color: ${(p) => p.background || "#0063e4"};
  }
`;
