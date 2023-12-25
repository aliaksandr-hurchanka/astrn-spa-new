import styled from "styled-components";
import { Image } from "../../common/components/image";
import { Col, Container, Row } from "../../common/components/grid";
import { getTextStyles } from "../../common/utils/styles";
import LeftShadow from '../../assets/admin-panel-section/shadow-1.png';
import RightShadow from '../../assets/admin-panel-section/shadow-2.png';
import { ADAPTIVE } from "../../common/tokens/screen";


export const AdminPanelBannerStyled = styled.div`
  position: relative;
`;

export const ContainerStyled = styled(Container)`
  z-index: 5;
`;

export const RowStyled = styled(Row)`
  width: 100%;
`;

export const ColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 0;

  ${ADAPTIVE.minWidth.desktop} {
    padding: 110px 0 150px 0;
  }
`;

export const ImageStyled = styled.div`
  max-width: 655px;
  max-height: 470px;
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
