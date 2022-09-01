import styled from "styled-components";

const Room = styled.div`
  color: #ffffff;
  padding: 10px 10px 10px 20px;
  background-color: #0092b6;
  box-shadow: 1px 2px 3px 2px #005b71;
  text-align: center;
  border-radius: 5px;
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
