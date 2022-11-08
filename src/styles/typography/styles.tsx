import styled from 'styled-components'

export const Heading1 = styled.h1<{ color?: string }>`
  font-size: 1.5em;
  font-weight: 400;
  margin: 0;
  color: ${(p) => (p.color ? p.color : p.theme.colors.black)};
`

export const Heading2 = styled.h2<{ color?: string }>`
  font-size: 1.4em;
  font-weight: 400;
  color: ${(p) => (p.color ? p.color : p.theme.colors.black)};
`

export const Heading3 = styled.h3<{ color?: string }>`
  font-size: 1.2em;
  font-weight: 400;
  color: ${(p) => (p.color ? p.color : p.theme.colors.black)};
`

export const Heading4 = styled.h4<{ color?: string }>`
  font-size: 1.1em;
  font-weight: 400;
  line-height: 24px;
  color: ${(p) => (p.color ? p.color : p.theme.colors.black)};
`

export const Heading5 = styled.h5<{ color?: string }>`
  font-size: 1em;
  font-weight: 400;
  color: ${(p) => (p.color ? p.color : p.theme.colors.black)};
`

export const Heading6 = styled.h6<{ color?: string }>`
  font-size: 0.9em;
  font-weight: 400;
  color: ${(p) => (p.color ? p.color : p.theme.colors.black)};
`

export const Span = styled.span<{ color?: string }>`
  font-size: 0.9em;
  font-weight: 300;
  color: ${(p) => (p.color ? p.color : p.theme.colors.black)};
`

export const Paragraph = styled.p<{ color?: string }>`
  font-size: 1em;
  font-weight: 400;
  color: ${(p) => (p.color ? p.color : p.theme.colors.black)};
`
