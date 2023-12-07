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
  background-color: #000;
  z-index: 1;
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
