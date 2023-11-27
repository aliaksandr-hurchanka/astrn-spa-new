import styled from "styled-components";
import { getTextStyles } from "../../../../common/utils/styles";
import { SVGIcon } from '../../../../common/components/svg-icon';


export const ProgressStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const ArrowLineContainerStyled = styled.div`
  display: flex;
`;

export const ArrowLine = styled.div<{ isWater?: boolean }>`
  height: 66px;
  width: 100%;
  background: ${({ isWater }) => isWater
    ? 'linear-gradient(270deg, #2C62B9 0.74%, rgba(44, 98, 185, 0.00) 99.97%)'
    : 'linear-gradient(270deg, #15803D 0.74%, rgba(21, 128, 61, 0.00) 99.97%)'};
`;

export const CountStyled = styled.div`
  position: absolute;
  display: flex;
  top: 25%;
  left: 24px;
  color: #BFBFBF;
  ${getTextStyles('Montserrat', 400, 30, 38)}

  > span {
    ${getTextStyles('Montserrat', 400, 12, 18)}
  }
`;

export const ArrowIconStyled = styled(SVGIcon)`
  margin-left: -1px;
`;

export const IconStyled = styled(SVGIcon)`
  margin-right: 8px;
`;

export const BoostStyled = styled.div`
  display: flex;
  ${getTextStyles('Montserrat', 400, 48, 60)}
  
  > span {
    ${getTextStyles('Montserrat', 400, 12, 18)}
  }

  margin-left: 8px;
`;
