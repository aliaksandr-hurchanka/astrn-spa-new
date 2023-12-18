import styled from "styled-components";
import { Container } from "../../common/components/grid";
// import BackImage from '../../assets/ResourcesPatternDark.png';
// import MobileBackImage from '../../assets/resources/mobile-bg.png';
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