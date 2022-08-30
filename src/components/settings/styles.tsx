import styled from "styled-components";

const StyledSettings = styled.div`
  grid-area: settings;
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: #fff;
  gap: 20px;
  border-bottom: 2px solid #000;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export { StyledSettings };
