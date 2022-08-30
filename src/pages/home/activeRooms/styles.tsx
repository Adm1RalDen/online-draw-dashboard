import styled from "styled-components";

const Room = styled.div`
  color: #000000;
  padding: 10px 10px 10px 20px;
  border: 2px solid #000000;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  & > div {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-color: green;
    border-radius: 50%;
  }
`;

export { Room };
