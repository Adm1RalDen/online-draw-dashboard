import styled from "styled-components";

import { Container } from "components/container/styles";

const CanvasSection = styled.section`
  padding-top: 10px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.greenBackground};
`;

const Layout = styled(Container)`
  display: grid;
  max-height: 100vh;
  gap: 5px;
  grid-template: 52px 52px 1fr / 1fr 200px;
  grid-template-areas:
    "toolbar toolbar"
    "settings settings"
    "canvas roomUsers";
  & > div {
    border-radius: 5px;
  }
`;

export { CanvasSection, Layout };
