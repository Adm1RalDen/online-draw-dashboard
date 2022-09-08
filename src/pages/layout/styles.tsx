import styled from 'styled-components'

import { Container } from 'components/container'

const Layout = styled(Container)`
  min-height: 100vh;
  display: grid;
  grid-template: 50px 50px 1fr / 1fr;
`

export { Layout }
