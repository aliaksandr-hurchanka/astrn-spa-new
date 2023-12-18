import styled from 'styled-components';
import Select from 'react-select';
import { Image } from '../../common/components/image';
import { HeadingLevel1 } from '../../common/tokens/typography';
import { ChipsLabelStyled } from '../../common/components/chips-label';
import { getTextStyles } from "../../common/utils/styles";
import { Col, Row } from '../../common/components/grid';
import { ADAPTIVE } from '../../common/tokens/screen';

export const ImageStyled = styled(Image)`
  ${ADAPTIVE.minWidth.mobile} {
    margin-bottom: 40px;
  }
`;

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
  margin: 12px 16px;
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
  margin: 12px 16px;
`;

export const SelectStyled = styled(Select)`
  display: flex;
  height: 46px;
  color: #000;
  > div {
    cursor: pointer;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  margin-bottom: 8px;
`;

export const InputStyled = styled.input`
  display: inline-flex;
  height: 48px;
  border: none;
  vertical-align: top;
  border-radius: 8px;
  text-align: center;
  width: 72px;
  padding: 0 46px;
  outline-width: 0;
  background: #fff;

  ${getTextStyles('Montserrat', 400, 16, 24)}
`;

export const MinusButtonStyled = styled.button`
  display: inline-flex;
  padding: 12px 8px 10px 14px;
  cursor: pointer;

  margin-right: -46px;
  z-index: 0;
  position: relative;
  border: none;
  border-radius: 8px 0 0 8px;
  background: #fff;
`;

export const PlusButtonStyled = styled.button`
  display: inline-flex;
  padding: 12px 8px 10px 14px;
  cursor: pointer;

  margin-left: -50px;
  z-index: 0;
  position: relative;
  border: none;
  border-radius: 0 8px 8px 0;
  background: #fff;
`;

export const PriceLabelStyled = styled.label`
  ${getTextStyles('Montserrat', 400, 30, 38)}
`;

export const PriceStyled = styled.div`
  ${getTextStyles('Montserrat', 400, 60, 72)}
`;

export const CurrencyStyled = styled.span`
  ${getTextStyles('Montserrat', 400, 30, 38)}
  color: #BFBFBF;
  display: inline-flex;
  vertical-align: top;
  margin-right: 6px;
`;

export const PriceColStyled = styled(Col)`
  text-align: right;
`;

export const PaymentMethodsStyled = styled.div`
  display: block;
  text-align: right;
  height: 40px;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  margin: 0 16px 40px;

  ${ADAPTIVE.minWidth.tablet} {
    display: flex;
    margin: 0px;
    box-sizing: border-box;
    margin: 16px;
    justify-content: flex-end;
    flex-direction: row;
    right: 0;
    position: relative;
  }
`;

export const MethodStyled = styled.div<{ color: string }>`
  ${({ color }) => color && `color: ${color};`}
  align-items: center;
  gap: 4px;

  display: flex;
  justify-content: flex-end;

  ${ADAPTIVE.minWidth.tablet} {
    display: inline-flex;
  }
`;

export const DiscountStyled = styled.div`
  ${getTextStyles('Montserrat', 400, 30, 38)}
  color: #FFB22E;
  text-decoration: line-through;
  span {
    ${getTextStyles('Montserrat', 400, 18, 28)}
    color: #FFB22E;
  }
`;
