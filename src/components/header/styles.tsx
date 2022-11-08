import styled from 'styled-components'

export const HeaderComponent = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const BurgerWrapper = styled.div`
  display: none;
  @media screen and (max-width: ${(p) => p.theme.breakPoints.tablet}) {
    display: block;
  }
`

export const HeaderNavigation = styled.nav`
  @media screen and (max-width: ${(p) => p.theme.breakPoints.tablet}) {
    display: none;
  }

  & > ul > li {
    list-style-type: none;
    display: inline-block;
    width: 100px;
    padding: 10px;
    padding-left: 0;
    position: relative;

    & > a {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`

export const HeaderUserBlock = styled.div`
  display: flex;
`
