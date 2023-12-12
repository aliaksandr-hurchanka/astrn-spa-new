import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuItemStyled = styled(NavLink)`
  position: relative;
  line-height: 24px;
  text-transform: uppercase;

  color: var(--colors-text-primary, #FFF);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }
`;
