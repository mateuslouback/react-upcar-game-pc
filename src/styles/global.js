import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.svg';

export default createGlobalStyle`
  @import url('https://fontlibrary.org/face/minecraftia');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    min-height: 100%;
  }

  body, input {
    font-family: 'MinecraftiaRegular', sans-serif;
    font-size: 1.6rem;
    -webkit-font-smooting: antialiased !important;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::selection {
    background: #FFFF6C;
    color: #fff;
  }

  #root {
    background-image: url(${bg});
    background-color: #0094FF;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
