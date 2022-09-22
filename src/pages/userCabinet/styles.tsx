import styled from 'styled-components'

import { Button } from 'components/button'

const UserCabinetSection = styled.section`
  background-color: ${({ theme }) => theme.colors.greenBackground};
  padding: 15px 0px;
`

const Wrapper = styled.div`
  display: grid;
  grid-template: 350px minmax(100px, auto) auto / minmax(100px, 350px) 1fr;
  gap: 30px;
`

const ImagesWrapper = styled.div`
  grid-column: 1/3;
  position: relative;
  padding-bottom: 60px;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px ${({ theme }) => theme.colors.aqua};
  border: 2px solid ${(p) => p.theme.colors.light_gray};
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    transition: all 1s linear;
    border-bottom: 2px solid ${(p) => p.theme.colors.light_gray};
    &:hover {
      transform: scale(110%);
    }
  }
`

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
`

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
  }
`

const UserInfoWrapper = styled.div`
  grid-column: 1/3;
  border-radius: 10px;
  display: grid;
  grid-template: minmax(150px, auto) minmax(50px, auto) / 1fr;
  box-shadow: 2px 2px 10px 1px ${({ theme }) => theme.colors.aqua};
`

const UserInfo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 2px solid ${(p) => p.theme.colors.light_gray};
`

const InfoWrapper = styled.div`
  width: 100%;
  font-weight: 400;
  padding: 10px 10px;
  border-bottom: 2px solid ${(p) => p.theme.colors.light_gray};

  &:last-child {
    border-bottom: none;
  }

  & > p {
    font-size: 18px;
    display: inline-block;
    min-width: 100px;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.smallUp};

    & > span {
      margin-left: 5px;
      font-weight: 300;
    }
  }
`

type Props = {
  color: string
}

const ColorSpan = styled.span<Props>`
  display: inline-block;
  background: ${(p) => p.color || 'transparent'};
  width: 10px;
  height: 10px;
  border-radius: 10px;
`

const Biography = styled.div`
  color: #fff;
  font-weight: 600;
  padding: 5px 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: justify;
  font-weight: 400;
  display: flex;
  align-items: center;
  border: 2px solid ${(p) => p.theme.colors.light_gray};
  border-top: none;

  & > p {
    min-width: 100px;
    font-size: ${({ theme }) => theme.fontSizes.smallUp};
    padding: 10px 5px 10px 0px;
  }
`

const ButtonWrapper = styled.div`
  background-color: transparent;
  box-shadow: 2px 2px 10px 1px ${({ theme }) => theme.colors.aqua};
  border: 2px solid ${(p) => p.theme.colors.light_gray};
  padding: 10px;
  border-radius: 10px;
  grid-column: 1/3;
`

const CabinetButton = styled(Button)`
  margin-right: 10px;
  width: 100px;
`

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
  InfoWrapper,
  ColorSpan,
  CabinetButton
}
