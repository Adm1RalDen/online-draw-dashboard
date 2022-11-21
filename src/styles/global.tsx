import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
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
      background-color: ${({ theme }) => theme.colors.aquaGreen};
      border-radius: 30px;
    }
  }

  li{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: #6363fa;
  }

  ${normalize}
`
