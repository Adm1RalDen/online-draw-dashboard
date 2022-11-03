import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template: 50px 1fr 50px / 1fr;
  grid-gap: 10px;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.light_gray};
`
