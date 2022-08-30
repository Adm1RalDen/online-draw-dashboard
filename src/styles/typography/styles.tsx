import styled from "styled-components";

type TypographyProps = {
  color?: string;
};

export const MainTitle = styled.h1<TypographyProps>`
  font-size: 32px;
  color: ${(p) => p.color || "#000"};
`;

export const Heading3 = styled.h4<TypographyProps>`
  font-size: 26px;
  color: ${(p) => p.color || "#000"};
`;

export const Heading4 = styled.h4<TypographyProps>`
  font-size: 22px;
  font-weight: 400;
  color: ${(p) => p.color || "#000"};
`;
