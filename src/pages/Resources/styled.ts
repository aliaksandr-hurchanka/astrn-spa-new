import styled from "styled-components";
import { Col } from "../../common/components/grid";

export const ResourcesPageStyled = styled.div`
  height: calc(100vh - 80px);
  background: #000;
`;

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
  padding: 24px;
  align-items: center;
  border-radius: 6px;
  background: #141414;
  margin-bottom: 16px;
`;

export const ResourceNameStyled = styled.div`
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
`;

export const ColStyled = styled(Col)`
  display: flex;
`;