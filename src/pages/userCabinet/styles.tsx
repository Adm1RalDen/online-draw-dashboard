import styled from "styled-components";

const UserCabinetSection = styled.section`
  & > div {
    max-width: 1400px;
    padding: 5px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template: 350px minmax(100px, auto) auto / minmax(100px, 350px) 1fr;
  gap: 30px;
`;

const ImagesWrapper = styled.div`
  grid-column: 1/3;
  position: relative;
  padding-bottom: 60px;
  border: 10px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px ${({ theme }) => theme.colors.middleGray};
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    transition: all 1s linear;

    &:hover {
      transform: scale(110%);
    }
  }
`;

const AvatarWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  gap: 20px;
  padding-left: 60px;
  align-items: flex-start;

  @media screen and (max-width: 700px) {
    padding-left: 10px;
  }

  & > div:last-child {
    padding-top: 40px;
    font-size: ${({ theme }) => theme.fontSizes.middleUp};
    filter: invert(1);
    font-weight: 400;
  }
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    aspect-ratio: 1/1;
    object-fit: cover;
    box-shadow: 0px 0px 5px 1px black;
  }
`;

const UserInfoWrapper = styled.div`
  grid-column: 1/3;
  border-radius: 10px;
  display: grid;
  grid-template: minmax(150px, auto) minmax(50px, auto) / 1fr;
  box-shadow: 2px 2px 10px 1px ${({ theme }) => theme.colors.middleGray};
`;

const UserInfo = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  & > div {
    width: 100%;
    font-weight: 400;
    padding: 10px 10px;
    border-bottom: 2px solid ${(p) => p.theme.colors.light_gray};

    & > span {
      display: inline-block;
      min-width: 100px;
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSizes.smallUp};
    }
  }
`;

const Biography = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  padding: 5px 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: justify;
  font-weight: 400;
  display: flex;
  align-items: center;

  & > p {
    min-width: 100px;
    font-size: ${({ theme }) => theme.fontSizes.smallUp};
    padding: 10px 5px 10px 0px;
  }
`;

const ButtonWrapper = styled.div`
  box-shadow: 2px 2px 10px 1px ${({ theme }) => theme.colors.middleGray};
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  grid-column: 1/3;

  & > button {
    width: 100px;
  }
`;

export {
  UserCabinetSection,
  Wrapper,
  ImagesWrapper,
  UserInfo,
  Biography,
  UserInfoWrapper,
  Avatar,
  AvatarWrapper,
  ButtonWrapper,
};
