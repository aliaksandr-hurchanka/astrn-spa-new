import styled, { createGlobalStyle } from 'styled-components';
import MainGradient from './assets/gradients/main-gradient.svg'

export const GlobalStyles = createGlobalStyle`
  html {
    min-width: 320px;
  }

  body {
    font-family: 'Montserrat';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    color: #fff;
    margin: 0;
    line-height: normal;
    background-color: #000;

    #root {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  }

  :root {

    /* fonts */
    --header-h5: Montserrat;
    --display-lg-medium: Poppins;

    /* font sizes */
    --scale-xs-size: 12px;
    --text-md-regular-size: 16px;
    --text-sm-regular-size: 14px;
    --header-h5-size: 20px;
    --header-h1-size: 48px;
    --display-xs-medium-size: 24px;
    --header-h2-size: 36px;
    --scale-lg-size: 18px;

    /* Colors */
    --colors-background: #000;
    --colors-primary: #ffb22e;
    --color-silver: #bfbfbf;
    --palette-gray-grey-800: #1f1f1f;
    --gray-5001: #667085;
    --gray-500: #556987;
    --colors-text-primary: #fff;
    --gray-200: #d5dae1;
    --gray-700: #404f65;
    --gray-800: #333f51;
    --gray-900: #2a3342;
    --colors-text-secondary: #f0f0f0;
    --gray-400: #8896ab;

    /* Gaps */
    --gap-5xs: 8px;
    --gap-5xl: 24px;
    --gap-7xs: 6px;
    --gap-9xs: 4px;
    --gap-29xl: 48px;
    --gap-45xl: 64px;

    /* Paddings */
    --padding-xs: 12px;
    --padding-lg: 18px;
    --padding-3xs: 10px;
    --padding-sm: 14px;
    --padding-13xl: 32px;
    --padding-2xl: 21px;
    --padding-base: 16px;
    --padding-9xl: 28px;
    --padding-5xs: 8px;

    /* Border radiuses */
    --br-7xs: 6px;
    --br-5xs: 8px;
    --br-7xs-3: 5.3px;
  }`;

  export const SectionStyled = styled.section`
    background: url('${MainGradient}') no-repeat;
    background-position: top center;
  `;
