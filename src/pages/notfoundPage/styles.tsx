import styled from "styled-components";

import { FlexContainer } from "components/flex-container/styles";

const NotFoundPageWrapper = styled(FlexContainer)`
  height: 100vh;
`;

const NotFoundPageContent = styled.div`
  & > p {
    font-size: 30px;
    margin-bottom: 5px;
  }
  & > a {
    font-size: 20px;
  }
`;

export { NotFoundPageWrapper, NotFoundPageContent };
