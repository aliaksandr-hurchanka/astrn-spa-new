import styled from "styled-components";
import { getTextStyles } from "../../../../common/utils/styles";
import { Col, Container, Row } from "../../../../common/components/grid";
import { HeadingLevel3 } from "../../../../common/tokens/typography";
import { ADAPTIVE } from "../../../../common/tokens/screen";

export const TitleStyled = styled(HeadingLevel3)`
  text-transform: uppercase;

  ${ADAPTIVE.minWidth.mobile} {
    ${getTextStyles('Montserrat', 400, 30, 38)}
    margin-bottom: 80px;
  }

  ${ADAPTIVE.minWidth.tablet} {
    ${getTextStyles('Montserrat', 400, 36, 44)}
    margin-bottom: 40px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles('Montserrat', 400, 48, 60)}
    margin-bottom: 80px;
  }
`;

export const CenterColStyled = styled(Col)`
  text-align: center;
`;

export const CountStyled = styled.div`
  color: #FFB22E;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${getTextStyles('Montserrat', 700, 48, 60)}
`;

export const CountTextStyled = styled.div`
  ${getTextStyles('Montserrat', 400, 18, 28)}
`;

export const RowStyled = styled(Row)`
  &.visible {
    -webkit-animation: fade-in 3.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: fade-in 3.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

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
  }
`;

export const ContainerStyled = styled(Container)`

  ${ADAPTIVE.minWidth.mobile} {
    /* height: 650px; */
  }

  ${ADAPTIVE.minWidth.desktop} {
    height: 650px;
  }
`;