import styled from 'styled-components';
import { getTextStyles } from '../../common/utils/styles';
import { Col, Row } from '../../common/components/grid';
import { ADAPTIVE } from '../../common/tokens/screen';
import { Link } from 'react-router-dom';

export const ResourcesListStyled = styled.div`
  margin-top: 0px;
`;

export const ResourceStyled = styled.div`
  padding: 24px 0;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #141414;
  background: #141414;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover {
    border: 1px solid #FFB22E;
    background-color: rgba(38, 38, 38, .1);
  }
`;

export const ResourceNameStyled = styled.div`
  ${getTextStyles('Montserrat', 700, 30, 38)}

  > span {
    display: flex;
    color: #F0F0F0;
    margin-top: 8px;

    ${getTextStyles('Montserrat', 400, 16, 24)}
  }
`;

export const RowStyled = styled(Row)`
  ${ADAPTIVE.maxWidth.mobile} {
    gap: 16px;
  }
`;

export const ColStyled = styled(Col)`
  display: flex;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  ${getTextStyles('Montserrat', 700, 30, 38)}
  color: #fff;
`;

export const DetailsButtonStyled = styled.div`
  ${getTextStyles('Montserrat', 500, 14, 20)}
  color: #FFB22E;
`;

