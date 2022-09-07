import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (max-width: ${(p) => p.theme.breakPoints.desktop}) {
    padding-left: 10px;
  }
`;
