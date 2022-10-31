import styled from 'styled-components'

import { Heading2 } from 'styles/typography/styles'

const Heading = styled(Heading2)`
  color: ${({ theme }) => theme.colors.white};
`

export { Heading }
