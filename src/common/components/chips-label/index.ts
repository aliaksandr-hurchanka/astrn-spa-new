import styled from 'styled-components';
import { getTextStyles } from "../../utils/styles";

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
  text-transform: lowercase;
  ${getTextStyles('Montserrat', 700, 12, 18)}
`;