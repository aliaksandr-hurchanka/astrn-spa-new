import styled from "styled-components";
import { Col, Container, Row } from "../../common/components/grid";
import LeftShadow from '../../assets/admin-panel-section/shadow-1.png';
import RightShadow from '../../assets/admin-panel-section/shadow-2.png';
import { ADAPTIVE } from "../../common/tokens/screen";
import { ParallaxBanner } from "react-scroll-parallax";


export const AdminPanelBannerStyled = styled.div`
  position: relative;

  ${ADAPTIVE.minWidth.mobile} {
    height: 700px;
  }
`;

export const ContainerStyled = styled(Container)`
  z-index: 5;
  display: flex;
  flex-direction: column;
`;

export const RowStyled = styled(Row)`
  width: 100%;
`;

export const ColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 0;

  ${ADAPTIVE.minWidth.mobile} {
    padding-bottom: 40px;
  }

  ${ADAPTIVE.minWidth.tablet} {
    // padding-bottom: 50px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    padding: 110px 0 150px 0;
  }
`;

export const ImageStyled = styled.div`

  ${ADAPTIVE.minWidth.mobile} {
    max-width: 100%;
    img {
      margin: 0 auto;
      width: 330px;
    }
  }

  ${ADAPTIVE.minWidth.tablet} {
    img {
      width: 100%;
      height: 100%; 
    }
  }

  ${ADAPTIVE.minWidth.desktop} {
    img {
      width: 100%;
      height: 100%; 
    }
  }
`;

export const LeftShadowStyled = styled.div`
  position: absolute;
  background: url(${LeftShadow});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`;

export const RightShadowStyled = styled.div`
  position: absolute;
  background: url(${RightShadow});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position-x: right;
  top: 0;
  z-index: 0;
`;

export const ParallaxTextBannerStyled = styled(ParallaxBanner)`
  ${ADAPTIVE.minWidth.mobile} {
    height: 230px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    height: 500px;
  }
`;

export const ParallaxImageBannerStyled = styled(ParallaxBanner)`
  ${ADAPTIVE.minWidth.mobile} {
    height: 400px;
    img {
      max-width: 346px;
      max-height: 346px; 
      object-fit: contain;
    }
  }
`;

export const ColDeviceStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;