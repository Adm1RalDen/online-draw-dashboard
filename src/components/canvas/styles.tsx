import styled from 'styled-components'

export const CanvasWrapper = styled.div`
  grid-area: canvas;
  background: ${({ theme }) => theme.colors.aqua};
  border-right: 2px solid ${({ theme }) => theme.colors.black};
  padding: 10px 10px 2px 10px;
  & > canvas {
    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.gray};
    border-radius: 5px;
  }
`
