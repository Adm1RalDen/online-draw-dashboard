import styled from "styled-components";

const AvatarEditWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;

  & > div > img {
    border-radius: 50%;
    box-shadow: 2px 2px 5px 1px #3b3b3b;
  }
`;

export { AvatarEditWrapper };
