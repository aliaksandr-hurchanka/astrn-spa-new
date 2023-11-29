import styled from "styled-components";
import { Col } from "../../common/components/grid";
import { getTextStyles } from "../../common/utils/styles";
import { Link } from "react-router-dom";

export const ResourcesPageStyled = styled.div``;

export const TitleStyled = styled.div`
  margin-top: 80px;
  text-align: center;
`;

export const SubTitleStyled = styled.div`
  margin-top: 16px;
  text-align: center;
`;

export const ResourcesListStyled = styled.div`
  margin-top: 200px;
`;

export const ResourceStyled = styled.div`
  padding: 24px 0;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #141414;
  background: #141414;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover {
    border: 1px solid #FFB22E;
    background-color: rgba(255, 178, 46, .2);
  }
`;

export const ResourceNameStyled = styled.div`
  ${getTextStyles('Montserrat', 700, 30, 38)}

  > span {
    display: flex;
    color: #F0F0F0;
    margin-top: 8px;

    ${getTextStyles('Montserrat', 400, 16, 24)}
  }
`;

export const ColStyled = styled(Col)`
  display: flex;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  ${getTextStyles('Montserrat', 700, 30, 38)}
  color: #fff;
`;