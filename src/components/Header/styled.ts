import styled from "styled-components";
import { Col, Container } from "../../common/components/grid";


export const HeaderContainerStyled = styled(Container)`
  width: 100%;
  align-items: center;
`;

export const HeaderStyled = styled.header`
  width: 100%;
  top: 0;
  position: sticky;
  backdrop-filter: blur(10px);
  background-color: rgba(0,0,0,.72);
  z-index: 99;
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
