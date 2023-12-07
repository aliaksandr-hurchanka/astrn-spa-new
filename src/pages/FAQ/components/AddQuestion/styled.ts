import styled from "styled-components";
import { getTextStyles } from "../../../../common/utils/styles";

export const AddQuestionSectionStyled = styled.div`
  width: 100%;
  margin-top: 80px;
`;

export const TitleStyled = styled.h3`
  color: #2A3342;
  text-align: center;
  ${getTextStyles('Montserrat', 700, 36, 44)}
`;

export const SubTitleStyled = styled.div`
  color: #1F1F1F;
  text-align: center;
  ${getTextStyles('Montserrat', 400, 16, 24)}
`;

export const FormStyled = styled.div`
  background-color: #F7F8F9;
  width: 60%;
  margin: 0 auto;
  border-radius: 6px;
  text-align: center;
  padding: 63px;
  margin-bottom: -180px;
  z-index: 9;
  position: relative;
`;

export const BgStyled = styled.div`
  height: 250px;
  display: flex;
  width: 100%;
  background-color: #FFB22E;
`;

export const ButtonStyled = styled.button`
  margin-top: 30px;
  display: inline-flex;
  height: 56px;
  padding: 16px 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #FFB22E;
  border: none;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  ${getTextStyles('Montserrat', 500, 18, 28)}
`;