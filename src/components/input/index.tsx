import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 30px 0px 10px;
  border-radius: 2px;
  background-color: ${(p) => p.theme.colors.white};
  border: 2px solid ${(p) => p.theme.colors.light_gray};
`;
