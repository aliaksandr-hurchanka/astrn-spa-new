import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { HeadingLevel2 } from "../../../../common/tokens/typography";
import { getTextStyles } from "../../../../common/utils/styles";

export const SplineStyled = styled(Spline)`
  h3 {

  }
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
`;