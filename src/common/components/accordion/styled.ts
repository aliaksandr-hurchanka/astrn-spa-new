import styled from "styled-components";
import { getTextStyles } from "../../utils/styles";

/* Style the accordion section */
export const AccordionSectionStyled = styled.div<{ theme?: string }>`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme === 'faq' && `
    border-radius: 8px;
    background: #141414;
    padding: 20px 20px 15px 20px;
    margin-bottom: 40px;
  `}
`;

/* Style the buttons that are used to open and close the accordion panel */
export const AccordionStyled = styled.div`
  ${getTextStyles('Montserrat', 700, 20, 30)}
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;

  :hover,
  .active {
    /* background-color: #fff; */
  }
`;

export const AccordionTitleStyled = styled.p`
  ${getTextStyles('Montserrat', 700, 20, 30)}
`;

export const AccordionContentStyled = styled.div<{ theme?: string }>`
  ${getTextStyles('Montserrat', 400, 16, 24)}

  overflow: hidden;
  transition: max-height 0.6s ease;

  ${({ theme }) => theme === 'faq' && `
    
  `}
`;

export const AccordionTextStyled = styled.div`
  ${getTextStyles('Montserrat', 400, 16, 24)}
`;

export const AccordionMainTitleStyled = styled.div`
  ${getTextStyles('Montserrat', 700, 48, 60)}
  padding: 15px 40px 0 0;
  text-transform: uppercase;
`;
