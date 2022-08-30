import styled from "styled-components";

const CanvasSection = styled.section`
  width: 100%;
  padding-top: 10px;
  min-height: 100vh;
  background-color: #0d6deb;
`;

const Layout = styled.div`
  max-width: 1400px;
  max-height: 100vh;
  margin: 0 auto;
  display: grid;
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
