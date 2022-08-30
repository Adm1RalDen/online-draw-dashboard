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
  color: red;
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
    width: 100%;
    height: 40px;
    position: relative;
    caret-color: #0a87e1;
    padding: 0px 30px 0px 10px;
    border-radius: 5px;
    border: 2px solid ${(p) => p.theme.colors.light_gray};
    outline: none;
    ${(p) =>
      p.isError &&
      css`
        border: 2px solid red;
        caret-color: red;
      `}

    &:focus {
      box-shadow: 0px 0px 1px 1px #0c94f6;
      border: 2px solid #0a87e1;

      ${(p) =>
        p.isError &&
        css`
          border-color: red;
          box-shadow: 0px 0px 1px 1px red;
        `}
    }

    &:focus ~ label {
      top: -10px;
      color: #0a87e1;
      ${(p) =>
        p.hasValue &&
        css`
          opacity: 1;
        `}
      background-color: white;
      border-left: 2px solid #0a87e1;
      border-right: 2px solid #0a87e1;
      border-top: 2px solid #0a87e1;
      border-bottom: 2px solid #0a87e1;
      padding: 2px 4px;
      ${(p) =>
        p.isError &&
        css`
          border-color: red;
          color: red;
        `}
    }
  }
  & > label {
    transition: 0.3s;
    position: absolute;
    top: 19px;
    left: 5px;
    font-size: 12px;
    color: ${(p) => p.theme.colors.light_gray};

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
        color: red;
      `}
  }
`;

export { InputWrapper, ErrorSpan };
