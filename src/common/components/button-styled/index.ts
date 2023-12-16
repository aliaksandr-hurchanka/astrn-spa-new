import styled, { css } from 'styled-components';
import { getTextStyles } from '../../utils/styles';

export const ButtonStyled = styled.button<{ type?: 'small' | 'large' | undefined; btnWidth?: '100%' | 'auto' | undefined }>`
  border-radius: 6px;
	border: none;
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  display: flex;
  padding: 16px 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  color: #1F1F1F;
	cursor: pointer;
  background: #FFB22E;
  ${getTextStyles('Montserrat', 500, 18, 28)}

  ${({ type }) => type && type === 'small' && css`
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    height: 36px;
    ${getTextStyles('Montserrat', 500, 14, 20)}
  `}

  ${({ btnWidth }) => btnWidth && css`width: ${btnWidth};`}
`;