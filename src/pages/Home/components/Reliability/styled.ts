import styled, { css } from 'styled-components';
import { Col, Container } from '../../../../common/components/grid';
import { getTextStyles } from '../../../../common/utils/styles';
import { textLayerShadow } from '../../../../common/tokens/elevations';
import { RegularTextLevel1 } from '../../../../common/tokens/typography';

export const ReliabilityStyled = styled.div``;

export const ContainerStyled = styled(Container)`
  min-height: 618px;
`;

export const GradientLayerStyled = styled.div`
  height: 618px;
  background: radial-gradient(29.32% 39.65% at 50% 50%, #1D4079 0.02%, rgba(1, 1, 1, 0.00) 100%);
`;

export const LineStyled = styled.div`
  width: 800px;
`;

export const HeadingStyled = styled.div`
  ${getTextStyles('Montserrat', 700, 24, 32)}
  color: #FFB22E;
  text-shadow: ${textLayerShadow};
`;

export const RegularTextStyled = styled(RegularTextLevel1)`
  text-shadow: ${textLayerShadow};
`;

export const ColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding-top: 180px;
  z-index: 5;
`;

export const ValueStyled = styled.div<{ deg?: number }>`
  ${getTextStyles('Montserrat', 500, 128, 128)}
  align-self: stretch;
  ${({ deg }) => deg && css`
    background: linear-gradient(${deg}deg, #ffb22e 0%, #2ed9ff 0%, #ffb22e 59%, #2ed9ff 100%);
  `}
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  margin-top: 200px;
`;

export const ValueTextStyled = styled.div`
  ${getTextStyles('Montserrat', 400, 36, 44)}
  color: #FFB22E;
`;
