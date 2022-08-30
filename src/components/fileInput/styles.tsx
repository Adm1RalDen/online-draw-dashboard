import styled, { keyframes } from "styled-components";

const spanAnimation = keyframes`
  0%{
    transform: translateX(-100px);
  }
  100%{
    max-width: 200px;
    opacity: 1;
    transform: translateX(10px);
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  height: 45px;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SpanWrapper = styled.div`
  max-width: 200px;
  height: 100%;
  position: relative;
  z-index: 2;
  opacity: 0;
  border: 4px solid ${(p) => p.theme.colors.darkBlue};
  padding: 10px;
  animation: ${spanAnimation} 0.5s linear forwards;
`;

const FileName = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

const CloseDiv = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
  border-radius: 50%;
  right: -10px;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(p) => p.theme.colors.darkBlue};
  cursor: pointer;
`;
const FileInputStyled = styled.input`
  position: absolute;
  display: block;
  top: 0;
  width: 0;
  height: 0;
`;

const LoadButton = styled.button`
  max-width: 200px;
  min-width: 100px;
  height: 100%;
  padding: 10px;
  position: relative;
  z-index: 3;
  background-color: ${(p) => p.theme.colors.blue};
  color: #ffffff;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 4px solid ${(p) => p.theme.colors.darkBlue};
  transition: all 0.3s linear;

  &:hover {
    background-color: ${(p) => p.theme.colors.darkBlue};
  }
`;

export {
  ContentWrapper,
  Wrapper,
  LoadButton,
  SpanWrapper,
  FileName,
  FileInputStyled,
  CloseDiv,
};
