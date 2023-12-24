import styled from "styled-components";
import { Image } from "../../common/components/image";
import { Col, Container, Row } from "../../common/components/grid";
import { getTextStyles } from "../../common/utils/styles";
import LeftShadow from '../../assets/admin-panel-section/shadow-1.png';
import RightShadow from '../../assets/admin-panel-section/shadow-2.png';

// export const ImageLayer1Styled = styled(Image)`
//   /* position: absolute; */
//   max-width: 1200px;
//   z-index: 2;
// `;

// export const ImageLayer2Styled = styled(Image)`
//   /* position: absolute; */
//   z-index: 3;
// `;

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
  padding: 110px 0 150px 0;

  /* &.visible-admin-panel {
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
  } */
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
