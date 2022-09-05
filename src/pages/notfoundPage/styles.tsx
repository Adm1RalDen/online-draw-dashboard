import styled from "styled-components";

import { FlexContainer } from "components/flex-container/styles";

const NotFoundPageWrapper = styled(FlexContainer)`
  height: 100vh;
`;

const NotFoundPageContent = styled.div`
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.big};
    margin-bottom: 5px;
  }
  & > a {
    font-size: ${({ theme }) => theme.fontSizes.middle};
  }
`;

export { NotFoundPageWrapper, NotFoundPageContent };
