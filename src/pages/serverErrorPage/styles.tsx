import styled from "styled-components";

import { FlexContainer } from "components/flex-container/styles";

const ServerErrorPageWrapper = styled(FlexContainer)`
  height: 100vh;
`;
const ServerErrorPageContent = styled.div`
  & > p {
    font-size: 30px;
    margin-bottom: 5px;
  }
  & > a {
    font-size: 20px;
  }
`;

export { ServerErrorPageWrapper, ServerErrorPageContent };
