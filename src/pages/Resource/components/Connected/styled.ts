import styled from 'styled-components';
import { getTextStyles } from '../../../../common/utils/styles';
import { Col } from '../../../../common/components/grid';

export const TitleStyled = styled.div`
  ${getTextStyles('Montserrat', 700, 48, 60)}
  text-transform: uppercase;
  margin-bottom: 26px;
`;

export const DescriptionStyled = styled.p`
  ${getTextStyles('Montserrat', 400, 20, 30)}
  color: #F0F0F0;
`;

export const FormStyled = styled.form`
  padding: 40px;
  background-color: #fff;
  color: #000;
  border-radius: 6px;
  box-shadow: 0px 1px 2px 0px rgba(85, 105, 135, 0.10);
`;

export const FormRowStyled = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  ${getTextStyles('Montserrat', 400, 20, 30)}

  input {
    border-radius: 8px;
    border: 1px solid var(--Gray-200, #D5DAE1);
    background: var(--White, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    padding: 10px 14px;
    &::placeholder {
      color: #BFBFBF;
      ${getTextStyles('Montserrat', 400, 20, 30)}
    }
  }

  textarea {
    border-radius: 8px;
    border: 1px solid var(--Gray-200, #D5DAE1);
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    height: 220px;
    padding: 10px 14px;

    &::placeholder {
      color: #BFBFBF;
      ${getTextStyles('Montserrat', 400, 20, 30)}
    }
  }
`;

export const ColStyled = styled(Col)`
  gap: 16px;
  display: flex;
  flex-direction: column;
`;