import styled from "styled-components";
import { Image } from '../../common/components/image';
import { Col } from "../../common/components/grid";
import LeftShadow from '../../assets/admin-panel-section/shadow-1.png';
import RightShadow from '../../assets/admin-panel-section/shadow-2.png';
import { ADAPTIVE } from "../../common/tokens/screen";

export const AdministratorPanelStyled = styled.div`
  min-height: 456px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const LeftColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 5;
`;

export const RightColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 5;
  img {
    width: 451px;
    height: 324px;
    z-index: 5;
  }

  ${ADAPTIVE.minWidth.mobile} {
    gap: 24px
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

export const ImageStyled = styled(Image)`
  ${ADAPTIVE.minWidth.mobile} {
    margin: 0 auto;
    padding-bottom: 24px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
