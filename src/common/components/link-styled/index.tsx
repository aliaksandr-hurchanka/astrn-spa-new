import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorGold600 } from '../../tokens/colors';

export const LinkStyled = styled(Link)`
  color: ${colorGold600};
  text-decoration: none;
  padding: 16px 24px;
`;
