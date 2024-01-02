import styled from "styled-components";
import { HeadingLevel2 } from "../../../../common/tokens/typography";
import { getTextStyles } from "../../../../common/utils/styles";
import ImageBg from '../../../../assets/performance/hole.png';
import { Col, Container } from "../../../../common/components/grid";
import { ADAPTIVE } from "../../../../common/tokens/screen";
import { ParallaxBanner } from "react-scroll-parallax";

export const GradientLayerStyled = styled.div`
  background: url(${ImageBg}) no-repeat;
  background-position: top center;
  background-position-y: 0px;
  height: 100%;
  width: 100%;
`;

export const PerformanceTitleStyled = styled(HeadingLevel2)`
  text-transform: uppercase;
  text-align: center;
  span {
    color: #FFB22E;
  }
`;

export const PerformanceSubTitleStyled = styled.div`
  text-align: center;
  ${getTextStyles('Montserrat', 400, 16, 24)}
`;

export const OverlayStyled = styled.div`
  position: absolute;
  background-color: #fff;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const TextStyled = styled.div`
  ${getTextStyles('Montserrat', 700, 24, 32)}
  width: 288px;
`;

export const ContainerStyled = styled(Container)`
  ${ADAPTIVE.minWidth.tablet} {
    height: 700px;
  }
`;

export const ColStyled = styled<any>(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${ADAPTIVE.minWidth.mobile} {
    align-items: ${({ alignItems }) => alignItems ? `${alignItems}` : 'center'};
  }

  ${ADAPTIVE.minWidth.desktop} {
    align-items: center;
  }
`;

export const ParallaxBannerStyled = styled(ParallaxBanner)`
  ${ADAPTIVE.minWidth.mobile} {
    aspect-ratio: 1 / 2;
  }

  ${ADAPTIVE.minWidth.tablet} {
    aspect-ratio: 1 / 1;
  }

  ${ADAPTIVE.minWidth.desktop} {
    aspect-ratio: 2 / 1;
  }
`;
