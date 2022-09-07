import styled from "styled-components";

const EditorWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.littleDarkWhite};
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 10px 0px;
  border-radius: 10px;
  overflow: hidden;

  & > textarea {
    position: absolute;
    opacity: 0;
  }
`;

export { EditorWrapper };
