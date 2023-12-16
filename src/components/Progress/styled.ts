import styled from "styled-components";
import { getTextStyles } from "../../common/utils/styles";
import { SVGIcon } from '../../common/components/svg-icon';
import { ADAPTIVE } from "../../common/tokens/screen";


export const ProgressStyled = styled.div`
  position: relative;
  width: 100%;

  ${ADAPTIVE.maxWidth.mobile} {
    height: 46px;
  }
`;

export const ArrowLineContainerStyled = styled.div`
  display: flex;
`;

export const ArrowLine = styled.div<{ isWater?: boolean }>`
  
  height: 46px;
  width: 100%;

  ${ADAPTIVE.minWidth.tablet} {
    height: 66px;
    width: 100%;
  }

  ${ADAPTIVE.minWidth.desktop} {
    height: 66px;
    width: 100%;
  }
  
  background: ${({ isWater }) => isWater
    ? 'linear-gradient(270deg, #2C62B9 0.74%, rgba(44, 98, 185, 0.00) 99.97%)'
    : 'linear-gradient(270deg, #15803D 0.74%, rgba(21, 128, 61, 0.00) 99.97%)'};
`;

export const CountStyled = styled.div`
  position: absolute;
  display: flex;
  top: 15%;
  left: 24px;
  color: #BFBFBF;

  ${ADAPTIVE.minWidth.tablet} {
    top: 25%;
  }

  ${getTextStyles('Montserrat', 400, 30, 38)}

  > span {
    ${getTextStyles('Montserrat', 400, 12, 18)}
  }
`;

export const ArrowIconStyled = styled(SVGIcon)`
  svg {
    height: 46px;
    margin-left: -3px;
  }
  
  ${ADAPTIVE.minWidth.tablet} {
    svg {
      height: 66px;
      margin-left: -1px;
    }
  }

  ${ADAPTIVE.minWidth.desktop} {
    svg {
      height: 66px;
      margin-left: -1px;
    }
  }
`;

export const IconStyled = styled(SVGIcon)`
  margin-right: 8px;
`;

export const BoostStyled = styled.div`
  display: flex;
  color: #BFBFBF;

  ${ADAPTIVE.minWidth.mobile} {
    ${getTextStyles('Montserrat', 400, 30, 38)}
    align-items: center;
    
    > span {
      ${getTextStyles('Montserrat', 400, 12, 18)}
      position: relative;
      top: -6px;
    }
  }

  ${ADAPTIVE.minWidth.desktop} {
    ${getTextStyles('Montserrat', 400, 48, 60)}
    
    > span {
      ${getTextStyles('Montserrat', 400, 12, 18)}
    }
  }

  margin-left: 8px;
`;
