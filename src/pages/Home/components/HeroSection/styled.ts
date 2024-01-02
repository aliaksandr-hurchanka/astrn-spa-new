import styled, { css } from "styled-components";
import { Col, Container, Row } from "../../../../common/components/grid";
import { Image } from '../../../../common/components/image';
import { HeadingLevel1 } from "../../../../common/tokens/typography";
import { getTextStyles } from "../../../../common/utils/styles";
import LinesImage from '../../../../assets/home/Lines.png';
import FoundationImage from '../../../../assets/home/Foundation.png';
import MinerImage from '../../../../assets/home/miner.png';
import { ParallaxBanner } from "react-scroll-parallax";
import { ADAPTIVE } from "../../../../common/tokens/screen";


export const HeroSectionStyled = styled.div``;

export const ParallaxBannerStyled = styled(ParallaxBanner)`
  ${ADAPTIVE.minWidth.mobile} {
    height: 100dvh;
  }
`;

export const LinesLayerStyled = styled.div<{
  isMobileView?: boolean;
  isTabletView?: boolean;
  isMiddleDesktopView?: boolean;
}>`
  z-index: 2;
  background: url(${LinesImage}) no-repeat;
  height: 636px;
  width: 100%;
  background-position-x: center;

  ${({ isMobileView }) => isMobileView && css`
    background-size: 100% auto;
    background-position-y: 10%;
  `}
  ${({ isTabletView }) => isTabletView && css`
    background-size: 100% auto;
    background-position-y: 20%;
  `}

  -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both;
	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both;

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`;

export const FoundationLayerStyled = styled.div<{ isTabletView?: boolean; isMiddleDesktopView?: boolean }>`
  z-index: 4;
  background: url(${FoundationImage}) no-repeat;
  height: 463px;
  width: 100%;
  background-position-x: center;
  ${({ isTabletView }) => isTabletView && 'background-size: auto 350px;'}
`;

export const MinerLayerStyled = styled.div<{
  isMobileView?: boolean,
  isTabletView?: boolean,
  isMiddleDesktopView?: boolean,
  isDesktopView?: boolean
}>`
  z-index: 3;
  background: url(${MinerImage}) no-repeat;
  background-size: contain;
  height: 300px;
  width: 300px;
  ${({ isMobileView }) => isMobileView && 'background-size: auto 300px;'}
  ${({ isTabletView }) => isTabletView && 'background-size: auto 350px;'}
  background-position-y: 17%;

  ${ADAPTIVE.minWidth.tablet} {
    height: 500px;
    width: 500px;    
  }

  -webkit-animation: slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  
  @-webkit-keyframes slide-left {
    0% {
      -webkit-transform: translateX(100px);
              transform: translateX(100px);
    }
    100% {
      -webkit-transform: translateX(0px);
              transform: translateX(0px);
    }
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(100px);
              transform: translateX(100px);
    }
    100% {
      -webkit-transform: translateX(0px);
              transform: translateX(0px);
    }
  }
`;

export const ColStyled = styled(Col)``;

export const TestStyled = styled.div`
  opacity: 0;
    -webkit-transform: scale(0.9);
        -moz-transform: scale(0.9);
        -ms-transform: scale(0.9);
          -o-transform: scale(0.9);
            transform: scale(0.9);
    -webkit-transition: all 1s ease-in-out;
        -moz-transition: all 1s ease-in-out;
        -ms-transition: all 1s ease-in-out;
          -o-transition: all 1s ease-in-out;
            transition: all 1s ease-in-out;
  &.visible {
    opacity: 1;
    -webkit-transform: none;
        -moz-transform: none;
        -ms-transform: none;
          -o-transform: none;
            transform: none;
  }
`;

export const HeadingLevel1Styled = styled(HeadingLevel1)`
  color: #FFB22E;
  text-shadow: 3px -1px 15px rgba(0,0,0,1);
  > span {
    color: #fff;
  }
`;

export const RowStyled = styled(Row)`
  position: relative;
  background: var(--Gold-gradient, radial-gradient(46.25% 45.98% at 0% 46.5%, #3A2813 0%, #010101 100%));
`;

export const AsteronIconStyled = styled.img`
  position: relative;
  width: 121.5px;
  height: 21.24px;
`;
export const LogoStyled = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: 88px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;

export const ImageStyled = styled(Image)`
  display: flex;
  align-items: center;
  margin-top: -80px;
`;

export const Navigation1Styled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 80px;
`;
export const ImageContainerStyled = styled.div`
  position: absolute;
  top: 192px;
  left: 736px;
  width: 554px;
  height: 464px;
`;
export const AdditionalTerahash = styled.span``;
export const ForYourDevices = styled.span`
  color: var(--colors-text-primary);
`;
export const AdditionalTerahashForContainer = styled.b`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 60px;
  text-transform: uppercase;
  display: inline-block;
  width: 513px;
`;
export const DescriptionStyled = styled.p`
  ${getTextStyles('Montserrat', 400, 16, 24)}
  text-shadow: 3px -1px 15px rgba(0,0,0,1);
  color: #fff;
  position: relative;
  z-index: 1;
`;
export const SectionStyled = styled.div`
  z-index: 5;
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: var(--header-h1-size);
  color: var(--colors-primary);

  -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both;
	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both;

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ContainerStyled = styled(Container)`
  height: 768px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
