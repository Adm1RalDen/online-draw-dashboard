import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing:border-box;
    padding: 0;
    margin: 0;
  }
 
  html, body{
    height: 100%;
  }

  body{
    overflow-x: hidden;
    font-family: Roboto;
    min-height: 100vh;

  }

  li{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: #6363fa;
  }

  .image_default_styles{
    object-fit: cover;
    aspect-ratio: 1/1;
  }

  ${normalize}

  @keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

`;
