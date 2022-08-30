import styled from "styled-components";
type Props = {
  active: boolean;
};
const CardSettings = styled.ul`
  position: absolute;
  top: 10px;
  right: 40px;
  width: 150px;
  list-style-type: none;
  background-color: #000;
  color: #fff;
  padding: 5px;

  & > li {
    padding: 5px;
    &:hover {
      background: #fff;
      color: #000;
    }
  }
`;

const RoomCard = styled.div<Props>`
  flex-grow: 1;
  padding: 10px;
  background-color: ${(p) => (p.active ? "#fff" : "#ffffff76")};
  transition: 0.3s all;
  position: relative;

  &:hover {
    background-color: #ffffff;
  }
  &:hover span {
    display: block;
  }

  & > span {
    display: ${(p) => (p.active ? "#block" : "none")};
    position: absolute;
    right: 0;
    top: 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transition: 0.3s all;
  }

  color: black;
  cursor: pointer;
`;

export { RoomCard, CardSettings };
