import styled from 'styled-components'

export const IconWrapper = styled.div<{ width?: number; height?: number }>`
  & > svg {
    width: ${(p) => p.width ?? '20px'};
    height: ${(p) => p.height ?? '20px'};
  }
`
