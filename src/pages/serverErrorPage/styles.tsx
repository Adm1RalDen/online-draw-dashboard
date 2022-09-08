import styled from 'styled-components'

import { FlexContainer } from 'components/flex-container'

const ServerErrorPageWrapper = styled(FlexContainer)`
  height: 100vh;
`
const ServerErrorPageContent = styled.div`
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.big};
    margin-bottom: 5px;
  }
  & > a {
    font-size: ${({ theme }) => theme.fontSizes.middle};
  }
`

export { ServerErrorPageWrapper, ServerErrorPageContent }
