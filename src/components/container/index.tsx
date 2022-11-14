import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-left: 0px;
  }
`
