import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
  }

  *::before, *::after {
    box-sizing: border-box;
  }
  
  html, body{
    height: 100%;
  }

  body{
    overflow-x: hidden;
    font-family: Roboto;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.greenBackground};

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.darkSlateGray};
      border-radius: 30px;
    }
  }

  li{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dodgerBlue};
  }

  .custom__wysiwig__wrapper {
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.s};
}

.custom__wysiwig__toolbar {
  box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
}

.custom__wysiwig__editor{
  height: 200px;
  overflow: auto;
  padding: ${({ theme }) => `0 ${theme.spacing.s}`};
  background-color: ${({ theme }) => theme.colors.white};
  caret-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.white};

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 3px;
  }
}
`
