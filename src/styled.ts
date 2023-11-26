import styled, { createGlobalStyle } from 'styled-components';
import { Container } from './common/components/grid';

export const GlobalStyles = createGlobalStyle`
  html {
    min-width: 320px;
  }

  body {
    padding: 0;
    // background-color: #000;
    color: #fff;
    margin: 0;
    line-height: normal;
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

export const AppStyled = styled.main`
  z-index: -5;
  background: #000;
`;

export const ParallaxStyled = styled.div<{ bg: any }>`
  // position: absolute;
  // height: 100vh;
  // z-index: -1;

  // background-repeat: no-repeat;
  // background-attachment: fixed;
  // background-position-x: right;
  // ${({ bg }) => bg && `background-image: url(${bg});`}

  position: absolute;
  z-index: 1;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  ${({ bg }) => bg && `background: url(${bg}) top right no-repeat;`}
`;
