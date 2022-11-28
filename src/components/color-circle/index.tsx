import styled from 'styled-components'

export const ColorCircle = styled.span<{ color?: string }>`
  display: inline-block;
  background: ${(p) => p.color ?? p.theme.colors.black};
  width: 10px;
  height: 10px;
  border-radius: 10px;
`
