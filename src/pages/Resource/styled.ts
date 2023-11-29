import styled from 'styled-components';
import Select from 'react-select';
import { HeadingLevel1 } from '../../common/tokens/typography';
import { ChipsLabelStyled } from '../../common/components/chips-label';
import { getTextStyles } from "../../common/utils/styles";
import { Col, Row } from '../../common/components/grid';

export const NameStyled = styled(HeadingLevel1)`
  letter-spacing: -0.96px;
  text-transform: uppercase;
  margin-bottom: 40px;

  > span {
    display: flex;
    color: #F0F0F0;
    margin-top: 8px;
    text-transform: capitalize;

    ${getTextStyles('Montserrat', 400, 16, 24)}
  }
`;

export const ChipsStyled = styled(ChipsLabelStyled)`
    vertical-align: top;
`;

export const CharacteristicsStyled = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const RowStyled = styled(Row)`
  width: 100%;
`;

export const ColStyled = styled(Col)`
  display: flex;
`;

export const PriceSectionTitleStyled = styled.div`
  margin-top: 12px;
  display: flex;
  ${getTextStyles('Montserrat', 400, 16, 24)}
`;

export const CalculatorStyled = styled.div`
  border-radius: 6px;
  display: flex;
  padding: 24px 0;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  background: #141414;
  width: 100%;
  margin-top: 12px;
`;

export const SelectStyled = styled(Select)`
  display: flex;
  height: 46px;
  color: #000;
`;
