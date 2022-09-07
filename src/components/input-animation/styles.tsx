import styled, { css } from "styled-components";

type InputWrapperProps = {
  isError: boolean;
  hasValue: boolean;
  margin?: string;
};

const ErrorSpan = styled.span`
  position: absolute;
  width: 30px;
  overflow: hidden;
  background: url("/assets/warning.png") no-repeat;
  background-size: 30px 30px;
  top: 10px;
  right: 5px;
  height: 30px;
  color: ${({ theme }) => theme.colors.red};
`;
const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  padding-top: 5px;
  ${(p) =>
    p.margin &&
    css`
      margin: ${p.margin};
    `};

  & > input {
    height: 40px;
    position: relative;
    caret-color: ${({ theme }) => theme.colors.blue};
    border: 2px solid ${(p) => p.theme.colors.light_gray};
    border-radius: 5px;
    outline: none;
    ${(p) =>
      p.isError &&
      css`
        border: 2px solid red;
        caret-color: ${({ theme }) => theme.colors.red};
      `}

    &:focus {
      box-shadow: 0px 0px 1px 1px ${({ theme }) => theme.colors.middleBlue};
      border: 2px solid ${({ theme }) => theme.colors.blue};

      ${(p) =>
        p.isError &&
        css`
          border-color: ${({ theme }) => theme.colors.red};
          box-shadow: 0px 0px 1px 1px red;
        `}
    }

    &:focus ~ label {
      top: -10px;
      color: ${({ theme }) => theme.colors.blue};
      ${(p) =>
        p.hasValue &&
        css`
          opacity: 1;
        `}
      background-color: ${({ theme }) => theme.colors.white};
      border-left: 2px solid ${({ theme }) => theme.colors.blue};
      border-right: 2px solid ${({ theme }) => theme.colors.blue};
      border-top: 2px solid ${({ theme }) => theme.colors.blue};
      border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
      padding: 2px 4px;
      ${(p) =>
        p.isError &&
        css`
          border-color: ${({ theme }) => theme.colors.red};
          color: ${({ theme }) => theme.colors.red};
        `}
    }
  }
  & > label {
    transition: 0.3s;
    position: absolute;
    top: 19px;
    left: 5px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.middleGray};

    ${(p) =>
      p.hasValue &&
      css`
        opacity: 0;
      `}
    font-weight: 400;
    pointer-events: none;
    ${(p) =>
      p.isError &&
      css`
        color: ${({ theme }) => theme.colors.red};
      `}
  }
`;

export { InputWrapper, ErrorSpan };
