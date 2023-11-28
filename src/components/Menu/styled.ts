import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuCategoriesStyled = styled.div`
  /* position: absolute;
  top: 28px;
  left: 512px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-29xl); */

  display: flex;
  gap: 48px;
`;

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
