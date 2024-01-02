import { colorGold600 } from '@astrn/common/tokens/colors';
import styled from 'styled-components';

export const BreadcrumbsStyled = styled.div`
  display: flex;
  gap: 16px;
  padding: 40px 0; 
  a {
    color: ${colorGold600};
    text-decoration: none;
  }
`;
