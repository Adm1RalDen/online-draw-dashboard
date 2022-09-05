import styled, { css } from "styled-components";

import { Button } from "components/button";
import { FlexContainer } from "components/flex-container/styles";

type ToolButtonProps = {
  img: string;
  active?: boolean;
};

const StyledToolbar = styled(FlexContainer)`
  padding: 5px;
  grid-area: toolbar;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`;

const SnapshotButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  & > button:first-child {
    transform: rotate(180deg);
  }
`;

const DrawToolsWrapper = styled.div`
  display: flex;
  gap: 10px;
  & > input {
    margin-top: 5px;
  }
`;

const ToolButton = styled.button<ToolButtonProps>`
  display: inline-block;
  padding: 5px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  background: transparent;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.white};

  ${(p) =>
    p.active &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.black};
    `};

  ${(p) =>
    p.img &&
    css`
      background-image: url(${p.img});
      background-size: 30px 30px;
      background-position: center center;
      background-repeat: no-repeat;
    `}
`;

const LeaveButton = styled(Button)`
  width: 100px;
  background-color: ${({ theme }) => theme.colors.greenBackground};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenLiteBackground};
  }
  &:focus {
    ${(p) => p.theme.shadows.buttonFocus}
  }
`;

export {
  ToolButton,
  StyledToolbar,
  LeaveButton,
  SnapshotButtonsWrapper,
  DrawToolsWrapper,
};
