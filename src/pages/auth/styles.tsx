import styled from 'styled-components'

import { Button } from 'components/button'
import { Container as DefaultContainer } from 'components/container'
import { Heading1, Heading2 } from 'styles/typography/styles'

export const AuthButton = styled(Button)`
  width: 100%;
  margin-top: 15px;

  &:disabled {
    background-color: transparent;
  }
`

export const AuthSection = styled.section`
  height: 100vh;
  background-color: ${(p) => p.theme.colors.greenBackground};
`

export const Container = styled(DefaultContainer)`
  display: grid;
  height: inherit;
  grid-template-columns: auto minmax(300px, 500px);
  justify-content: center;
  align-items: center;
  gap: 50px;
`

export const Wrapper = styled.div`
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 30px 20px;
`

export const Title = styled(Heading2)`
  color: ${({ theme }) => theme.colors.white};
`

export const Logo = styled(Heading1)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.white};
`
