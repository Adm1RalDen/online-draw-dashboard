import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: ${(p) => p.theme.colors.aqua};
  font-weight: 400;
  color: ${(p) => p.theme.colors.white};
  border-radius: 5px;
  transition: all 0.3s ease-in;
  border: 2px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:disabled {
    background-color: ${(p) => p.theme.colors.darkAqua};
    cursor: no-drop;
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.lightAqua};
  }
`;
