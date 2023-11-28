import styled from "styled-components";
import { Col } from "../../common/components/grid";
import { getTextStyles } from "../../common/utils/styles";

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
  background: #141414;
  margin-bottom: 16px;
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

export const ChipsLabelStyled = styled.div`
  background-color: #BFBFBF;
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  display: inline-flex;
  color: #000;
  padding: 4px 12px;
  border-radius: 30px;
  margin-left: 8px;
  top: -2px;
  position: relative;
  vertical-align: middle;
  ${getTextStyles('Montserrat', 700, 12, 18)}
`;

export const ColStyled = styled(Col)`
  display: flex;
`;