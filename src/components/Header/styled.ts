import styled, { css } from "styled-components";
import { Col, Container } from "../../common/components/grid";


export const HeaderContainerStyled = styled(Container)`
  width: 100%;
  align-items: center;
`;

export const HeaderStyled = styled.header<{ isMenuShowed: boolean }>`
  width: 100%;
  top: 0;
  position: sticky;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  will-change: transform;
  background-color: rgba(0,0,0,.22);
  z-index: 99;

  ${({ isMenuShowed }) => isMenuShowed && css`
    backdrop-filter: none;
    background-color: #000;
  `}
`;

export const ColStyled = styled(Col)`
  display: inline-flex;
  gap: 16px;
  justify-content: flex-end;
`;

export const MenuColStyled = styled(Col)`
  display: flex;
  justify-content: center;
`;
