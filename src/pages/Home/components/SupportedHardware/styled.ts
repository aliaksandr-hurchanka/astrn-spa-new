import { Link } from "react-router-dom";
import styled from "styled-components";
import { getTextStyles } from "../../../../common/utils/styles";
import { Col } from "../../../../common/components/grid";

export const ButtonLinkStyled = styled(Link)`
  display: inline-flex;
  height: 56px;
  padding: 16px 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #FFB22E;
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  ${getTextStyles('Montserrat', 500, 18, 28)}
  color: #000;
  height: auto;
  text-decoration: none;
`;

export const ButtonColStyled = styled(Col)`
  text-align: center;
`;
