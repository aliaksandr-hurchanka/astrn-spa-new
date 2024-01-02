import styled, { css } from 'styled-components';
import { Col, Container } from '../../../../common/components/grid';
import { getTextStyles } from '../../../../common/utils/styles';
import { textLayerShadow } from '../../../../common/tokens/elevations';
import { RegularTextLevel1 } from '../../../../common/tokens/typography';
import { ADAPTIVE } from '../../../../common/tokens/screen';

export const ReliabilityStyled = styled.div`
  ${ADAPTIVE.maxWidth.mobile} {
    height: 500px;
  }

  ${ADAPTIVE.minWidth.tablet} {
    min-height: 612px;
  }

  ${ADAPTIVE.minWidth.tablet} {
    height: 612px;
  }
`;

export const ContainerStyled = styled(Container)`

  ${ADAPTIVE.minWidth.mobile} {
    min-height: 450px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    min-height: 618px;
  }
`;

export const GradientLayerStyled = styled.div`

  ${ADAPTIVE.minWidth.mobile} {
    background-size: 800px 311px;
    background-repeat: no-repeat;
    background-position-y: 100px;
    background-position-x: -200px;
    height: 711px;
  }

  ${ADAPTIVE.minWidth.tablet} {
    min-height: 218px;
    background-size: 800px 218px;
    background-position-y: 150px;
    background-position-x: 50px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    background-size: 1000px 300px;
    background-position-y: 200px;
    background-position-x: 50px;
  }

  ${ADAPTIVE.minWidth.desktopMd} {
    background-size: 1200px 300px;
    background-position-y: 100px;
    background-position-x: 50px;
  }

  ${ADAPTIVE.minWidth.desktopLg} {
    min-height: 618px;
    background-size: 1200px 500px;
    background-position-y: 100px;
    background-position-x: 150px;
  }

  background: radial-gradient(29.32% 39.65% at 50% 50%, #1D4079 0.02%, rgba(1, 1, 1, 0.00) 100%);
`;

export const LineStyled = styled.div`
  ${ADAPTIVE.minWidth.mobile} {
    width: 344px;
    position: relative;
    top: 150px;
    left: 20%;
  }

  ${ADAPTIVE.minWidth.tablet} {
    width: 400px;
    top: -30px;
    transform: rotate(-15deg);
  }

  ${ADAPTIVE.minWidth.desktop} {
    width: 600px;
    position: relative;
    top: 0px;
    left: 35%;
    transform: rotate(-5deg);
  }

  ${ADAPTIVE.minWidth.desktopMd} {
    width: 450px;
    position: relative;
    top: 0px;
    left: 30%;
    transform: rotate(-10deg);
  }

  ${ADAPTIVE.minWidth.desktopLg} {
    width: 800px;
    position: relative;
    top: 30px;
    left: 40%;
    transform: rotate(0deg);
  }
`;

export const HeadingStyled = styled.div`
  
  color: #FFB22E;
  text-shadow: ${textLayerShadow};

  ${ADAPTIVE.minWidth.mobile} {
    ${getTextStyles('Montserrat', 700, 20, 30)}
    margin-bottom: 14px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles('Montserrat', 700, 24, 32)}
  }
`;

export const RegularTextStyled = styled(RegularTextLevel1)`
  text-shadow: ${textLayerShadow};
`;

export const ColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  
  ${ADAPTIVE.minWidth.mobile} {
    text-align: right;
  }

  ${ADAPTIVE.minWidth.tablet} {
    justify-content: end;
  }

  ${ADAPTIVE.minWidth.desktop} {
    justify-content: center;
    gap: 16px;
    z-index: 5;
    padding-top: 180px;
  }
`;

export const ColValueStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  text-align: left;

  ${ADAPTIVE.minWidth.tablet} {
    text-align: left;
    justify-content: start;
  }

  ${ADAPTIVE.minWidth.desktop} {
    text-align: left;
    justify-content: end;
  }
`;

export const ValueStyled = styled.div<{ deg?: number }>`
  align-self: stretch;
  ${({ deg }) => deg && css`
    background: linear-gradient(${deg}deg, #ffb22e 0%, #2ed9ff 0%, #ffb22e 59%, #2ed9ff 100%);
  `}
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  ${ADAPTIVE.minWidth.mobile} {
    ${getTextStyles('Montserrat', 400, 72, 72)}
  }

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles('Montserrat', 500, 128, 128)}
  }
`;

export const ValueTextStyled = styled.div`
  ${getTextStyles('Montserrat', 400, 36, 44)}
  color: #FFB22E;
`;
