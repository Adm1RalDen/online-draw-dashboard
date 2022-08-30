import styled from "styled-components";

const ServerErrorPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ServerErrorPageContent = styled.div`
  & > p {
    font-size: 30px;
    font-weight: 400;
    font-family: Roboto;
    margin-bottom: 5px;
  }
  & > a {
    display: inline-block;
    text-decoration: none;
    font-size: 20px;
  }
`;

export { ServerErrorPageWrapper, ServerErrorPageContent };
