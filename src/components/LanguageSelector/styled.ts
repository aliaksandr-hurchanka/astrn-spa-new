import styled from 'styled-components';
import { getTextStyles } from '../../common/utils/styles';

export const LanguageSelectorStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;

export const LanguageListStyled = styled.ul`
  border-radius: 8px;
  background: #141414;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  position: absolute;

  display: flex;
  padding: 12px;
  justify-content: center;
  flex-direction: column;


  right: 0;
  top: 60%;
  
  margin-right: 47px;
`;

export const LanguageItemStyled = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  list-style-type: none;
  padding: 16px;
  border: 1px solid #141414;

  &:hover {
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #FFB22E;
    background: #262626;
    box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  }
`;

export const LanguageMobileListStyled = styled.ul`
  position: relative;
  height: calc(100dvh - 165px);
  background: #000;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 16px;
`;

export const LanguageMobileItemStyled = styled.li`
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
  list-style-type: none;
  padding: 16px;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 16px;
  border: 1px solid #000;

  &:hover {
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid var(--colors-primary, #FFB22E);
    background: var(--palette-gray-grey-700, #262626);
    box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
  }
`;

export const BackButtonStyled = styled.div`
  align-items: center;
  text-align: center;
  cursor: pointer;
  ${getTextStyles('Montserrat', 400, 18, 28)}
`;

export const LangCodeStyled = styled.span`
  text-transform: uppercase;
`;
