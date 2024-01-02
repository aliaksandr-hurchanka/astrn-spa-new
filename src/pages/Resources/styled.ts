import styled from "styled-components";
import { Container, Row } from "../../common/components/grid";
import { Image } from '../../common/components/image';
import { ADAPTIVE } from "../../common/tokens/screen";

export const ResourcesPageStyled = styled.div`
  padding-bottom: 48px;
`;

export const ContainerStyled = styled(Container)`
  ${ADAPTIVE.minWidth.desktop} {

  }
`;

export const TitleStyled = styled.div`
  margin-top: 0;

  ${ADAPTIVE.minWidth.desktop} {
    text-align: left;
    margin-top: 80px;
  }
`;

export const SubTitleStyled = styled.div`
  margin-top: 16px;
  text-align: left;
`;

export const ImageStyled = styled(Image)`
  height: auto;
`;

export const RowStyled = styled(Row)`

  min-height: auto;

  ${ADAPTIVE.minWidth.tablet} {
    min-height: 346px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    min-height: 546px;
  }

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
`;