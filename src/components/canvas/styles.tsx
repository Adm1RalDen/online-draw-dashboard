import styled from 'styled-components'

const CanvasWrapper = styled.div`
  grid-area: canvas;
  background: ${({ theme }) => theme.colors.white};
  border-right: 2px solid ${({ theme }) => theme.colors.black};
  padding: 5px 5px 2px 5px;
  & > canvas {
    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.gray};
    border-radius: 5px;
  }
`

export { CanvasWrapper }
